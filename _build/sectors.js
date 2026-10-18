
const SECTORS = [
  { slug: "industrie-petrole", name: "Industrie &amp; Pétrole", short: "Industrie & Pétrole" },
  { slug: "environnement", name: "Environnement", short: "Environnement" },
  { slug: "genie-civil", name: "Génie civil", short: "Génie civil" },
  { slug: "hydraulique", name: "Hydraulique", short: "Hydraulique" },
  { slug: "agriculture", name: "Agriculture", short: "Agriculture" },
  { slug: "batiment", name: "Bâtiment", short: "Bâtiment" },
  { slug: "ouvrages-art", name: "Ouvrages d’art", short: "Ouvrages d’art" },
];

const ICONS = {
  drop: '<path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z"/>',
  truck: '<path d="M3 7h11v9H3z"/><path d="M14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.6"/><circle cx="17" cy="18" r="1.6"/>',
  bridge: '<path d="M2 8h20"/><path d="M4 8v12M20 8v12"/><path d="M4 16a8 7 0 0 1 16 0"/>',
  canal: '<path d="M2 7l5 10h10l5-10"/><path d="M6 13c2 0 2-1 4-1s2 1 4 1 2-1 4-1"/>',
  roll: '<circle cx="7" cy="8" r="3"/><path d="M7 5h11a3 3 0 0 1 0 6H7"/><path d="M4 8v11h17"/>',
  joint: '<rect x="3" y="4" width="7" height="16" rx="1"/><rect x="14" y="4" width="7" height="16" rx="1"/><path d="M12 6v12"/>',
};
const icon = (k) =>
  `<span class="ico"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0B6B38" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[k]}</svg></span>`;

const QUALITY = [
  ["Résistance chimique certifiée", "Sélection de matériaux testés pour leur durabilité face aux agressions des hydrocarbures, des acides et des bases."],
  ["Soudure haute technologie", "Contrôle des soudures double piste par test de pression d’air, étincelage ou ultrasons, avec une traçabilité complète."],
  ["Sécurité industrielle", "Équipes qualifiées et formées aux procédures de sécurité strictes des sites industriels et pétroliers&nbsp;: habilitations spécifiques, protocoles d’accès, équipements de protection individuelle avancés."],
];

