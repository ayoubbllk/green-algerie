// Génère toutes les pages HTML du site à partir des gabarits ci-dessous.
// Usage : node _build/build.js (depuis la racine du site)
const fs = require("fs");
const path = require("path");
const { SECTORS, PAGES, QUALITY, ICONS } = require("./sectors.js");
const GALLERY = require("./gallery.json");

const ROOT = path.join(__dirname, "..");
const EMAIL = "algrnsolutionssarl@gmail.com";
const ADDRESS = 'Cité Frères Abbas, lot 2, n°&nbsp;01, 1<sup>er</sup>&nbsp;étage, <span class="nowrap">Dar El Beïda</span>, Alger';

const ALT = Object.fromEntries(GALLERY.map((g) => [g.file, g.alt]));
const plain = (s) => s.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&");
const pad = (n) => String(n).padStart(2, "0");

const SECTOR_TAGS = {
  "industrie-petrole": "Confinement de fluides agressifs.",
  environnement: "Protection durable des écosystèmes.",
  "genie-civil": "Pérennisation des infrastructures complexes.",
  hydraulique: "Gestion et transport sécurisé des eaux.",
  agriculture: "Stockage et réseaux d’irrigation.",
  batiment: "Étanchéité de toitures-terrasses techniques.",
  "ouvrages-art": "Protection des structures d’envergure.",
};
const SECTOR_IMG = {
  "industrie-petrole": ["retention-bac-stockage.jpg", "Rétention sous bac de stockage étanchée par géomembrane"],
  environnement: ["talus-geotextile.jpg", "Pose de géotextile sur un grand talus"],
  "genie-civil": ["fondations-drainage.jpg", "Pose d’une nappe de protection sur un mur de fondation"],
  hydraulique: ["bassin-eau-plaine.jpg", "Bassin de stockage d’eau étanché par géomembrane"],
  agriculture: ["retenue-eau-irrigation.jpg", "Retenue d’eau d’irrigation étanchée par géomembrane"],
  batiment: ["toiture-terrasse.jpg", "Pose de membranes d’étanchéité sur une toiture-terrasse"],
  "ouvrages-art": ["ouvrage-enterre-pvc.jpg", "Membranes d’étanchéité posées sur une structure en béton"],
};

