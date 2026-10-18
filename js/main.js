(function () {
  const EMAIL = "algrnsolutionssarl@gmail.com";

  // Menu mobile
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  const canObserve = "IntersectionObserver" in window;

  // Apparition au défilement
  const reveals = document.querySelectorAll(".reveal");
  if (canObserve) {
    const io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  }

  // Vidéos : lecture uniquement lorsqu'elles sont visibles
  const videos = document.querySelectorAll("video[data-autoplay]");
  if (videos.length && canObserve) {
    const vo = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          const v = e.target;
          if (e.isIntersecting) {
            const p = v.play();
            if (p && p.catch) p.catch(function () {});
          } else {
            v.pause();
          }
        });
      },
      { threshold: 0.35 }
    );
    videos.forEach(function (v) { vo.observe(v); });
  }

  // Filtres de la galerie
  const chips = document.querySelectorAll(".chip");
  const items = document.querySelectorAll(".gallery figure");
  if (chips.length && items.length) {
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        const cat = chip.getAttribute("data-filter");
        chips.forEach(function (c) {
          c.setAttribute("aria-pressed", c === chip ? "true" : "false");
        });
        items.forEach(function (it) {
          it.hidden = !(cat === "all" || it.getAttribute("data-cat") === cat);
        });
      });
    });
  }

  // Visionneuse photo
  const lb = document.getElementById("lightbox");
  if (lb && items.length) {
    const lbImg = lb.querySelector("img");
    const lbCap = lb.querySelector("figcaption");
    let current = 0;
    let visible = [];

    function show(i) {
      current = (i + visible.length) % visible.length;
      const fig = visible[current];
      const img = fig.querySelector("img");
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      lbCap.textContent = fig.querySelector("figcaption").textContent;
    }
    function open(fig) {
      visible = Array.prototype.filter.call(items, function (it) { return !it.hidden; });
      show(visible.indexOf(fig));
      lb.classList.add("is-open");
      document.body.style.overflow = "hidden";
      lb.querySelector(".lb-close").focus();
    }
    function close() {
      lb.classList.remove("is-open");
      document.body.style.overflow = "";
    }

    items.forEach(function (fig) {
      fig.querySelector("button").addEventListener("click", function () { open(fig); });
    });
    lb.querySelector(".lb-close").addEventListener("click", close);
    lb.querySelector(".lb-prev").addEventListener("click", function () { show(current - 1); });
    lb.querySelector(".lb-next").addEventListener("click", function () { show(current + 1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("is-open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") show(current - 1);
      if (e.key === "ArrowRight") show(current + 1);
    });
  }

  // Formulaire de demande de devis (ouverture du client e-mail)
  const form = document.getElementById("devis-form");
  if (form) {
    // Présélection du secteur depuis une page secteur (contact.html?secteur=…)
    const secteur = new URLSearchParams(window.location.search).get("secteur");
    const select = form.querySelector('select[name="secteur"]');
    if (secteur && select) {
      Array.prototype.forEach.call(select.options, function (o) {
        if (o.value === secteur || o.textContent === secteur) select.value = o.value;
      });
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const fd = new FormData(form);
      const lines = [
        "Demande de devis – ALGRN Solutions",
        "",
        "Nom et prénom : " + (fd.get("nom") || ""),
        "Entreprise : " + (fd.get("entreprise") || ""),
        "Téléphone : " + (fd.get("tel") || ""),
        "E-mail : " + (fd.get("email") || ""),
        "Secteur : " + (fd.get("secteur") || ""),
        "Wilaya du chantier : " + (fd.get("wilaya") || ""),
        "Surface approximative : " + (fd.get("surface") ? fd.get("surface") + " m²" : ""),
        "",
        "Description du projet :",
        fd.get("message") || "",
      ];
      const subject = encodeURIComponent("Demande de devis – " + (fd.get("secteur") || "ALGRN Solutions"));
      const body = encodeURIComponent(lines.join("\n"));
      window.location.href = "mailto:" + EMAIL + "?subject=" + subject + "&body=" + body;
      const ok = document.getElementById("form-ok");
      if (ok) ok.classList.add("is-on");
    });
  }
})();
