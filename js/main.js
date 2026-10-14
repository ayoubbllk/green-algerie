(function () {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  const tabs = document.querySelectorAll(".tab");
  const panel = document.getElementById("secteur-panel");
  if (tabs.length && panel) {
    const data = [
      {
        img: "images/bourbier.jpg",
        alt: "Bourbier pétrolier étanché près d’un forage",
        tag: "BOURBIERS DE FORAGE",
        enjeu: "Empêcher les boues et hydrocarbures d’atteindre le sol et la nappe.",
        texte:
          "Les bourbiers de forage sont étanchés par géomembrane PEHD soudée, posée sur géotextile, puis contrôlée avant mise en service.",
        services: ["Bourbiers pétroliers", "Géomembranes", "Terrassements"],
      },
      {
        img: "images/cet.jpg",
        alt: "Casier de centre d’enfouissement en cours d’étanchéité",
        tag: "CENTRES D’ENFOUISSEMENT",
        enjeu: "Confiner les déchets et drainer les lixiviats en toute sécurité.",
        texte:
          "Les casiers associent barrière étanche, couche drainante et géotextile de protection, sur le fond comme sur les talus.",
        services: ["Centres d’enfouissement technique", "Géocomposites", "Lagunes"],
      },
      {
        img: "images/irrigation.jpg",
        alt: "Bassin d’irrigation au milieu des cultures",
        tag: "BASSINS D’IRRIGATION",
        enjeu: "Garder chaque mètre cube d’eau au lieu de le perdre dans le sol.",
        texte:
          "Bassins d’irrigation et lagunes sont revêtus d’une géomembrane adaptée au soleil et au volume stocké.",
        services: ["Bassins d’irrigation", "Lagunes", "Géotextiles"],
      },
      {
        img: "images/terrasse.jpg",
        alt: "Immeuble avec terrasse-jardin",
        tag: "TERRASSES · PISCINES · SOLS",
        enjeu: "Des toitures, piscines et sous-sols qui ne fuient plus.",
        texte:
          "Terrasses-jardins, piscines, cuvelages et sols industriels : systèmes d’étanchéité récents et revêtements époxy.",
        services: ["Terrasses-jardins", "Piscines", "Époxy-Résine"],
      },
    ];

    function render(i) {
      const s = data[i];
      panel.querySelector("img").src = s.img;
      panel.querySelector("img").alt = s.alt;
      panel.querySelector(".tag").textContent = s.tag;
      panel.querySelector(".enjeu").textContent = s.enjeu;
      panel.querySelector(".texte").textContent = s.texte;
      panel.querySelector(".panel-links").innerHTML = s.services
        .map(
          (x) =>
            '<a href="geomembranes.html"><span>' +
            x +
            '</span><span aria-hidden="true">→</span></a>'
        )
        .join("");
      tabs.forEach(function (t, idx) {
        t.setAttribute("aria-selected", idx === i ? "true" : "false");
      });
    }

    tabs.forEach(function (tab, i) {
      tab.addEventListener("click", function () {
        render(i);
      });
    });
  }

  const chips = document.querySelectorAll(".chip");
  const rows = document.querySelectorAll("[data-fam]");
  if (chips.length && rows.length) {
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        const fam = chip.getAttribute("data-filter");
        chips.forEach(function (c) {
          c.setAttribute("aria-pressed", c === chip ? "true" : "false");
        });
        rows.forEach(function (row) {
          const match = fam === "all" || row.getAttribute("data-fam") === fam;
          row.style.display = match ? "" : "none";
        });
      });
    });
  }

  const form = document.getElementById("devis-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const fd = new FormData(form);
      const lines = [
        "Demande de devis ALGRN Solutions",
        "",
        "Nom : " + (fd.get("nom") || ""),
        "Entreprise : " + (fd.get("entreprise") || ""),
        "Téléphone : " + (fd.get("tel") || ""),
        "E-mail : " + (fd.get("email") || ""),
        "Service : " + (fd.get("service") || ""),
        "Wilaya : " + (fd.get("wilaya") || ""),
        "Surface : " + (fd.get("surface") || "") + " m²",
        "",
        fd.get("message") || "",
      ];
      const subject = encodeURIComponent("Demande de devis — " + (fd.get("service") || "ALGRN"));
      const body = encodeURIComponent(lines.join("\n"));
      window.location.href =
        "mailto:eurlalgrnsolutions@gmail.com?subject=" + subject + "&body=" + body;
      const ok = document.getElementById("form-ok");
      if (ok) ok.classList.add("is-on");
      form.reset();
    });
  }
})();