// ——— Éléments communs ———
function head({ title, desc, active }) {
  const nav = [
    ["index.html", "Accueil"],
    ["solutions.html", "Expertises &amp; solutions"],
    ["realisations.html", "Réalisations"],
    ["contact.html", "Contact"],
  ]
    .map(([href, label]) => `        <a href="${href}"${active === href ? ' aria-current="page"' : ""}>${label}</a>`)
    .join("\n");
  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="${desc}">
  <link rel="icon" href="images/logo.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400;1,6..72,500&family=Public+Sans:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <div class="topbar">
    <div class="wrap">
      <span class="tagline">Spécialistes de l’étanchéité de haute performance</span>
      <div class="links">
        <a href="tel:+21328265995">Tél.&nbsp;: 028 265 995</a>
        <a href="tel:+213770201940">Mobile&nbsp;: 0770 201 940</a>
        <a href="mailto:${EMAIL}">${EMAIL}</a>
      </div>
    </div>
  </div>

  <header class="site-header">
    <div class="wrap">
      <a class="logo" href="index.html"><img src="images/logo.png" alt="ALGRN Solutions Géosynthétique" width="1574" height="1000"></a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav">Menu</button>
      <nav class="nav" id="nav" aria-label="Navigation principale">
${nav}
        <a class="btn btn-orange" href="contact.html#devis">Demander un devis</a>
      </nav>
    </div>
  </header>
`;
}

function footer() {
  return `  <footer class="site-footer">
    ${strata()}
    <div class="wrap grid">
      <div class="brand">
        <img src="images/logo.png" alt="ALGRN Solutions Géosynthétique" loading="lazy">
        <p>Conception, fourniture et pose de systèmes géosynthétiques et hydrauliques d’étanchéité de haute performance.</p>
      </div>
      <div class="col">
        <strong>Navigation</strong>
        <a href="index.html">Accueil</a>
        <a href="solutions.html">Expertises &amp; solutions</a>
        <a href="realisations.html">Réalisations</a>
        <a href="contact.html">Contact</a>
      </div>
      <div class="col">
        <strong>Secteurs</strong>
${SECTORS.map((s) => `        <a href="${s.slug}.html">${s.name}</a>`).join("\n")}
      </div>
      <div class="col">
        <strong>Contact</strong>
        <a href="tel:+21328265995">Tél.&nbsp;: 028 265 995</a>
        <a href="tel:+213770201940">Mobile&nbsp;: 0770 201 940</a>
        <span>Fax&nbsp;: 028 265 995</span>
        <a href="mailto:${EMAIL}">${EMAIL}</a>
        <span>${ADDRESS}</span>
      </div>
    </div>
    <div class="wrap legal">
      <span>© 2026 ALGRN Solutions. Tous droits réservés.</span>
      <span>Site réalisé par Com &amp; Code</span>
    </div>
  </footer>

  <a class="wa-float" href="https://wa.me/213770201940" aria-label="Nous écrire sur WhatsApp"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4C2.7 15.6 2.2 13.8 2.2 12 2.2 6.6 6.6 2.2 12 2.2S21.8 6.6 21.8 12 17.4 21.8 12 21.8zM12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.8 1 3.8 1.5 5.8 1.5 6.6 0 12-5.4 12-12S18.6 0 12 0z"/></svg><span>WhatsApp</span></a>

  <script src="js/main.js"></script>
</body>
</html>
`;
}

const strata = () =>
  `<div class="strata" aria-hidden="true"><span class="water"></span><span class="pehd"></span><span class="geotex"></span><span class="sand"></span><span class="soil"></span></div>`;

function secHead(idx, label, title, aside = "") {
  return `        <div class="sec-head">
          <div class="idx"><b>${idx}</b><span class="label">${label}</span></div>
          <div class="main">
            <div><h2 class="h2">${title}</h2></div>
${aside ? `            ${aside}\n` : ""}          </div>
        </div>`;
}

function cta(title, text, secteur) {
  const q = secteur ? `?secteur=${encodeURIComponent(secteur)}` : "";
  return `    <section class="cta">
      <div class="wrap">
        <div class="copy">
          <span class="label">Contact</span>
          <h2 class="h2">${title}</h2>
          <p>${text}</p>
          <div class="actions">
            <a class="btn btn-orange" href="contact.html${q}#devis">Demander un devis</a>
            <a class="btn btn-line" href="realisations.html">Voir nos réalisations</a>
          </div>
        </div>
        <div class="contact-lines">
          <a href="tel:+213770201940"><small>Mobile</small><b>0770 201 940</b></a>
          <a href="tel:+21328265995"><small>Téléphone</small><b>028 265 995</b></a>
          <a href="mailto:${EMAIL}"><small>E-mail</small><b>${EMAIL}</b></a>
        </div>
      </div>
    </section>
`;
}

const reel = (v, cap) => `          <figure class="reel reveal">
            <video data-autoplay muted loop playsinline preload="none" poster="videos/${v}.jpg" aria-label="${cap}">
              <source src="videos/${v}.mp4" type="video/mp4">
            </video>
            <figcaption>${cap}</figcaption>
          </figure>`;

const iconSvg = (k) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="#1E5B39" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[k]}</svg>`;

function layerKind(t) {
  const s = t.toLowerCase();
  if (s.includes("géotextile")) return "geotex";
  if (s.includes("bentonit")) return "gsb";
  if (s.includes("drain")) return "drain";
  if (s.includes("pare-vapeur")) return "vapour";
  if (s.includes("isolant")) return "insul";
  if (s.includes("membrane") || s.includes("étanchéité du voile")) return "membrane";
  if (s.includes("support") || s.includes("remblai")) return "support";
  if (s.includes("béton") || s.includes("voile") || s.includes("porteur") || s.includes("soutènement")) return "concrete";
  if (s.includes("lestage") || s.includes("protection")) return "protect";
  return "soil";
}

const write = (file, html) => {
  fs.writeFileSync(path.join(ROOT, file), html);
  console.log("écrit", file);
};

// ——— Accueil ———
function pageIndex() {
  const preview = [
    ["g-a", "bourbier-petrolier-desert.jpg", "Équipe sur une géomembrane posée en zone désertique", "Pose de géomembrane sur un site pétrolier"],
    ["g-b", "stabilisation-talus.jpg", "Mise en place de géocellules sur un talus", "Stabilisation de talus"],
    ["g-c", "retention-bac-stockage-2.jpg", "Rétention sous bac de stockage étanchée par géomembrane", "Rétention sous bac de stockage"],
    ["g-c", "bassin-irrigation-collines.jpg", "Bassin d’irrigation étanché par géomembrane", "Bassin d’irrigation"],
    ["g-c", "ouvrage-enterre-pvc.jpg", "Membranes d’étanchéité posées sur un radier et des voiles en béton", "Étanchéité d’une structure en béton"],
  ];
  return (
    head({
      title: "ALGRN Solutions – Étanchéité de haute performance et géosynthétiques",
      desc: "ALGRN Solutions conçoit, fournit et pose des systèmes géosynthétiques et hydrauliques d’étanchéité de haute performance pour l’industrie, le pétrole, l’environnement, le génie civil, l’hydraulique, l’agriculture et le bâtiment.",
      active: "index.html",
    }) +
    `
  <main>
    <section class="hero">
      <div class="wrap hero-grid">
        <div class="hero-copy">
          <span class="label">Étanchéité · Géosynthétiques · Hydraulique</span>
          <h1 class="h1">L’étanchéité de haute performance, <em>de l’ingénierie à la réalisation.</em></h1>
          <p>Nous concevons, fournissons et posons des systèmes géosynthétiques et hydrauliques adaptés aux contraintes techniques, mécaniques et environnementales les plus strictes.</p>
          <div class="actions">
            <a class="btn btn-orange" href="contact.html#devis">Demander un devis</a>
            <a class="btn btn-line" href="solutions.html">Nos expertises</a>
          </div>
        </div>
        <figure>
          <img src="images/photos/hero-bassin-desert.jpg" alt="Bassin étanché par géomembrane au pied des dunes, dans le Sahara algérien" width="1280" height="964">
          <figcaption>Bassin étanché par géomembrane, zone saharienne.</figcaption>
        </figure>
      </div>
      <div class="wrap">
        ${strata()}
        <ul class="strata-legend">
          <li><i style="background:var(--pehd)"></i>Géomembrane</li>
          <li><i style="background:var(--geotex)"></i>Géotextile</li>
          <li><i style="background:var(--sand)"></i>Support compacté</li>
          <li><i style="background:var(--soil)"></i>Sol en place</li>
        </ul>
        <div class="claims">
          <div><b>Conception</b><span>Choix et combinaison des matériaux adaptés à chaque projet.</span></div>
          <div><b>Fourniture</b><span>Géomembranes, géotextiles, géocomposites et GSB.</span></div>
          <div><b>Pose</b><span>Mise en œuvre par des équipes qualifiées.</span></div>
          <div><b>Contrôle</b><span>Soudures contrôlées et traçabilité complète.</span></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
${secHead("01", "Présentation", "Spécialistes de l’étanchéité de haute performance")}
        <div class="intro-grid">
          <p class="lead reveal">Acteur de référence dans les secteurs de l’industrie et du pétrole, ALGRN Solutions apporte des solutions technologiques avancées pour le confinement des fluides agressifs, la protection des sols et la gestion des réseaux hydrauliques critiques.</p>
          <div class="reveal" style="display:grid;gap:20px">
            <p class="prose">Nous accompagnons nos partenaires de l’ingénierie à la réalisation des travaux, en garantissant une imperméabilité absolue et une conformité réglementaire totale.</p>
            <ul class="checks">
              <li>Confinement des fluides agressifs</li>
              <li>Protection des sols</li>
              <li>Gestion des réseaux hydrauliques critiques</li>
            </ul>
          </div>
        </div>
        <div class="photo-row">
          <figure class="reveal"><img src="images/photos/site-petrolier-controle.jpg" alt="Équipe contrôlant une soudure de géomembrane sur un site pétrolier saharien" loading="lazy"><figcaption>Contrôle d’une soudure sur un site pétrolier.</figcaption></figure>
          <figure class="reveal"><img src="images/photos/controle-soudure.jpg" alt="Techniciens contrôlant une soudure de géomembrane" loading="lazy"><figcaption>Vérification d’une soudure.</figcaption></figure>
          <figure class="reveal"><img src="images/photos/essai-soudure.jpg" alt="Essai de traction sur un échantillon de soudure" loading="lazy"><figcaption>Essai de traction sur échantillon.</figcaption></figure>
        </div>
      </div>
    </section>

    <section class="section section-alt" id="secteurs">
      <div class="wrap">
${secHead("02", "Secteurs", "Nous intervenons dans 7&nbsp;secteurs clés", '<a class="link" href="solutions.html">Nos domaines d’expertise</a>')}
        <ul class="index">
${SECTORS.map(
  (s, i) => `          <li><a href="${s.slug}.html"><span class="n">${pad(i + 1)}</span><span class="t">${s.name}</span><span class="d">${SECTOR_TAGS[s.slug]}</span><img src="images/photos/${SECTOR_IMG[s.slug][0]}" alt="" loading="lazy"><span class="arr" aria-hidden="true">→</span></a></li>`
).join("\n")}
        </ul>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
${secHead("03", "Démarche", "De l’ingénierie à la réalisation des travaux", "<p>Un interlocuteur unique pour concevoir, fournir, poser et contrôler votre système d’étanchéité.</p>")}
        <ol class="steps">
          <li class="reveal"><strong>Ingénierie</strong><span>Analyse des contraintes techniques, mécaniques et environnementales du projet.</span></li>
          <li class="reveal"><strong>Choix des matériaux</strong><span>Sélection et combinaison des matériaux géosynthétiques adéquats.</span></li>
          <li class="reveal"><strong>Fourniture et pose</strong><span>Livraison des matériaux et mise en œuvre sur site par nos équipes.</span></li>
          <li class="reveal"><strong>Contrôle</strong><span>Contrôle des soudures et traçabilité complète des travaux.</span></li>
        </ol>
      </div>
    </section>

    <section class="section section-dark">
      <div class="wrap">
${secHead("04", "Sur le terrain", "Nos équipes <em>en action</em>", '<a class="link" href="realisations.html#videos">Toutes les vidéos</a>')}
        <div class="reels">
${reel("deroulage-geomembrane", "Déroulage d’une géomembrane")}
${reel("soudure-geomembrane", "Soudure d’une géomembrane")}
${reel("soudure-automatique", "Soudure automatique d’une membrane")}
${reel("bassin-geomembrane-collines", "Bassin en cours d’étanchéité")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
${secHead("05", "Qualité", "Normes &amp; engagements qualité")}
        <div class="cols-3">
          <article class="reveal"><img src="images/photos/bassin-industriel-geotextile.jpg" alt="Bassin en site industriel revêtu de géomembrane et de géotextile" loading="lazy"><h3 class="h3">${QUALITY[0][0]}</h3><p>${QUALITY[0][1]}</p></article>
          <article class="reveal"><img src="images/photos/soudure-extrusion.jpg" alt="Techniciens réalisant une soudure par extrusion" loading="lazy"><h3 class="h3">${QUALITY[1][0]}</h3><p>${QUALITY[1][1]}</p></article>
          <article class="reveal"><img src="images/photos/site-petrolier-soudure.jpg" alt="Technicien soudant une géomembrane, entouré d’agents d’un site pétrolier" loading="lazy"><h3 class="h3">${QUALITY[2][0]}</h3><p>${QUALITY[2][1]}</p></article>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="wrap">
${secHead("06", "Réalisations", "Nos chantiers en images", '<a class="link" href="realisations.html">Toutes les réalisations</a>')}
        <div class="grid-preview">
${preview.map(([c, f, alt, cap]) => `          <figure class="${c} reveal"><a href="realisations.html"><img src="images/photos/${f}" alt="${alt}" loading="lazy"></a><figcaption>${cap}</figcaption></figure>`).join("\n")}
        </div>
      </div>
    </section>

${cta("Un projet d’étanchéité&nbsp;? Parlons-en.", "Décrivez-nous votre ouvrage&nbsp;: nous vous proposons la solution technique adaptée.")}  </main>

` +
    footer()
  );
}

// ——— Expertises & solutions ———
function pageSolutions() {
  const domains = [
    ["industrie-petrole", "Industriel &amp; pétrolier", ["Étanchéité des rétentions sous bacs de stockage", "Plateformes de dépotage d’hydrocarbures", "Bassins de l’industrie chimique"], "retention-bac-stockage-2.jpg", "Rétention sous bac de stockage étanchée par géomembrane"],
    ["environnement", "Environnement", ["Étanchéité des centres d’enfouissement technique (CET)", "Bassins de rétention d’eaux pluviales", "Bassins de lixiviats"], "casier-cet.jpg", "Grand ouvrage revêtu de géomembrane"],
    ["genie-civil", "Génie civil &amp; infrastructures", ["Protection des ouvrages d’art et des tunnels", "Fondations spéciales", "Structures enterrées"], "ouvrage-enterre-pvc-2.jpg", "Membranes d’étanchéité posées sur un radier et des voiles en béton"],
    ["hydraulique", "Hydraulique", ["Étanchéité de canaux", "Réservoirs d’eau potable", "Bassins d’irrigation et d’aquaculture"], "bassin-irrigation-collines.jpg", "Bassin d’irrigation étanché par géomembrane"],
    ["batiment", "Bâtiment", ["Étanchéité de toitures-terrasses techniques", "Étanchéité d’ouvrages industriels"], "toiture-terrasse-2.jpg", "Pose de membranes d’étanchéité sur une toiture-terrasse"],
  ];
  const apps = [
    ["Lagunages", "Étanchéité des lagunes et protection absolue des sols contre les pollutions.", "lagunage-geomembrane.jpg", "Lagune revêtue de géomembrane"],
    ["Bourbiers pétroliers", "Étanchéité des bourbiers pétroliers par géomembrane, pour isoler les rejets du sol.", "bourbier-petrolier-desert.jpg", "Géomembrane posée sur un site pétrolier en zone désertique"],
    ["Bassins, réservoirs et retenues d’eau", "Réalisation de bassins, de réservoirs et de retenues d’eau d’irrigation.", "reservoirs-circulaires.jpg", "Réservoirs circulaires revêtus de géomembrane"],
    ["Fondations et structures enterrées", "Protection des fondations par imperméabilisation et drainage des structures enterrées.", "fondations-drainage-2.jpg", "Pose d’une nappe de protection et de drainage sur un mur enterré"],
    ["Ponts, tunnels, viaducs et murs de soutènement", "Étanchéité des ouvrages d’art et des murs de soutènement.", "ouvrage-enterre-pvc.jpg", "Membranes d’étanchéité posées sur une structure en béton"],
  ];
  const mats = [
    ["Géomembranes", "Membranes d’étanchéité synthétiques ou bitumineuses, assemblées par soudure sur site.", ["PEHD", "PP", "PVC", "EPDM", "BGM"]],
    ["Géotextiles", "Nappes de séparation, de filtration et de protection des géomembranes.", ["Tissés", "Non tissés"]],
    ["Géocomposites de drainage", "Collecte et évacuation des eaux, notamment sous les ouvrages et contre les structures enterrées.", []],
    ["Géosynthétiques bentonitiques (GSB)", "Étanchéité assurée par une couche de bentonite qui gonfle au contact de l’eau.", []],
    ["STABLOT", "Stabilisation et soutènement des talus.", []],
  ];
  return (
    head({
      title: "Expertises et solutions – ALGRN Solutions",
      desc: "Domaines d’expertise, applications et solutions géosynthétiques d’ALGRN Solutions : géomembranes, géotextiles, géocomposites de drainage, géosynthétiques bentonitiques et stabilisation des talus.",
      active: "solutions.html",
    }) +
    `
  <main>
    <section class="page-head">
      <div class="wrap">
        <nav class="crumbs" aria-label="Fil d’Ariane"><a href="index.html">Accueil</a><span aria-hidden="true">/</span><span>Expertises &amp; solutions</span></nav>
        <div class="page-head-grid">
          <h1 class="h1">Nos expertises et <em>nos solutions</em></h1>
          <p class="intro">Des systèmes d’étanchéité conçus pour le confinement des fluides agressifs, la protection des sols et la gestion des réseaux hydrauliques critiques.</p>
        </div>
        <figure><img class="wide-img" src="images/photos/retention-bac-stockage-3.jpg" alt="Technicien sur une géomembrane posée dans une rétention, en zone désertique" width="1280" height="960"><figcaption>Rétention étanchée par géomembrane.</figcaption></figure>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
${secHead("01", "Domaines d’expertise", "Cinq domaines, une même exigence d’étanchéité")}
        <div class="rows">
${domains.map(([slug, t, items, img, alt], i) => `          <article class="row reveal" id="${slug === "industrie-petrole" ? "industriel" : slug}">
            <span class="n">${pad(i + 1)}</span>
            <div class="body">
              <h3 class="h3">${t}</h3>
              <ul>
${items.map((x) => `                <li>${x}</li>`).join("\n")}
              </ul>
              <a class="link" href="${slug}.html">En savoir plus</a>
            </div>
            <figure class="media"><img src="images/photos/${img}" alt="${alt}" loading="lazy"></figure>
          </article>`).join("\n")}
        </div>
      </div>
    </section>

    <section class="section section-dark" id="applications">
      <div class="wrap">
${secHead("02", "Applications spécifiques", "Des réponses ciblées aux ouvrages <em>les plus exigeants</em>")}
        <div class="apps">
${apps.map(([t, p, img, alt], i) => `          <article class="app reveal">
            <span class="n">${pad(i + 1)}</span>
            <h3>${t}</h3>
            <p>${p}</p>
            <img src="images/photos/${img}" alt="${alt}" loading="lazy">
          </article>`).join("\n")}
        </div>
      </div>
    </section>

    <section class="section" id="materiaux">
      <div class="wrap">
${secHead("03", "Solutions innovantes", "Le bon matériau pour chaque ouvrage", "<p>Pour chaque projet, nous concevons la solution en combinant les matériaux géosynthétiques adéquats.</p>")}
        <div class="spec-wrap">
          <figure class="reveal"><img src="images/photos/soudure-geomembrane.jpg" alt="Technicien soudant une géomembrane sur chantier" loading="lazy"><figcaption>Soudure d’une géomembrane sur chantier.</figcaption></figure>
          <table class="spec">
            <thead><tr><th scope="col">Matériau</th><th scope="col">Fonction</th><th scope="col">Variantes</th></tr></thead>
            <tbody>
${mats.map(([t, f, tags]) => `              <tr><th scope="row">${t}</th><td>${f}</td><td>${tags.length ? `<div class="tags">${tags.map((x) => `<span>${x}</span>`).join("")}</div>` : "—"}</td></tr>`).join("\n")}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="section section-alt" id="qualite">
      <div class="wrap">
${secHead("04", "Qualité", "Normes &amp; engagements qualité")}
        <div class="cols-3">
${QUALITY.map(([t, p], i) => `          <article class="reveal"><img src="images/photos/${["bassin-industriel-geotextile.jpg", "essai-soudure.jpg", "site-petrolier-soudure.jpg"][i]}" alt="${["Bassin en site industriel revêtu de géomembrane et de géotextile", "Essai de traction sur un échantillon de soudure", "Technicien soudant une géomembrane, entouré d’agents d’un site pétrolier"][i]}" loading="lazy"><h3 class="h3">${t}</h3><p>${p}</p></article>`).join("\n")}
        </div>
      </div>
    </section>

    <section class="section" id="secteurs">
      <div class="wrap">
${secHead("05", "Secteurs", "Une page détaillée pour chaque secteur", "<p>Ouvrages traités, système d’étanchéité, démarche et contrôles&nbsp;: découvrez notre intervention secteur par secteur.</p>")}
        <ul class="index">
${SECTORS.map((s, i) => `          <li><a href="${s.slug}.html"><span class="n">${pad(i + 1)}</span><span class="t">${s.name}</span><span class="d">${SECTOR_TAGS[s.slug]}</span><img src="images/photos/${SECTOR_IMG[s.slug][0]}" alt="" loading="lazy"><span class="arr" aria-hidden="true">→</span></a></li>`).join("\n")}
        </ul>
      </div>
    </section>

${cta("Quelle solution pour votre ouvrage&nbsp;?", "Nos équipes étudient votre projet et vous proposent la combinaison de matériaux adaptée.")}  </main>

` +
    footer()
  );
}

// ——— Réalisations ———
function pageRealisations() {
  const cats = [
    ["all", "Toutes"],
    ["petrole", "Pétrole &amp; industrie"],
    ["bassins", "Bassins &amp; lagunes"],
    ["genie", "Génie civil &amp; bâtiment"],
    ["controle", "Soudure &amp; contrôle"],
  ];
  const count = (c) => (c === "all" ? GALLERY.length : GALLERY.filter((g) => g.cat === c).length);
  return (
    head({
      title: "Nos réalisations – ALGRN Solutions",
      desc: "Photos et vidéos des chantiers d’ALGRN Solutions : rétentions sous bacs de stockage, sites pétroliers, bassins, lagunes, fondations, toitures-terrasses, soudure et contrôle des géomembranes.",
      active: "realisations.html",
    }) +
    `
  <main>
    <section class="page-head">
      <div class="wrap">
        <nav class="crumbs" aria-label="Fil d’Ariane"><a href="index.html">Accueil</a><span aria-hidden="true">/</span><span>Réalisations</span></nav>
        <div class="page-head-grid">
          <h1 class="h1">Nos <em>réalisations</em></h1>
          <p class="intro">Sites pétroliers et industriels, bassins, lagunes, structures enterrées et toitures-terrasses&nbsp;: nos chantiers en photos et en vidéos.</p>
        </div>
      </div>
    </section>

    <section class="section" id="photos" style="padding-top:0">
      <div class="wrap">
${secHead("01", "Galerie photos", "Nos chantiers en images", "<p>Cliquez sur une photo pour l’agrandir.</p>")}
        <div class="filters" role="group" aria-label="Filtrer les photos">
${cats.map(([c, l], i) => `          <button class="chip" type="button" data-filter="${c}" aria-pressed="${i === 0}">${l}<span class="c">${count(c)}</span></button>`).join("\n")}
        </div>
        <div class="masonry gallery">
${GALLERY.map((g) => `          <figure data-cat="${g.cat}"><button type="button" aria-label="Agrandir&nbsp;: ${g.cap}"><img src="images/photos/${g.file}" alt="${g.alt}" loading="lazy"></button><figcaption>${g.cap}</figcaption></figure>`).join("\n")}
        </div>
      </div>
    </section>

    <section class="section section-dark" id="videos">
      <div class="wrap">
${secHead("02", "Vidéos", "Nos équipes <em>sur le terrain</em>", "<p>Déroulage, soudure et pose de géomembranes et de géotextiles sur nos chantiers.</p>")}
        <div class="reels">
${reel("deroulage-geomembrane", "Déroulage d’une géomembrane")}
${reel("soudure-geomembrane", "Soudure d’une géomembrane")}
${reel("equipe-pose-desert", "Mise en place d’une géomembrane")}
${reel("bourbier-desert", "Géomembrane posée en zone désertique")}
${reel("soudure-automatique", "Soudure automatique d’une membrane")}
${reel("bassin-geomembrane-collines", "Bassin en cours d’étanchéité")}
${reel("bassin-geomembrane-talus", "Géomembrane sur les talus d’un bassin")}
${reel("geomembrane-bassin-plaine", "Géomembrane posée dans un grand bassin")}
        </div>
        <div class="reels-land">
${reel("bassin-geomembrane", "Bassin revêtu de géomembrane")}
${reel("pose-geotextile-desert", "Déroulage d’un géotextile")}
${reel("talus-geotextile-geomembrane", "Géotextile et géomembrane sur talus")}
        </div>
      </div>
    </section>

${cta("Votre ouvrage sera notre prochaine réalisation.", "Parlez-nous de votre projet&nbsp;: nous vous répondons avec une proposition technique.")}  </main>

  <div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Photo agrandie">
    <button class="lb-btn lb-close" type="button" aria-label="Fermer">×</button>
    <button class="lb-btn lb-prev" type="button" aria-label="Photo précédente">‹</button>
    <figure>
      <img alt="">
      <figcaption></figcaption>
    </figure>
    <button class="lb-btn lb-next" type="button" aria-label="Photo suivante">›</button>
  </div>

` +
    footer()
  );
}

// ——— Contact ———
function pageContact() {
  const options = SECTORS.map((s) => `                <option>${s.name}</option>`).join("\n");
  return (
    head({
      title: "Contact et devis – ALGRN Solutions",
      desc: "Contactez ALGRN Solutions : tél. 028 265 995, mobile 0770 201 940, algrnsolutionssarl@gmail.com. Cité Frères Abbas, lot 2, n° 01, 1er étage, Dar El Beïda, Alger.",
      active: "contact.html",
    }) +
    `
  <main>
    <section class="page-head">
      <div class="wrap">
        <nav class="crumbs" aria-label="Fil d’Ariane"><a href="index.html">Accueil</a><span aria-hidden="true">/</span><span>Contact</span></nav>
        <div class="page-head-grid">
          <h1 class="h1">Parlons de <em>votre projet</em></h1>
          <p class="intro">Remplissez le formulaire ou contactez-nous directement. Plus votre description est précise, plus notre proposition sera adaptée.</p>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top:0">
      <div class="wrap">
        <div class="contact-grid">
          <div>
            <dl class="coords">
              <div><dt>Mobile</dt><dd><a href="tel:+213770201940">0770 201 940</a></dd></div>
              <div><dt>Téléphone</dt><dd><a href="tel:+21328265995">028 265 995</a></dd></div>
              <div><dt>Fax</dt><dd>028 265 995</dd></div>
              <div><dt>E-mail</dt><dd><a href="mailto:${EMAIL}">${EMAIL}</a></dd></div>
              <div><dt>WhatsApp</dt><dd><a href="https://wa.me/213770201940">Envoyer des photos du site</a></dd></div>
              <div><dt>Adresse</dt><dd>${ADDRESS}</dd></div>
            </dl>
            <div class="map">
              <iframe title="Plan d’accès – Dar El Beïda, Alger" src="https://www.google.com/maps?q=Cit%C3%A9+Fr%C3%A8res+Abbas,+Dar+El+Beida,+Alger&amp;output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>

          <form class="quote-form" id="devis-form">
            <span class="label">Formulaire</span>
            <h2 class="h2" id="devis">Demande de devis</h2>
            <div class="fields">
              <label>Nom et prénom
                <input type="text" name="nom" autocomplete="name" required>
              </label>
              <label>Entreprise (facultatif)
                <input type="text" name="entreprise" autocomplete="organization">
              </label>
              <label>Téléphone
                <input type="tel" name="tel" autocomplete="tel" required>
              </label>
              <label>E-mail
                <input type="email" name="email" autocomplete="email" required>
              </label>
              <label>Secteur concerné
                <select name="secteur">
${options}
                <option>Autre</option>
                </select>
              </label>
              <label>Wilaya du chantier
                <input type="text" name="wilaya" placeholder="Ex.&nbsp;: Alger, Ouargla…">
              </label>
              <label>Surface approximative (m²)
                <input type="text" name="surface" inputmode="numeric" placeholder="Ex.&nbsp;: 1 200">
              </label>
            </div>
            <label>Description du projet
              <textarea name="message" rows="5" placeholder="Type d’ouvrage, fluide à confiner, délais souhaités…"></textarea>
            </label>
            <p class="form-ok" id="form-ok" role="status">Votre messagerie va s’ouvrir avec la demande prête à être envoyée.</p>
            <div class="form-foot">
              <span>Votre demande sera envoyée à ${EMAIL}.</span>
              <button class="btn btn-orange" type="submit">Envoyer la demande</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </main>

` +
    footer()
  );
}

// ——— Pages secteur ———
function pageSector(i) {
  const s = SECTORS[i];
  const d = PAGES[s.slug];
  const prev = SECTORS[(i + SECTORS.length - 1) % SECTORS.length];
  const next = SECTORS[(i + 1) % SECTORS.length];
  const ctaTitle = {
    "industrie-petrole": "Un projet dans l’industrie ou le pétrole&nbsp;?",
    environnement: "Un projet environnemental&nbsp;?",
    "genie-civil": "Un projet de génie civil&nbsp;?",
    hydraulique: "Un projet hydraulique&nbsp;?",
    agriculture: "Un projet agricole&nbsp;?",
    batiment: "Un projet de bâtiment&nbsp;?",
    "ouvrages-art": "Un projet d’ouvrage d’art&nbsp;?",
  }[s.slug];

  let n = 0;
  const idx = () => pad(++n);

  const works = d.works
    .map(
      (w, k) => `          <article class="row reveal">
            <span class="n">${pad(k + 1)}</span>
            <div class="body">
              <h3 class="h3">${w.t}</h3>
              <p>${w.p}</p>
            </div>
            ${w.img ? `<figure class="media"><img src="images/photos/${w.img}" alt="${w.alt}" loading="lazy"></figure>` : `<div class="media icon-box">${iconSvg(w.ico)}</div>`}
          </article>`
    )
    .join("\n");

  const sections = [];
  sections.push(`    <section class="section">
      <div class="wrap">
${secHead(idx(), "Intervention", "Notre intervention")}
        <div class="intro-grid">
          <div class="reveal" style="display:grid;gap:24px;align-content:start">
            <p class="lead">${d.lead}</p>
            <div class="prose">
${d.body.map((p) => `              <p>${p}</p>`).join("\n")}
            </div>
          </div>
${d.introImg ? `          <figure class="reveal" style="margin:0"><img src="images/photos/${d.introImg[0]}" alt="${d.introImg[1]}" loading="lazy" style="width:100%;aspect-ratio:4/3;object-fit:cover"></figure>` : ""}
        </div>
      </div>
    </section>`);

  sections.push(`    <section class="section section-alt">
      <div class="wrap">
${secHead(idx(), "Ouvrages traités", "Ce que nous réalisons")}
        <div class="rows">
${works}
        </div>
      </div>
    </section>`);

  sections.push(`    <section class="section section-dark">
      <div class="wrap">
${secHead(idx(), "Le système", d.system.title)}
        <div class="system">
          <div class="prose reveal">
            <p>${d.system.text}</p>
            <p class="note">${d.system.note}</p>
          </div>
          <ol class="layers reveal">
${d.system.layers.map((l, k) => `            <li><span class="sw k-${layerKind(l)}" aria-hidden="true"></span><span class="tx"><small>Couche ${pad(k + 1)}</small>${l}</span></li>`).join("\n")}
          </ol>
        </div>
      </div>
    </section>`);

  sections.push(`    <section class="section">
      <div class="wrap">
${secHead(idx(), "Démarche", "De l’étude à la réception")}
        <ol class="steps">
${d.steps.map(([t, x]) => `          <li class="reveal"><strong>${t}</strong><span>${x}</span></li>`).join("\n")}
        </ol>
        <div style="margin-top:56px;display:grid;gap:16px">
          <span class="label">Matériaux mis en œuvre</span>
          <div class="mat-links">
${d.materials.map((m) => `            <a href="solutions.html#materiaux">${m}</a>`).join("\n")}
          </div>
        </div>
      </div>
    </section>`);

  sections.push(`    <section class="section section-alt">
      <div class="wrap">
${secHead(idx(), "Qualité", "Normes &amp; engagements qualité")}
        <div class="cols-3">
${QUALITY.map(([t, p]) => `          <article class="reveal"><h3 class="h3">${t}</h3><p>${p}</p></article>`).join("\n")}
        </div>
      </div>
    </section>`);

  if (d.gallery.length) {
    sections.push(`    <section class="section">
      <div class="wrap">
${secHead(idx(), "En images", "Nos chantiers", '<a class="link" href="realisations.html">Toutes nos réalisations</a>')}
        <div class="masonry">
${d.gallery.map(([f, c]) => `          <figure class="reveal"><a href="realisations.html"><img src="images/photos/${f}" alt="${plain(c)}" loading="lazy"></a><figcaption>${c}</figcaption></figure>`).join("\n")}
        </div>
      </div>
    </section>`);
  }

  const vids = d.videos || [];
  const land = d.videosLand || [];
  if (vids.length || land.length) {
    sections.push(`    <section class="section section-dark">
      <div class="wrap">
${secHead(idx(), "Sur le terrain", "Nos équipes <em>en vidéo</em>", '<a class="link" href="realisations.html#videos">Toutes les vidéos</a>')}
${vids.length ? `        <div class="reels">\n${vids.map(([v, c]) => reel(v, c)).join("\n")}\n        </div>\n` : ""}${land.length ? `        <div class="reels-land ${land.length === 1 ? "solo" : "two"}${vids.length ? "" : " flush"}">\n${land.map(([v, c]) => reel(v, c)).join("\n")}\n        </div>\n` : ""}      </div>
    </section>`);
  }

  return (
    head({ title: `${plain(s.name)} – ALGRN Solutions`, desc: d.metaDesc, active: "solutions.html" }) +
    `
  <main>
    <section class="page-head">
      <div class="wrap">
        <nav class="crumbs" aria-label="Fil d’Ariane"><a href="index.html">Accueil</a><span aria-hidden="true">/</span><a href="solutions.html">Expertises</a><span aria-hidden="true">/</span><span>${s.name}</span></nav>
        <div class="page-head-grid">
          <div>
            <span class="label">Secteur ${pad(i + 1)} / ${pad(SECTORS.length)}</span>
            <h1 class="h1" style="margin-top:14px">${s.name}</h1>
            <p class="tag">${d.tagline}</p>
          </div>
          <p class="intro">${d.heroText}</p>
        </div>
        <figure><img class="wide-img" src="images/photos/${d.hero}" alt="${ALT[d.hero] || ""}"></figure>
        <dl class="facts" style="margin-top:32px">
${d.facts.map(([k, v]) => `          <div><dt>${k}</dt><dd>${v}</dd></div>`).join("\n")}
        </dl>
      </div>
    </section>

${sections.join("\n\n")}

${cta(ctaTitle, "Décrivez-nous votre ouvrage&nbsp;: nous vous proposons la solution technique adaptée.", s.short)}
    <nav class="wrap pager" aria-label="Autres secteurs">
      <a href="${prev.slug}.html"><span>← Secteur précédent</span><strong>${prev.name}</strong></a>
      <a href="${next.slug}.html"><span>Secteur suivant →</span><strong>${next.name}</strong></a>
    </nav>
  </main>

` +
    footer()
  );
}

write("index.html", pageIndex());
write("solutions.html", pageSolutions());
write("realisations.html", pageRealisations());
write("contact.html", pageContact());
SECTORS.forEach((s, i) => write(`${s.slug}.html`, pageSector(i)));
