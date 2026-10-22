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
  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // En-tête compact au défilement
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // Diaporama de l'accueil
  const slides = document.querySelectorAll(".hero-slides .bg");
  const dots = document.querySelectorAll(".hero-dots i");
  const capText = document.querySelector(".hero-cap-text");
  if (slides.length > 1 && !reduceMotion) {
    let current = 0;
    setInterval(function () {
      slides[current].classList.remove("is-active");
      if (dots[current]) dots[current].classList.remove("is-active");
      current = (current + 1) % slides.length;
      slides[current].classList.add("is-active");
      if (dots[current]) dots[current].classList.add("is-active");
      if (capText) capText.textContent = slides[current].getAttribute("data-caption");
    }, 6000);
  }

  // Domaines d'expertise : onglets avec défilement automatique
  const xp = document.querySelector("[data-tabs]");
  if (xp) {
    const tabs = Array.prototype.slice.call(xp.querySelectorAll('[role="tab"]'));
    let idx = 0;
    const select = function (i, focus) {
      idx = (i + tabs.length) % tabs.length;
      tabs.forEach(function (t, n) {
        const on = n === idx;
        t.setAttribute("aria-selected", on ? "true" : "false");
        t.tabIndex = on ? 0 : -1;
        document.getElementById(t.getAttribute("aria-controls")).classList.toggle("is-active", on);
      });
      if (focus) tabs[idx].focus();
    };
    tabs.forEach(function (t, n) {
      t.addEventListener("click", function () { select(n); });
      t.addEventListener("keydown", function (e) {
        if (e.key === "ArrowDown" || e.key === "ArrowRight") { e.preventDefault(); select(idx + 1, true); }
        if (e.key === "ArrowUp" || e.key === "ArrowLeft") { e.preventDefault(); select(idx - 1, true); }
      });
      // La barre de progression de l'onglet actif déclenche le passage au suivant
      t.addEventListener("animationend", function () { if (n === idx) select(idx + 1); });
    });
    xp.addEventListener("mouseenter", function () { xp.classList.add("is-paused"); });
    xp.addEventListener("mouseleave", function () { xp.classList.remove("is-paused"); });
    xp.addEventListener("focusin", function () { xp.classList.add("is-paused"); });
    // Défilement uniquement lorsque la section est visible
    if (canObserve) {
      xp.classList.add("is-offscreen");
      new IntersectionObserver(function (entries) {
        xp.classList.toggle("is-offscreen", !entries[0].isIntersecting);
      }, { threshold: 0.3 }).observe(xp);
    }
  }

  // Applications : carrousel horizontal
  const rail = document.querySelector(".rail");
  if (rail) {
    document.querySelectorAll("[data-rail]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const card = rail.querySelector(".rail-card");
        const step = card ? card.getBoundingClientRect().width + 18 : 320;
        rail.scrollBy({ left: step * Number(btn.getAttribute("data-rail")), behavior: reduceMotion ? "auto" : "smooth" });
      });
    });
  }

  // Matériaux : survol d'un matériau = mise en avant de sa couche
  const stack = document.querySelector(".stack");
  if (stack) {
    const layers = stack.querySelectorAll("i");
    document.querySelectorAll(".mat-list li").forEach(function (li) {
      const n = li.getAttribute("data-layer");
      li.addEventListener("mouseenter", function () {
        stack.classList.add("has-focus");
        layers.forEach(function (l) { l.classList.toggle("is-on", l.getAttribute("data-layer") === n); });
      });
      li.addEventListener("mouseleave", function () {
        stack.classList.remove("has-focus");
        layers.forEach(function (l) { l.classList.remove("is-on"); });
      });
    });
  }

  // Qualité : panneaux extensibles
  const qPanels = document.querySelectorAll(".q-panel");
  qPanels.forEach(function (p) {
    const open = function () {
      qPanels.forEach(function (o) { o.classList.toggle("is-open", o === p); });
    };
    p.addEventListener("mouseenter", open);
    p.addEventListener("click", open);
  });

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