const PAGES = {
  "industrie-petrole": {
    metaDesc: "Étanchéité pour l’industrie et le pétrole : rétentions sous bacs de stockage, plateformes de dépotage d’hydrocarbures, bassins de l’industrie chimique et bourbiers pétroliers.",
    hero: "retention-bac-stockage-3.jpg",
    tagline: "Confinement de fluides agressifs.",
    heroText: "Étanchéité des ouvrages qui reçoivent ou peuvent recevoir des hydrocarbures et des produits chimiques.",
    facts: [["Enjeu", "Confinement des fluides agressifs"], ["Ouvrages", "Rétentions, dépotage, bassins, bourbiers"], ["Matériaux", "Géomembranes et géotextiles"], ["Contrôle", "Soudures contrôlées et tracées"]],
    lead: "Acteur de référence dans les secteurs de l’industrie et du pétrole, ALGRN Solutions apporte des solutions technologiques avancées pour le confinement des fluides agressifs.",
    body: [
      "Hydrocarbures, acides, bases&nbsp;: une fuite ou un déversement accidentel ne doit jamais atteindre le sol ni les nappes. Nous concevons, fournissons et posons des systèmes d’étanchéité dont les matériaux sont sélectionnés en fonction des fluides à confiner.",
      "Nos équipes interviennent dans le respect des procédures de sécurité strictes des sites industriels et pétroliers.",
    ],
    introImg: ["site-petrolier-controle.jpg", "Contrôle d’une soudure de géomembrane sur un site pétrolier saharien"],
    works: [
      { t: "Rétentions sous bacs de stockage", p: "Étanchéité du fond et des talus des cuvettes de rétention, pour contenir une fuite ou un débordement de bac. Les pieds de bac et les traversées de tuyauteries font l’objet de raccordements étanches.", img: "retention-bac-stockage.jpg", alt: "Géomembrane posée dans une rétention sous bac de stockage" },
      { t: "Plateformes de dépotage d’hydrocarbures", p: "Étanchéité des aires de chargement et de déchargement des camions-citernes, pour recueillir les égouttures et les déversements accidentels avant qu’ils n’atteignent le sol.", ico: "truck" },
      { t: "Bassins de l’industrie chimique", p: "Confinement des effluents et des produits chimiques. Le matériau est choisi en fonction de la nature des fluides, de leur concentration et de leur température.", img: "bassin-industriel-geotextile.jpg", alt: "Bassin en site industriel revêtu de géomembrane et de géotextile" },
      { t: "Bourbiers pétroliers", p: "Étanchéité des bourbiers qui reçoivent les boues et les déblais de forage, pour isoler ces rejets du sol et des nappes.", img: "bourbier-petrolier-desert.jpg", alt: "Équipe sur une géomembrane posée sur un site pétrolier en zone désertique" },
    ],
    system: {
      title: "Un complexe d’étanchéité type",
      text: "La composition exacte est définie pour chaque ouvrage, selon les fluides, les volumes et les contraintes du site. Un complexe courant associe, de la surface vers le sol&nbsp;:",
      layers: ["Lestage ou protection de surface, selon l’ouvrage", "Géomembrane soudée, résistante aux fluides confinés", "Géotextile anti-poinçonnement", "Support nivelé et compacté, débarrassé des éléments saillants"],
      note: "En crête de talus, la géomembrane est ancrée dans une tranchée remblayée.",
    },
    steps: [["Étude", "Identification des fluides, des volumes et des contraintes du site."], ["Choix des matériaux", "Sélection de matériaux testés face aux hydrocarbures, aux acides et aux bases."], ["Préparation et pose", "Réception du support, pose du géotextile, puis déroulage de la géomembrane."], ["Soudure et contrôle", "Soudure des lés, contrôle de chaque soudure et traçabilité complète."]],
    materials: ["Géomembranes", "Géotextiles"],
    gallery: [["retention-bac-stockage-2.jpg", "Rétention sous bac de stockage"], ["site-petrolier-soudure.jpg", "Soudure de géomembrane sur un site pétrolier"], ["retention-bac-stockage-4.jpg", "Rétention sous bac de stockage en fin de pose"], ["bourbier-ancrage.jpg", "Géomembrane posée en zone désertique"], ["retention-site-industriel.jpg", "Ouvrage de rétention en site industriel"], ["chantier-industriel.jpg", "Chantier d’étanchéité en site industriel"], ["bassin-site-industriel.jpg", "Bassin étanché en site industriel"], ["hero-bassin-desert.jpg", "Bassin étanché par géomembrane en zone saharienne"]],
    videos: [["equipe-pose-desert", "Mise en place d’une géomembrane"], ["bourbier-desert", "Géomembrane posée en zone désertique"]],
  },

  environnement: {
    metaDesc: "Étanchéité pour l’environnement : centres d’enfouissement technique (CET), bassins de lixiviats, bassins de rétention d’eaux pluviales et lagunages.",
    hero: "lagunage.jpg",
    tagline: "Protection durable des écosystèmes.",
    heroText: "Étanchéité des ouvrages de stockage et de traitement des déchets et des eaux polluées.",
    facts: [["Enjeu", "Protection des sols et des nappes"], ["Ouvrages", "CET, lixiviats, eaux pluviales, lagunages"], ["Matériaux", "Géomembranes, géotextiles, drainage, GSB"], ["Contrôle", "Soudures contrôlées et tracées"]],
    lead: "Nous réalisons l’étanchéité des ouvrages qui stockent ou traitent les déchets et les eaux polluées, pour une protection absolue des sols contre les pollutions.",
    body: [
      "Centres d’enfouissement technique, bassins de lixiviats, bassins d’eaux pluviales et lagunes&nbsp;: ces ouvrages exigent une barrière continue et durable entre leur contenu et le milieu naturel.",
      "Nous combinons géomembranes, géotextiles, géocomposites de drainage et géosynthétiques bentonitiques pour répondre aux exigences de chaque projet, avec une conformité réglementaire totale.",
    ],
    introImg: ["casier-cet.jpg", "Grand ouvrage revêtu de géomembrane"],
    works: [
      { t: "Centres d’enfouissement technique (CET)", p: "Étanchéité du fond et des flancs des casiers. La barrière associe géomembrane, géotextile de protection et couche de drainage des lixiviats&nbsp;; elle peut être complétée par un géosynthétique bentonitique.", img: "talus-geotextile.jpg", alt: "Ouvriers posant un géotextile sur un grand talus" },
      { t: "Bassins de lixiviats", p: "Stockage étanche des lixiviats collectés dans les casiers, avant leur traitement.", img: "lagune-geomembrane.jpg", alt: "Bassin revêtu de géomembrane avant mise en eau" },
      { t: "Bassins de rétention d’eaux pluviales", p: "Stockage étanche des eaux de ruissellement, avec une géomembrane lestée et ancrée en crête de talus.", img: "bassin-geomembrane-talus.jpg", alt: "Bassin revêtu de géomembrane lestée par des sacs de sable" },
      { t: "Lagunages", p: "Étanchéité des lagunes de traitement des eaux usées, pour une protection absolue des sols contre les pollutions.", img: "lagunage-geomembrane.jpg", alt: "Lagune revêtue de géomembrane" },
    ],
    system: {
      title: "Le complexe d’étanchéité d’un fond de casier",
      text: "La composition est définie selon la conception du projet et la réglementation applicable. Un fond de casier associe généralement, de haut en bas&nbsp;:",
      layers: ["Couche drainante de collecte des lixiviats", "Géotextile de protection", "Géomembrane PEHD soudée", "Géosynthétique bentonitique (GSB), selon conception", "Support compacté"],
      note: "Sur les flancs, un géocomposite de drainage peut remplacer la couche drainante granulaire.",
    },
    steps: [["Étude", "Analyse du site, des effluents et des exigences réglementaires du projet."], ["Conception du complexe", "Combinaison des matériaux d’étanchéité, de protection et de drainage."], ["Pose", "Mise en œuvre couche par couche, du support à la protection."], ["Contrôle", "Contrôle des soudures et traçabilité complète des travaux."]],
    materials: ["Géomembranes", "Géotextiles", "Géocomposites de drainage", "Géosynthétiques bentonitiques (GSB)"],
    gallery: [["casier-cet-2.jpg", "Ouvrage étanché par géomembrane"], ["bassin-geomembrane.jpg", "Bassin revêtu de géomembrane"], ["bassin-geomembrane-angles.jpg", "Bassin rectangulaire revêtu de géomembrane"], ["intervention-geomembrane.jpg", "Intervention sur géomembrane"], ["soudure-talus.jpg", "Soudure de géomembrane sur talus"]],
    videosLand: [["talus-geotextile-geomembrane", "Géotextile et géomembrane sur talus"], ["pose-geotextile-desert", "Déroulage d’un géotextile"]],
  },

  "genie-civil": {
    metaDesc: "Génie civil et infrastructures : imperméabilisation des fondations spéciales et des structures enterrées, drainage périphérique et stabilisation des talus.",
    hero: "ouvrage-enterre-pvc-2.jpg",
    tagline: "Pérennisation des infrastructures complexes.",
    heroText: "Imperméabilisation et drainage des structures enterrées, stabilisation et soutènement des talus.",
    facts: [["Enjeu", "Durabilité des structures"], ["Ouvrages", "Fondations, structures enterrées, talus"], ["Matériaux", "Membranes, géotextiles, drainage, STABLOT"], ["Contrôle", "Soudures et points singuliers contrôlés"]],
    lead: "Nous protégeons les fondations par imperméabilisation et drainage des structures enterrées, pour pérenniser les infrastructures complexes.",
    body: [
      "L’eau présente dans le terrain est la première cause de dégradation des ouvrages enterrés. Une étanchéité continue, associée à un drainage efficace, protège durablement le béton et les armatures.",
      "Nous intervenons sur les fondations spéciales, les structures enterrées et les talus, en combinant membranes d’étanchéité, géotextiles, géocomposites de drainage et solutions de stabilisation.",
    ],
    introImg: ["fondations-drainage.jpg", "Pose d’une nappe de protection sur un mur de fondation"],
    works: [
      { t: "Fondations spéciales et radiers", p: "Mise en place de membranes d’étanchéité sur les radiers, avec un traitement soigné des reprises de bétonnage et des points singuliers.", img: "radier-membrane-pvc.jpg", alt: "Ouvriers posant une membrane d’étanchéité sur un radier" },
      { t: "Structures enterrées", p: "Imperméabilisation des voiles enterrés et protection par une nappe de drainage, qui conduit les eaux vers le drain périphérique.", img: "fondations-drainage-2.jpg", alt: "Pose d’une nappe de protection et de drainage sur un mur enterré" },
      { t: "Drainage périphérique", p: "Tranchées drainantes garnies de géotextile, qui filtre les particules fines et préserve durablement l’efficacité du drain.", img: "drainage-tranchee.jpg", alt: "Tranchée drainante garnie de géotextile et de gravier" },
      { t: "Stabilisation et soutènement des talus", p: "Solutions STABLOT de stabilisation et de soutènement des talus, pour limiter l’érosion et sécuriser les terrassements.", img: "stabilisation-talus.jpg", alt: "Mise en place de géocellules sur un talus" },
    ],
    system: {
      title: "La protection d’un mur enterré",
      text: "Le principe est adapté à chaque ouvrage. Un mur enterré est généralement protégé, de la structure vers le terrain, par&nbsp;:",
      layers: ["Voile en béton", "Étanchéité du voile", "Nappe de protection et de drainage", "Géotextile filtrant", "Remblai"],
      note: "En pied de mur, un drain périphérique enveloppé de géotextile collecte et évacue les eaux.",
    },
    steps: [["Étude", "Analyse du terrain, de la présence d’eau et de la nature de l’ouvrage."], ["Choix du système", "Combinaison de l’étanchéité, du drainage et de la protection."], ["Mise en œuvre", "Pose sur radier et voiles, traitement des points singuliers."], ["Contrôle", "Vérification des soudures et des recouvrements avant remblaiement."]],
    materials: ["Géomembranes", "Géotextiles", "Géocomposites de drainage", "STABLOT"],
    gallery: [["drain-geotextile.jpg", "Drain enveloppé de géotextile"], ["tranchee-geotextile.jpg", "Pose de géotextile en tranchée"], ["radier-membrane-pvc-2.jpg", "Membrane d’étanchéité sur grande surface"], ["bassin-beton-geomembrane.jpg", "Géomembrane sur ouvrage en béton"]],
    videos: [["soudure-automatique", "Soudure automatique d’une membrane"]],
  },

  hydraulique: {
    metaDesc: "Étanchéité hydraulique : canaux, réservoirs d’eau potable, bassins d’aquaculture et transport sécurisé des eaux par conduites PEHD.",
    hero: "bassin-eau-plaine.jpg",
    tagline: "Gestion et transport sécurisé des eaux.",
    heroText: "Étanchéité des ouvrages de stockage et de transport de l’eau, pour préserver la ressource.",
    facts: [["Enjeu", "Aucune perte par infiltration"], ["Ouvrages", "Canaux, réservoirs, bassins d’aquaculture"], ["Matériaux", "Géomembranes, géotextiles, GSB"], ["Contrôle", "Soudures contrôlées et tracées"]],
    lead: "Nous réalisons l’étanchéité des ouvrages de stockage et de transport de l’eau, en garantissant une imperméabilité absolue.",
    body: [
      "Chaque mètre cube perdu par infiltration est une ressource gaspillée. Une étanchéité soudée et contrôlée supprime ces pertes et protège la qualité de l’eau stockée.",
      "Nous intervenons sur les canaux, les réservoirs d’eau potable et les bassins d’aquaculture, ainsi que sur les réseaux de transport des eaux.",
    ],
    introImg: ["bassin-eau-rempli.jpg", "Bassin rempli d’eau après pose de la géomembrane"],
    works: [
      { t: "Canaux", p: "Étanchéité des canaux, pour limiter les pertes d’eau par infiltration tout au long du tracé.", ico: "canal" },
      { t: "Réservoirs d’eau potable", p: "Étanchéité des réservoirs avec des matériaux adaptés au contact de l’eau destinée à la consommation humaine.", img: "bassin-eau-talus.jpg", alt: "Bassin d’eau revêtu de géomembrane" },
      { t: "Bassins d’aquaculture", p: "Bassins étanches destinés à l’aquaculture, qui isolent l’eau d’élevage du sol.", img: "reservoirs-circulaires.jpg", alt: "Bassins circulaires revêtus de géomembrane" },
      { t: "Transport sécurisé des eaux", p: "Mise en œuvre de conduites PEHD pour le transport des eaux.", img: "conduite-pehd.jpg", alt: "Raccordement de conduites en PEHD sur chantier" },
    ],
    system: {
      title: "Le complexe d’un bassin étanche",
      text: "Un bassin étanché par géomembrane associe généralement, de la surface vers le sol&nbsp;:",
      layers: ["Géomembrane soudée", "Géotextile anti-poinçonnement", "Support nivelé et compacté"],
      note: "En crête de talus, la géomembrane est ancrée dans une tranchée remblayée. Selon le projet, un géosynthétique bentonitique peut compléter l’étanchéité.",
    },
    steps: [["Étude", "Volume à stocker, nature du terrain et usage de l’eau."], ["Choix des matériaux", "Géomembrane et géotextile adaptés à l’ouvrage et à l’eau stockée."], ["Pose", "Préparation du support, déroulage, soudure et ancrage."], ["Contrôle", "Contrôle des soudures avant la mise en eau."]],
    materials: ["Géomembranes", "Géotextiles", "Géosynthétiques bentonitiques (GSB)"],
    gallery: [["bassin-eau-chantier.jpg", "Bassin de stockage d’eau"], ["bassin-eau-colline.jpg", "Bassin d’eau et talus aménagés"], ["bassin-irrigation.jpg", "Bassin en service"]],
    videos: [["bassin-geomembrane-talus", "Géomembrane sur les talus d’un bassin"], ["geomembrane-bassin-plaine", "Géomembrane posée dans un grand bassin"]],
  },

  agriculture: {
    metaDesc: "Agriculture : bassins d’irrigation, retenues d’eau, réservoirs circulaires étanchés par géomembrane et réseaux d’irrigation.",
    hero: "bassin-irrigation-collines.jpg",
    tagline: "Stockage et réseaux d’irrigation.",
    heroText: "Réalisation de bassins, de réservoirs et de retenues d’eau d’irrigation étanches.",
    facts: [["Enjeu", "Stocker l’eau sans pertes"], ["Ouvrages", "Bassins, retenues, réservoirs, réseaux"], ["Matériaux", "Géomembranes, géotextiles, conduites PEHD"], ["Contrôle", "Soudures contrôlées avant mise en eau"]],
    lead: "Nous réalisons des bassins, des réservoirs et des retenues d’eau d’irrigation, ainsi que les réseaux qui acheminent l’eau vers les cultures.",
    body: [
      "Pour une exploitation agricole, l’eau stockée doit rester disponible jusqu’à son utilisation. Une géomembrane soudée supprime les pertes par infiltration et sécurise la ressource.",
      "Du terrassement de l’ouvrage à la pose de la géomembrane, nous accompagnons chaque projet jusqu’à la mise en service.",
    ],
    introImg: ["bassin-eau-colline.jpg", "Bassin d’eau étanché par géomembrane"],
    works: [
      { t: "Bassins d’irrigation", p: "Bassins revêtus d’une géomembrane posée sur géotextile et ancrée en crête de talus.", img: "bassin-irrigation.jpg", alt: "Bassin d’irrigation rempli d’eau" },
      { t: "Retenues d’eau", p: "Étanchéité des retenues d’eau destinées à l’irrigation, adaptée au relief du terrain.", img: "retenue-eau-irrigation.jpg", alt: "Retenue d’eau étanchée par géomembrane" },
      { t: "Réservoirs circulaires", p: "Réservoirs à parois en treillis métallique, revêtus d’une géomembrane étanche.", img: "reservoir-circulaire.jpg", alt: "Réservoir circulaire revêtu de géomembrane" },
      { t: "Réseaux d’irrigation", p: "Stations de pompage et de filtration, et conduites PEHD pour la distribution de l’eau.", img: "station-irrigation.jpg", alt: "Station de pompage et de filtration" },
    ],
    system: {
      title: "Le complexe d’un bassin d’irrigation",
      text: "Un bassin d’irrigation associe généralement, de la surface vers le sol&nbsp;:",
      layers: ["Géomembrane soudée, adaptée à l’exposition au soleil", "Géotextile anti-poinçonnement", "Support nivelé et compacté, débarrassé des pierres et des racines"],
      note: "En crête de talus, la géomembrane est ancrée dans une tranchée remblayée.",
    },
    steps: [["Étude", "Volume à stocker, implantation et nature du terrain."], ["Proposition", "Choix de la géomembrane, du géotextile et des équipements."], ["Réalisation", "Préparation du support, pose, soudure et ancrage."], ["Mise en service", "Contrôle des soudures, puis mise en eau."]],
    materials: ["Géomembranes", "Géotextiles"],
    gallery: [["reservoirs-circulaires.jpg", "Réservoirs circulaires revêtus de géomembrane"], ["conduite-pehd.jpg", "Raccordement de conduites PEHD"], ["bassin-eau-rempli.jpg", "Bassin en eau après étanchéité"]],
    videos: [["bassin-geomembrane-collines", "Bassin en cours d’étanchéité"]],
    videosLand: [["bassin-geomembrane", "Bassin revêtu de géomembrane"]],
  },

  batiment: {
    metaDesc: "Bâtiment : étanchéité des toitures-terrasses techniques et des ouvrages industriels par membranes bitumineuses et synthétiques.",
    hero: "toiture-terrasse.jpg",
    tagline: "Étanchéité de toitures-terrasses techniques.",
    heroText: "Solutions d’étanchéité de toitures-terrasses techniques et d’ouvrages industriels.",
    facts: [["Enjeu", "Des toitures durablement étanches"], ["Ouvrages", "Toitures-terrasses techniques, ouvrages industriels"], ["Matériaux", "Membranes bitumineuses et synthétiques"], ["Contrôle", "Soudures et recouvrements vérifiés"]],
    lead: "Nous proposons des solutions d’étanchéité de toitures-terrasses techniques et d’ouvrages industriels.",
    body: [
      "Une toiture-terrasse technique supporte des équipements, des passages et de nombreuses traversées. Son étanchéité doit rester continue sur toute la surface, jusqu’aux relevés et aux points singuliers.",
      "Selon l’ouvrage, nous mettons en œuvre des membranes bitumineuses ou des membranes synthétiques soudées.",
    ],
    introImg: null,
    works: [
      { t: "Toitures-terrasses techniques", p: "Étanchéité des toitures qui accueillent des équipements techniques, avec traitement des relevés, des évacuations d’eaux pluviales et des traversées.", img: "toiture-terrasse-2.jpg", alt: "Ouvriers posant des membranes sur une toiture-terrasse" },
      { t: "Membranes bitumineuses", p: "Pose de membranes bitumineuses en lés, assemblées par recouvrement et soudure à la flamme.", ico: "roll" },
      { t: "Membranes synthétiques", p: "Membranes synthétiques soudées à l’air chaud, avec contrôle des soudures sur toute leur longueur.", img: "soudure-membrane-pvc.jpg", alt: "Techniciens soudant une membrane d’étanchéité" },
      { t: "Ouvrages industriels", p: "Étanchéité d’ouvrages en béton en site industriel.", img: "bassin-beton-geomembrane.jpg", alt: "Géomembrane posée sur les parois d’un ouvrage en béton" },
    ],
    system: {
      title: "La composition d’une toiture-terrasse",
      text: "La composition dépend de l’usage de la toiture et de la conception du bâtiment. Une toiture-terrasse comprend généralement, de haut en bas&nbsp;:",
      layers: ["Protection, selon l’usage de la toiture", "Membrane d’étanchéité", "Isolant thermique, selon conception", "Pare-vapeur", "Élément porteur"],
      note: "Les relevés, les évacuations et les traversées font l’objet d’un traitement spécifique.",
    },
    steps: [["Diagnostic", "Visite de la toiture, état du support et des points singuliers."], ["Proposition", "Choix du système d’étanchéité adapté à l’usage de la toiture."], ["Pose", "Préparation du support, pose des membranes et des relevés."], ["Contrôle", "Vérification des soudures et des recouvrements."]],
    materials: ["Géomembranes", "Géotextiles"],
    gallery: [],
  },

  "ouvrages-art": {
    metaDesc: "Ouvrages d’art : étanchéité des ponts, des tunnels, des viaducs et des murs de soutènement.",
    hero: "radier-membrane-pvc.jpg",
    tagline: "Protection des structures d’envergure.",
    heroText: "Étanchéité des ponts, des tunnels, des viaducs et des murs de soutènement.",
    facts: [["Enjeu", "Protection contre les infiltrations"], ["Ouvrages", "Ponts, tunnels, viaducs, murs de soutènement"], ["Matériaux", "Membranes, géotextiles, drainage"], ["Contrôle", "Soudures et points singuliers contrôlés"]],
    lead: "Nous assurons l’étanchéité des ponts, des tunnels, des viaducs et des murs de soutènement, pour protéger durablement ces structures d’envergure.",
    body: [
      "Les infiltrations d’eau dégradent le béton et corrodent les armatures. Sur un ouvrage d’art, l’étanchéité conditionne directement la durée de vie de la structure.",
      "Nous associons membranes d’étanchéité, géotextiles de protection et drainage, avec un soin particulier apporté aux joints et aux points singuliers.",
    ],
    introImg: ["ouvrage-enterre-pvc-2.jpg", "Membranes d’étanchéité posées sur un grand radier et des voiles"],
    works: [
      { t: "Ponts et viaducs", p: "Étanchéité des tabliers, qui protège le béton et les armatures des infiltrations d’eau.", ico: "bridge" },
      { t: "Tunnels", p: "Étanchéité par membranes synthétiques entre le soutènement et le revêtement définitif, associée à un géotextile de protection et au drainage.", img: "ouvrage-enterre-pvc.jpg", alt: "Membranes d’étanchéité posées sur une structure en béton" },
      { t: "Murs de soutènement", p: "Étanchéité et drainage de la face arrière des murs, pour évacuer les eaux et protéger la structure.", img: "fondations-drainage-2.jpg", alt: "Pose d’une nappe de protection et de drainage sur un mur enterré" },
      { t: "Joints et points singuliers", p: "Traitement des joints, des reprises de bétonnage et des traversées, zones les plus exposées aux infiltrations.", ico: "joint" },
    ],
    system: {
      title: "L’étanchéité d’un tunnel",
      text: "Le principe est adapté à chaque ouvrage. Entre le terrain et l’intérieur du tunnel, on trouve généralement&nbsp;:",
      layers: ["Soutènement", "Géotextile de protection et de drainage", "Membrane d’étanchéité synthétique", "Revêtement définitif en béton"],
      note: "Les eaux collectées par le géotextile sont conduites vers les drains longitudinaux.",
    },
    steps: [["Étude", "Analyse de la structure, des venues d’eau et des contraintes du chantier."], ["Choix du système", "Membranes, protection et drainage adaptés à l’ouvrage."], ["Mise en œuvre", "Pose, soudure et traitement des points singuliers."], ["Contrôle", "Contrôle des soudures et traçabilité complète."]],
    materials: ["Géomembranes", "Géotextiles", "Géocomposites de drainage"],
    gallery: [["radier-membrane-pvc-2.jpg", "Membrane d’étanchéité sur grande surface"], ["fondations-drainage.jpg", "Protection et drainage des fondations"]],
  },
};


module.exports = { SECTORS, PAGES, QUALITY, ICONS };
