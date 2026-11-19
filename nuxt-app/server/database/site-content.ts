// server/database/site-content.ts

export function getGlobalConfig() {
  return {
    ownerName: "Dylan Tettarasar",
    phone: "+33 6 51 21 48 06",
    venue: "Rambouillet, France",
    website: "https://dylan-tettarasar.dev",
    availability: {
      fr: "Disponible immédiatement",
      en: "Available immediately"
    },
    transport: {
      fr: "Permis B, véhicule personnel - Métros/RER : Paris & IDF",
      en: "Driving license B, personal vehicle - Metro/RER : Paris & IDF" 
    }
  }
}

export function getHeroData(locale: string) {
  const heroBase = {
    img: "/img/profile_pic_square.jpg",
    imgAlt: {
      fr: "Photo de Dylan Tettarasar",
      en: "Dylan Tettarasar's profile picture"
    },
    title: {
      fr: "Hello World! Je suis Dylan",
      en: "Hello World! I’m Dylan"
    },
    subtitle: {
      fr: "Product Owner / Chef de Projet",
      en: "Product Owner / Project Manager"
    },
    specialty: {
      fr: "Web, CRM & Plateformes Digitales",
      en: "Web, CRM & Digital Platforms"
    },
    links: {
      email: "mailto:dtettarasar@gmail.com",
      linkedin: "https://www.linkedin.com/in/dylan-tettarasar-a89a0865/",
      github: "https://github.com/dtettarasar"
    }
  }

  const lang = (locale === 'fr' || locale === 'en') ? locale : 'en'

  return {
    img: heroBase.img,
    imgAlt: heroBase.imgAlt[lang],
    title: heroBase.title[lang],
    subtitle: heroBase.subtitle[lang],
    specialty: heroBase.specialty[lang],
    links: heroBase.links
  }
}

  export function getIntroText(locale: string): string[] {
    
    if (locale === 'fr') {
      return [
        `Bonjour, je suis Dylan Tettarasar, Chef de Projet Digital & Product Owner avec 7 ans d'expérience concrète sur des applications web et plateformes CRM, à l'intersection des enjeux business, du design produit et de la technique.`,

        `Pendant plusieurs années, notamment chez DII / POLITICO, <strong>j'ai piloté des plateformes web et des projets CRM (Salesforce) pour des marques propres et des clients Grands Comptes (Uber, KPMG, Le Figaro, L'Agefi, Politico...)</strong> : cadrage fonctionnel, rédaction de spécifications et User Stories (Jira), coordination des équipes, intégration frontend, suivi de production et recette (UAT).`,

        `Cette expérience terrain m'a donné une vision concrète du cycle de vie d'un produit digital — de l'expression du besoin et des parcours utilisateurs jusqu'à la mise en ligne, la donnée et la mesure de performance.`,

        `Entre <strong>août 2025 et janvier 2026</strong>, j'ai consacré une période structurée à la <strong>formation et au prototypage technique</strong> (Python / CS50P, Vue.js, Nuxt.js, Node.js, Docker, Caddy) afin de mieux comprendre le fonctionnement réel des applications, cerner les contraintes techniques en amont et gagner en autonomie sur la création. Construire des prototypes complets m'a permis d'affiner ma démarche de conception produit de bout en bout, du design et de l'architecture jusqu'aux tests et à la validation.`,

        `Aujourd'hui, je mets cette double culture produit et technique au service d'équipes et de projets digitaux : <strong>concevoir des solutions utiles, fluides et réalistes techniquement, de l'idée initiale jusqu'à la recette et au déploiement</strong>.`
      ]
    }

    // Par défaut / Version EN
    return [
      `Hello, I'm Dylan Tettarasar, a Digital Project Manager & Product Owner with 7 years of hands-on experience across web applications and CRM platforms, bridging business goals, product design, and technical execution.`,

      `Over several years, notably at DII / POLITICO, <strong>I led web ecosystems and Salesforce CRM projects for flagship brands and enterprise clients (Uber, KPMG, Le Figaro, L'Agefi, Politico...)</strong> — covering functional scoping, specs and User Stories (Jira), team coordination, frontend integration, production delivery, and UAT.`,

      `That hands-on background gave me a grounded view of the full digital product lifecycle, from user journeys and business requirements to live operations, data flows, and performance tracking.`,

      `Between <strong>August 2025 and January 2026</strong>, I dedicated a focused period to <strong>technical training and prototyping</strong> (Python / CS50P, Vue.js, Nuxt.js, Node.js, Docker, Caddy) to better understand how applications work under the hood, anticipate technical constraints earlier, and build with greater autonomy. Taking prototypes end to end sharpened my approach to product design and delivery, from initial concept and structure through testing and validation.`,

      `Today, I bring that combined product and technical perspective to digital teams and projects: <strong>shaping practical, user-centered solutions that are technically sound from early design to QA and release</strong>.`
  ]
}

  export function getResumeIntroText(locale: string): string[] {
  if (locale === 'fr') {
    return [
      `Product Owner & Chef de projet digital avec 7 ans d'expérience sur des applications web et CRM (WordPress Multisite, Salesforce), j'interviens du cadrage produit et de la conception fonctionnelle jusqu'au suivi de réalisation et à la recette (UAT). J'ai notamment piloté des dispositifs web et CRM pour des acteurs tels qu'Uber, KPMG, Le Figaro, L'Agefi et Politico.`,
      `Mon parcours associe gestion de backlog (Jira), spécifications/User Stories, culture produit/UX et une montée en compétences technique (août 2025 – janvier 2026 : Python/CS50P, Vue/Nuxt, Node, Docker) pour mieux appréhender les contraintes d'implémentation, gagner en autonomie et piloter une fonctionnalité ou une application de bout en bout.`
    ]
  }

  // Par défaut / EN
  return [
    `Product Owner & Digital Project Manager with 7 years of hands-on experience across web and CRM platforms (WordPress Multisite, Salesforce), working from product framing and functional design through delivery follow-up and UAT. My background includes leading web and CRM initiatives for organizations such as Uber, KPMG, Le Figaro, L'Agefi, and Politico.`,
    `I combine Jira backlog management, PRDs/User Stories, and product/UX sensibility with hands-on technical upskilling (August 2025 – January 2026: Python/CS50P, Vue/Nuxt, Node, Docker) to better understand implementation constraints, build with greater autonomy, and guide features or applications end to end.`
  ]
}

export function getResumePrintProfileText(locale: string): string {
  if (locale === 'fr') {
    return 'Product Owner technico-fonctionnel avec 7 ans d\'expérience, je fais le lien entre enjeux business, besoins utilisateurs et exécution technique pour concevoir et piloter des solutions web/CRM performantes.'
  }

  return 'Technical Product Owner with 7 years of experience, bridging business strategy, user needs, and technical delivery to build high-impact web solutions.'
}

  export function getLanguageContent(locale: string): { name: string; level: string; img: string }[] {

  // 1. On définit la structure technique et les clés de traduction
  const languagesBase = [
    {
      id: 'fr',
      img: '/img/language/france-croissant.png',
      translations: {
        fr: { name: 'Français', level: 'Langue maternelle' },
        en: { name: 'French', level: 'Native Language' }
      }
    },
    {
      id: 'en',
      img: '/img/language/uk-afternoon-tea.png',
      translations: {
        fr: { name: 'Anglais', level: 'Niveau professionnel' },
        en: { name: 'English', level: 'Business Level' }
      }
    }
  ]

  // 2. On transforme le tableau pour renvoyer exactement le format attendu
  return languagesBase.map(lang => {

    // On récupère la traduction correspondante, ou on se rabat sur l'anglais au cas où
    const text = lang.translations[locale as 'fr' | 'en'] || lang.translations['en']
    
    return {
      name: text.name,
      level: text.level,
      img: lang.img
    }
    
  })

}

  // Editorial note for CV print:
  // Keep "R&D Lab / Side Projects" framed as a serious professional experience with concrete outcomes.
  // Revisit wording after final print CV iteration and advisor feedback if needed.
  export function getExperiences(locale: string): {
    companyName: string
    companyVenue: string
    jobTitle: string
    period: string
    companyLogoSrc: string
    jobMissions: string[]
    jobMissionsShort: string[]
    displayOnPrint: boolean
  }[] {

    // 1. On définit la structure technique et les clés de traduction
    const experiencesBase = [
      {
        companyName: "Projets personnels",
        companyVenue: "Rambouillet, France",
        companyLogoSrc: "/img/resume/experiences/research-and-development.png",
        displayOnPrint: true,
        translations: {
          fr: {
            jobTitle: "Formation & Montée en compétences",
            period: "Août 2025 - Janvier 2026",
            jobMissions: [
              "<strong>Cursus Harvard CS50P (Python) & Protection Créative :</strong> Apprentissage des fondations de Python, approfondissement de la programmation orientée objet. Conception d’<em>AI Art Shield</em> (Projet final Harvard) : une application en ligne de commande (CLI) dédiée à la protection des œuvres des illustrateurs (Cadrage, PRD, logique POO).",
              "<strong>Architecture & DevOps (Site Portfolio) :</strong> Déploiement et maintenance en production du site portfolio (dylan-tettarasar.dev) développé sous <strong>Nuxt.js</strong>. Conteneurisation complète via <strong>Docker</strong> et configuration d'un reverse-proxy <strong>Caddy</strong> sur serveur VPS (gestion automatisée du HTTPS/DNS).",
              "<strong>Conception du SaaS <em>Otis AI</em> :</strong> Pilotage produit complet d'une application de génération de contenu texte optimisé pour le SEO. Cadrage des spécifications, design d'interface (Figma) et déploiement d'une <strong>architecture découplée</strong> (Frontend Vue.js / Backend Node.js-Express) avec intégration des API OpenAI et Stripe. Mise en place de tests unitaires et d'intégration (Vitest)."
            ],
            jobMissionsShort: [
              "<strong>Application web de génération de contenu texte SEO :</strong> Cadrage fonctionnel, UX/UI (Figma), modélisation de données, développement Vue.js et Node.js/Express, intégration des API OpenAI et Stripe, tests unitaires et d'intégration (Vitest).",
              "<strong>Formation Harvard CS50P :</strong> Apprentissage des fondations de Python et développement d'un outil dédié à la protection des créations visuelles.",
              "<strong>Site portfolio personnel :</strong> Conception UI/UX, intégration web, déploiement sous Nuxt.js avec Docker, reverse-proxy Caddy sur VPS et configuration HTTPS/DNS.",
              "<strong>Projets & Démonstrations :</strong> Retrouvez l'ensemble des réalisations sur <br> <strong>dylan-tettarasar.dev/portfolio</strong>."
            ]
          },
          en: {
            jobTitle: "Training & Skill Development",
            period: "August 2025 - January 2026",
            jobMissions: [
              "<strong>Harvard CS50P (Python) & Creative Protection:</strong> Deep dive into Object-Oriented Programming. Conceived <em>AI Art Shield</em> (Harvard Final Project): Command Line Interface (CLI) app dedicated to protecting artists' artwork (Scoping, PRD, OOP logic).",
              "<strong>Architecture & DevOps (Portfolio Site):</strong> Deployment and production maintenance of the portfolio website (dylan-tettarasar.dev) built with <strong>Nuxt.js</strong>. Full containerization via <strong>Docker</strong> and setup of a <strong>Caddy</strong> reverse-proxy on a VPS server (automated HTTPS/DNS management).",
              "<strong>SaaS Design - <em>Otis AI</em>:</strong> Full product management of an AI content generation application. Scoped functional specifications, UI design (Figma), and deployed a <strong>decoupled architecture</strong> (Vue.js Frontend / Node.js-Express Backend) integrated with OpenAI and Stripe APIs. Implemented testing with Vitest."
            ],
            jobMissionsShort: [
              "<strong>Web app for SEO text content generation:</strong> Functional scoping, UI/UX in Figma, data modeling, Vue.js and Node.js/Express build, OpenAI and Stripe API integrations, and unit/integration testing (Vitest).",
              "<strong>Harvard CS50P Training:</strong> Python fundamentals and development of a tool dedicated to protecting visual artwork.",
              "<strong>Personal portfolio website:</strong> UI/UX design, web integration, Nuxt.js deployment with Docker, Caddy reverse-proxy on VPS, and HTTPS/DNS setup.",
              "<strong>Projects & Demos:</strong> Explore all live projects and achievements at <br> <strong>dylan-tettarasar.dev/portfolio</strong>."
            ]
          }
        }
      },
      {
        companyName: "DII / POLITICO",
        companyVenue: "Paris, France",
        companyLogoSrc: "/img/resume/experiences/company-logo-dii.png",
        displayOnPrint: true,
        translations: {
          fr: {
            jobTitle: "Product Owner Web & CRM",
            period: "Janvier 2018 - Décembre 2024",
            jobMissions: [
              "<strong>Gestion & Évolution du Parc CMS :</strong> Pilotage global de l’architecture <strong>WordPress Multisite</strong> pour l'ensemble des conférences de l'agence (marques propres et Grands Comptes : <em>Uber, KPMG, Le Figaro, L'Agefi, Politico...</em>). Gestion des noms de domaine et des configurations <strong>DNS/HTTPS</strong> avec les prestataires.",
              "<strong>Maquettage, Intégration Frontend & Support Interne :</strong> Création de maquettes sous <strong>Figma</strong> dans le cadre de refontes de pages web, intégration des contenus événementiels (programmes, intervenants, modules de vidéos et livestreams) et adaptation responsive des interfaces (<strong>HTML5/CSS3/JS</strong>). Support technique auprès des équipes marketing pour des événements <strong>Grands Comptes</strong>, avec la gestion de pics dépassant <strong>1 000 visites uniques</strong> par jour.",
              "<strong>Migration, Data & Administration Salesforce :</strong> Acteur clé de la transition critique en 3 mois d’un CRM legacy vers <strong>Salesforce</strong>. Administration quotidienne (gouvernance, profils, <strong>Permission Sets</strong>, mapping d'objets, création & gestion de rapports, dashboards). Réalisation de requêtes <strong>SOQL (SQL)</strong> pour l'investigation de données, la vérification des recettes fonctionnelles et le support aux imports massifs (<strong>DataLoader / Pardot</strong>).",
              "<strong>Product Ownership & Pilotage Technique :</strong> Conception fonctionnelle et pilotage du cycle de vie de <strong>features complexes</strong> (parcours de membership, formulaires dynamiques via iframes connectées à Salesforce). Rédaction des cahiers des charges et des User Stories (<strong>Jira</strong>), modélisation des flux de données, suivi des développements et tests de recette (<strong>UAT</strong>).",
              "<strong>Build & Code CRM :</strong> Optimisation frontend (HTML/CSS) directement sur des composants <strong>LWC</strong> (Lightning Web Components) et gestion des déploiements via pull-requests sur <strong>GitHub</strong>."
            ],
            jobMissionsShort: [
              "Pilotage de l'écosystème <strong>WordPress Multisite</strong> pour des conférences grands comptes (Le Figaro, L'Agefi, KPMG...).",
              "Gestion des noms de domaine et des configurations DNS/HTTPS avec les prestataires.",
              "Création de <strong>maquettes sous Figma</strong> lors de refontes de pages web et intégration responsive (<strong>HTML5/CSS3/JS</strong>).",
              "Supervision de <strong>l'intégration des contenus événementiels</strong> (agendas, speakers, livestreams) et <strong>support technique</strong> des équipes marketing sur des <strong>pics supérieurs à 1 000 visites/jour</strong>.",
              "Transition CRM vers <strong>Salesforce en 3 mois</strong> et administration quotidienne. Requêtage <strong>SOQL (SQL)</strong> pour l'analyse de données, le contrôle UAT et la gestion des imports (<strong>DataLoader / Pardot</strong>).",
              "<strong>Conception de fonctionnalités complexes</strong> (membership, formulaires Salesforce) : rédaction des User Stories Jira, suivi des développements, <strong>élaboration des plans de tests</strong> et <strong>recette fonctionnelle (UAT)</strong>.",
              "Optimisation frontend sur les <strong>composants Salesforce LWC</strong> et coordination des déploiements via <strong>pull requests GitHub</strong>.",
              "Mise en place et suivi des outils de mesure d'audience (<strong>Google Analytics</strong>, intégration de tags/trackers), analyse des performances et optimisation continue du <strong>référencement naturel</strong> (SEO, balisage sémantique, méta-données)."
            ]
          },
          en: {
            jobTitle: "Web & CRM Product Owner",
            period: "January 2018 - December 2024",
            jobMissions: [
              "<strong>CMS Fleet Management & Evolution:</strong> Global management of the <strong>WordPress Multisite</strong> architecture for all agency conferences (own brands and key accounts: <em>Uber, KPMG, Le Figaro, L'Agefi, Politico...</em>). Managed domain names and DNS/HTTPS configurations in coordination with external providers.",
              "<strong>Wireframing, Frontend Integration & Internal Support:</strong> Created mockups in <strong>Figma</strong> for web page redesigns, integrated event content (agendas, speakers, video modules, and livestreams), and handled responsive interface adaptation (<strong>HTML5/CSS3/JS</strong>). Provided technical troubleshooting for marketing teams for <strong>key account</strong> events, managing traffic peaks exceeding <strong>1,000 unique visits</strong> per day.",
              "<strong>Salesforce Migration, Data & Administration:</strong> Key player in the critical 3-month transition from a legacy CRM to <strong>Salesforce</strong>. Managed daily platform administration (governance, <strong>Permission Sets</strong>, object mapping, reports and dashboards management). Executed <strong>SOQL (SQL)</strong> queries for data investigation, UAT validation, and bulk import operations (<strong>DataLoader / Pardot</strong>).",
              "<strong>Product Ownership & Technical Delivery:</strong> Functional design and lifecycle management of <strong>complex features</strong> (membership paths, dynamic iframe forms connected to Salesforce). Wrote technical specifications and User Stories (<strong>Jira</strong>), modeled data flows, and executed User Acceptance Testing (<strong>UAT</strong>).",
              "<strong>CRM Build & Code:</strong> Optimized frontend layouts (HTML/CSS) directly within <strong>LWC</strong> (Lightning Web Components) and managed delivery via GitHub <strong>pull-requests</strong>."
            ],
            jobMissionsShort: [
              "Led <strong>WordPress Multisite</strong> operations for high-visibility conference websites.",
              "Managed domain names and DNS/HTTPS configurations in coordination with external providers.",
              "Created <strong>Figma mockups</strong> for web page redesigns and handled responsive frontend integration (<strong>HTML5/CSS3/JS</strong>).",
              "Oversaw <strong>event content integration</strong> (agendas, speakers, livestream modules) and <strong>technical support</strong> for marketing teams during <strong>peaks above 1,000 daily visits</strong>.",
              "Drove a <strong>3-month Salesforce migration</strong> and daily administration. Used <strong>SOQL (SQL)</strong> for data analysis, UAT checks, and bulk imports (<strong>DataLoader / Pardot</strong>).",
              "Designed and delivered <strong>complex product features</strong> (membership journeys, dynamic Salesforce-connected forms) with Jira workflows and UAT.",
              "Improved frontend layouts in Salesforce <strong>LWC</strong> components and coordinated deliveries through <strong>GitHub pull requests</strong>.",
              "Implementation and monitoring of audience measurement tools (<strong>Google Analytics</strong>, integration of tags/trackers), performance analysis, and continuous optimization of <strong>search engine optimization</strong> (SEO, semantic markup, metadata)."
            ]
          }
        }
      },
      {
        companyName: "ABUS France",
        companyVenue: "Villeneuve-le-Roi, France",
        companyLogoSrc: "/img/resume/experiences/company-logo-abus.png",
        displayOnPrint: true,
        translations: {
          fr: {
            jobTitle: "Chargé de Marketing Digital & Référent Web",
            period: "Février 2016 - Juin 2017",
            jobMissions: [
              "<strong>Interface Technique Internationale :</strong> Point de contact unique de l'équipe de développement basée au <strong>siège allemand</strong> (<strong>suivi des bugs</strong> sur la plateforme interne, cadrage et remontée des <strong>demandes d’évolution</strong>).",
              "<strong>Administration CMS & SEO technique :</strong> Gestion et mise à jour structurelle du <strong>catalogue produits</strong> sur le marché français via le CMS <strong>eZ Publish</strong> et optimisation du <strong>référencement naturel</strong>.",
              "<strong>Intégration & Création graphique :</strong> Développement et stylisation de <strong>landing pages personnalisées</strong> (<strong>HTML5/CSS3</strong>) et conception d'infographies complexes pour l'<strong>identité visuelle</strong> de la marque."
            ],
           jobMissionsShort: [
            "<strong>Interface technique</strong> avec les équipes du siège allemand pour la maintenance et les évolutions du <strong>site web catalogue</strong>.",
            "Administration du CMS <strong>eZ Publish</strong> (catalogue produits, <strong>landing pages HTML/CSS</strong>), optimisation <strong>SEO</strong> et création graphique."
          ]
          },
          en: {
            jobTitle: "Digital Marketing Manager & Web Referent",
            period: "February 2016 - June 2017",
            jobMissions: [
              "<strong>International Technical Interface:</strong> Single point of contact for the core development team based at the <strong>German headquarters</strong> (<strong>bug tracking</strong> on the internal platform, scoping, and escalating <strong>technical evolution requests</strong>).",
              "<strong>CMS Administration & Technical SEO:</strong> Structural management and updates of the <strong>product catalog</strong> for the French market via the <strong>eZ Publish CMS</strong>, driving <strong>search engine optimization</strong>.",
              "<strong>Integration & Graphic Design:</strong> Developed and styled <strong>responsive custom landing pages</strong> (<strong>HTML5/CSS3</strong>) and designed complex infographics for the brand's <strong>visual identity</strong>."
            ],
            jobMissionsShort: [
              "Acted as <strong>technical liaison</strong> with the German HQ development team for bug follow-up and evolution requests.",
              "Managed <strong>eZ Publish</strong> content operations, <strong>technical SEO</strong>, and responsive marketing page integration."
            ]
          }
        }
      },
      {
        companyName: "Pierre & Vacances Center Parcs",
        companyVenue: "Paris, France",
        companyLogoSrc: "/img/resume/experiences/company-logo-pvcp.png",
        displayOnPrint: false,
        translations: {
          fr: {
            jobTitle: "Assistant Responsable Digital",
            period: "Février 2015 - Août 2015",
            jobMissions: [
              "<strong>SEO & Stratégie de Contenu :</strong> Optimisation du contenu éditorial pour les portails web du groupe afin d'accroître la visibilité et le trafic organique.",
              "<strong>Gestion des Actifs Numériques :</strong> Production de contenus visuels pour les réseaux sociaux et gestion des contenus de la chaîne YouTube de l'entreprise.",
              "<strong>Reporting de Performance :</strong> Suivi des indicateurs clés d'engagement (KPIs) et fourniture d'analyses basées sur les données pour orienter les campagnes de marketing digital."
            ],
            jobMissionsShort: [
              "Optimisation SEO editoriale et contribution au pilotage des campagnes digitales du groupe.",
              "Production de contenus social media avec suivi des KPI de performance."
            ]
          },
          en: {
            jobTitle: "Assistant Digital Manager",
            period: "February 2015 - August 2015",
            jobMissions: [
              "<strong>SEO & Content Strategy:</strong> Optimized editorial content for the group's web portals to increase organic reach.",
              "<strong>Digital Asset Management:</strong> Produced visual content for social media and managed the corporate YouTube channel content.",
              "<strong>Performance Reporting:</strong> Monitored key engagement metrics and provided data-driven insights for digital marketing campaigns."
            ],
            jobMissionsShort: [
              "Contributed to SEO content strategy and digital campaign execution across group web properties.",
              "Produced social content and reported key engagement KPIs for marketing optimization."
            ]
          }
        }
      },
      {
        companyName: "Btown Ltd",
        companyVenue: "New Delhi, India",
        companyLogoSrc: "/img/resume/experiences/company-logo-btown.png",
        displayOnPrint: false,
        translations: {
          fr: {
            jobTitle: "Spécialiste Contenu Web",
            period: "Avril 2014 - Août 2014",
            jobMissions: [
              "<strong>SEO International :</strong> Création et optimisation de contenu textuel via WordPress et Yoast SEO.",
              "<strong>Storytelling Visuel :</strong> Conception d'infographies et de visuels digitaux pour soutenir la croissance de l'audience éditoriale."
            ],
            jobMissionsShort: [
              "Creation et optimisation de contenus SEO sur WordPress avec Yoast dans un contexte international.",
              "Conception de visuels editoriaux pour soutenir la croissance de l'audience."
            ]
          },
          en: {
            jobTitle: "Web Content Specialist",
            period: "April 2014 - August 2014",
            jobMissions: [
              "<strong>International SEO:</strong> Content creation and optimization using WordPress/Yoast SEO.",
              "<strong>Visual Storytelling:</strong> Designed infographics and digital assets to support editorial growth."
            ],
            jobMissionsShort: [
              "Created and optimized SEO content in WordPress with Yoast for international campaigns.",
              "Designed visual storytelling assets to support editorial audience growth."
            ]
          }
        }
      }
    ];

    // 2. On transforme le tableau pour renvoyer exactement le format attendu
    return experiencesBase.map(exp => {

      // On récupère la traduction correspondante, ou on se rabat sur l'anglais au cas où
      const text = exp.translations[locale as 'fr' | 'en'] || exp.translations['en']
      
      return {
        companyName: exp.companyName,
        companyVenue: exp.companyVenue,
        jobTitle: text.jobTitle,
        period: text.period,
        companyLogoSrc: exp.companyLogoSrc,
        jobMissions: text.jobMissions,
        jobMissionsShort: text.jobMissionsShort,
        displayOnPrint: exp.displayOnPrint
      }
      
    })
}


export function getSkills(locale: string): {
  title: string
  icon: string
  displayOnPrint: boolean
  items: {
    icon: string
    label: string
    displayOnPrint: boolean
  }[]
}[] {
    type LocalizedSkillLabel = string | { fr: string; en: string }
    type SkillBaseItem = {
      icon: string
      label: LocalizedSkillLabel
      displayOnPrint: boolean
    }
    type SkillBaseCategory = {
      title: { fr: string; en: string }
      icon: string
      displayOnPrint: boolean
      items: SkillBaseItem[]
    }
  
    // 1. Définition de la base de données des compétences
    const skillsBase: SkillBaseCategory[] = [
      {
        title: { fr: "Gestion de Projet", en: "Project Management" },
        icon: "mdi:clipboard-check",
        displayOnPrint: true,
        items: [
          { icon: "mdi:jira", label: "Jira", displayOnPrint: true },
          { icon: "mdi:atlassian", label: "Confluence", displayOnPrint: true },
          { icon: "bi:kanban-fill", label: "Agile / Kanban & Scrum", displayOnPrint: true },
          { 
            icon: "mdi:file-document-edit", 
            label: { fr: "Spécifications fonctionnelles", en: "Functional Specs" },
            displayOnPrint: true
          },
          { 
            icon: "mdi:account-group", 
            label: { fr: "Gestion des parties prenantes", en: "Stakeholder Management" },
            displayOnPrint: true
          }
        ]
      },
      {
        title: { fr: "CRM & Plateformes Business", en: "CRM & Business Platforms" },
        icon: "lsicon:marketing-filled",
        displayOnPrint: true,
        items: [
          { icon: "mdi:salesforce", label: "Salesforce", displayOnPrint: true },
          { icon: "ic:baseline-wordpress", label: "WordPress", displayOnPrint: true },
          { icon: "mdi:google-analytics", label: "Google Analytics", displayOnPrint: true },
          { 
            icon: "mdi:microsoft-office", 
            label: { fr: "Suite Office", en: "Office Suite" },
            displayOnPrint: false
          }
        ]
      },
      {
        title: { fr: "SEO & Performance", en: "SEO & Performance" },
        icon: "mdi:magnify",
        displayOnPrint: false,
        items: [
          { 
            icon: "mdi:search-web", 
            label: { fr: "SEO technique", en: "Technical SEO" },
            displayOnPrint: false
          },
          { icon: "mdi:speedometer", label: "Core Web Vitals", displayOnPrint: false },
          { 
            icon: "mdi:eye-check", 
            label: { fr: "Accessibilité (WCAG)", en: "Accessibility (WCAG)" },
            displayOnPrint: false
          }
        ]
      },
      {
        title: { fr: "Web & Digital", en: "Web & Digital" },
        icon: "mdi:web",
        displayOnPrint: true,
        items: [
          { icon: "mdi:language-html5", label: "HTML5", displayOnPrint: false },
          { icon: "mdi:language-css3", label: "CSS3", displayOnPrint: false },
          { icon: "mdi:language-javascript", label: "JavaScript", displayOnPrint: true },
          { icon: "icon-park-solid:api", label: "Web APIs", displayOnPrint: true },
          { icon: "mdi:tailwind", label: "Tailwind CSS", displayOnPrint: false },
          { icon: "mdi:bootstrap", label: "Bootstrap", displayOnPrint: false },
          { icon: "mdi:vuejs", label: "Vue.js", displayOnPrint: true },
          { icon: "lineicons:nuxt", label: "Nuxt.js", displayOnPrint: false }
        ]
      },
      {
        title: { fr: "Outils & Workflow", en: "Tools & Workflow" },
        icon: "carbon:tools-alt",
        displayOnPrint: true,
        items: [
          { icon: "mdi:git", label: "Git", displayOnPrint: true },
          { icon: "mdi:docker", label: "Docker", displayOnPrint: true },
          { icon: "simple-icons:caddy", label: "Caddy", displayOnPrint: false },
          { icon: "mdi:github", label: "GitHub", displayOnPrint: false },
          { icon: "ri:copilot-fill", label: "GitHub Copilot", displayOnPrint: false },
          { icon: "ri:claude-fill", label: "Claude Code", displayOnPrint: false },
          { icon: "devicon-plain:vitest", label: "Vitest", displayOnPrint: false }
        ]
      },
      {
        title: { fr: "Backend & Bases de données", en: "Backend & Databases" },
        icon: "mdi:server-network",
        displayOnPrint: true,
        items: [
          { icon: "mdi:nodejs", label: "Node.js", displayOnPrint: true },
          { icon: "lineicons:mongodb", label: "MongoDB", displayOnPrint: true },
          { icon: "mdi:language-python", label: "Python", displayOnPrint: true },
          { icon: "mdi:database", label: "SQL", displayOnPrint: true }
        ]
      },
      {
        title: { fr: "Design", en: "Design Tools" },
        icon: "ion:color-palette",
        displayOnPrint: true,
        items: [
          { icon: "file-icons:gimp", label: "GIMP", displayOnPrint: false },
          { icon: "simple-icons:krita", label: "Krita", displayOnPrint: false },
          { icon: "solar:figma-bold", label: "Figma", displayOnPrint: true }
        ]
      }
    ];

    // 2. Transformation dynamique du tableau selon la langue active
    return skillsBase.map(category => {
      return {
        title: category.title[locale as 'fr' | 'en'] || category.title['en'],
        icon: category.icon,
        displayOnPrint: category.displayOnPrint,
        
        items: category.items.map(item => {
          // Résolution intelligente du label (string vs objet bilingue)
          const resolvedLabel = typeof item.label === 'string'
            ? item.label
            : (item.label[locale as 'fr' | 'en'] || item.label['en'])

          return {
            icon: item.icon,
            label: resolvedLabel,
            displayOnPrint: item.displayOnPrint
          }
        })
      }
    })
}

export function getEducations(locale: string): { 
  educationLogoSrc: string; 
  year: string; 
  displayOnPrint: boolean;
  certificationLink?: string; // Optionnel car les diplômes n'ont pas de lien
  title: string; 
  issuer: string; 
}[] {

    // 1. On définit la structure technique et les clés de traduction
    const educationsBase = [
      {
        educationLogoSrc: "/img/resume/educations/harvard-university-logo-0.png",
        year: "2025",
        displayOnPrint: true,
        certificationLink: "https://certificates.cs50.io/eed08f81-a764-4e60-b861-87bb616aacff.pdf?size=letter",
        translations: {
          fr: {
            title: "CS50P - Introduction à la Programmation avec Python",
            issuer: "Université Harvard"
          },
          en: {
            title: "CS50P - Introduction to Programming with Python",
            issuer: "Harvard University"
          }
        }
      },
      {
        educationLogoSrc: "/img/resume/educations/fcc_logo.png",
        year: "2023",
        displayOnPrint: true,
        certificationLink: "https://www.freecodecamp.org/certification/fcc9e0cf531/back-end-development-and-apis",
        translations: {
          fr: {
            title: "Développement Backend et APIs",
            issuer: "freeCodeCamp"
          },
          en: {
            title: "Back End Development and APIs",
            issuer: "freeCodeCamp"
          }
        }
      },
      {
        educationLogoSrc: "/img/resume/educations/harvard-university-logo-0.png",
        year: "2021",
        displayOnPrint: true,
        certificationLink: "https://courses.edx.org/certificates/8c91c4feaae048159aab19a913c47924",
        translations: {
          fr: {
            title: "CS50x - Introduction à l'Informatique",
            issuer: "Université Harvard"
          },
          en: {
            title: "CS50x - Introduction to Computer Science",
            issuer: "Harvard University"
          }
        }
      },
      {
        educationLogoSrc: "/img/resume/educations/fcc_logo.png",
        year: "2020",
        displayOnPrint: true,
        certificationLink: "https://www.freecodecamp.org/certification/fcc9e0cf531/javascript-algorithms-and-data-structures",
        translations: {
          fr: {
            title: "Algorithmes JavaScript",
            issuer: "freeCodeCamp"
          },
          en: {
            title: "JavaScript Algorithms",
            issuer: "freeCodeCamp"
          }
        }
      },
      {
        educationLogoSrc: "/img/resume/educations/fcc_logo.png",
        year: "2020",
        displayOnPrint: false,
        certificationLink: "https://www.freecodecamp.org/certification/fcc9e0cf531/responsive-web-design",
        translations: {
          fr: {
            title: "Conception Web Responsive",
            issuer: "freeCodeCamp"
          },
          en: {
            title: "Responsive Web Design",
            issuer: "freeCodeCamp"
          }
        }
      },
      {
        educationLogoSrc: "/img/resume/educations/diploma-logo-inseec.png",
        year: "2015",
        displayOnPrint: true,
        // Pas de certificationLink ici
        translations: {
          fr: {
            title: "Master en Marketing Digital",
            issuer: "INSEEC Business School Paris"
          },
          en: {
            title: "Master's Degree - Digital Marketing",
            issuer: "INSEEC Business School Paris"
          }
        }
      },
      {
        educationLogoSrc: "/img/resume/educations/diploma-logo-uvsq.png",
        year: "2012",
        displayOnPrint: true,
        // Nettoyage de courseDetails : on injecte directement la bonne valeur selon la langue
        translations: {
          fr: {
            title: "DUT Techniques de Commercialisation",
            issuer: "Université de Versailles Saint-Quentin-en-Yvelines (UVSQ)"
          },
          en: {
            title: "BTEC Higher National Diploma",
            issuer: "Versailles Saint-Quentin-en-Yvelines University"
          }
        }
      }
    ];

    // 2. On transforme le tableau pour renvoyer exactement le format attendu
    return educationsBase.map(edu => {
      const text = edu.translations[locale as 'fr' | 'en'] || edu.translations['en']
      
      return {
        educationLogoSrc: edu.educationLogoSrc,
        year: edu.year,
        displayOnPrint: edu.displayOnPrint,
        certificationLink: edu.certificationLink, // Sera transmis (ou undefined pour les diplômes)
        title: text.title,
        issuer: text.issuer
      }
    })
}


export function getProjects(locale: string) {
  const projectsBase = [
    {
      title: { fr: "Architecture du Portfolio Personnel", en: "Personal Portfolio Architecture" },
      img: "/img/portfolio/img-portfolio-personal-homepage.png",
      icon: "material-symbols:person-pin-rounded",
      stack: [
        "mdi:language-html5",
        "mdi:language-css3",
        "mdi:language-javascript",
        "mdi:tailwind",
        "mdi:vuejs",
        "lineicons:nuxt",
        "devicon-plain:vitest",
        "fa7-brands:node-js",
        "lineicons:mongodb",
        "mdi:docker",
        "simple-icons:caddy"
      ],
      desc: {
        fr: [
          "Une <strong>application Fullstack SSR</strong> construite avec Nuxt 4, intégrant une API personnalisée pour la gestion dynamique du contenu.",
          "Conçue comme un <strong>Starter Kit générique</strong>, disponible en Open Source sur GitHub sous licence MIT.",
          "Orchestrée avec <strong>Docker</strong> (environnement multi-services) incluant des configurations distinctes pour le développement et la production.",
          "Automatisation des flux de travail via un <strong>Makefile</strong> pour standardiser les commandes de déploiement et de maintenance.",
          "Infrastructure sécurisée utilisant <strong>Caddy</strong> comme reverse proxy avec certificats HTTPS/SSL automatisés."
        ],
        en: [
          "A <strong>Fullstack SSR application</strong> built with Nuxt 4, featuring a custom API for dynamic content management.",
          "Engineered as a <strong>Generic Starter Kit</strong>, available as Open Source on GitHub under MIT license.",
          "Orchestrated with <strong>Docker</strong> (multi-service environment) including separate Dev and Production configurations.",
          "Automated workflows via <strong>Makefile</strong> to standardize deployment and maintenance commands.",
          "Secure infrastructure using <strong>Caddy</strong> as a reverse proxy with automated HTTPS/SSL certificates."
        ]
      },
      links: [
        {
          label: { fr: "Voir le code source", en: "View source code" }, 
          url: "https://github.com/dtettarasar/personal-website",
          icon: "material-symbols:code-blocks"
        }
      ]
    },
    {
      title: { fr: "Otis AI – Plateforme SaaS d'I.A.", en: "Otis AI – AI SaaS Platform" },
      img: "/img/portfolio/otis-ai-homepage.png",
      icon: "material-symbols:edit-note-rounded",
      stack: [
        "mdi:language-html5",
        "mdi:language-css3",
        "mdi:language-javascript",
        "mdi:bootstrap",
        "mdi:vuejs",
        "fa7-brands:node-js",
        "devicon-plain:vitest",
        "lineicons:mongodb",
        "bi:stripe",
        "simple-icons:openai"
      ],
      desc: {
        fr: [
          "Un <strong>SaaS de génération de contenu assisté par I.A.</strong> intégrant les modèles d'OpenAI via de l'ingénierie de prompt dynamique.",
          "Implémentation complète d'un <strong>système de monétisation</strong> utilisant l'API Stripe avec un modèle économique basé sur des crédits.",
          "Système d'<strong>authentification robuste basé sur JWT</strong> sécurisant les échanges entre le frontend Vue.js et le backend Node.js.",
          "Éditeur de contenu enrichi permettant la mise en forme post-génération et des mises à jour de la base de données en temps réel.",
          "Suite de tests complète (Unitaires & Intégration) avec <strong>Vitest</strong> pour garantir la stabilité de l'API et de l'interface utilisateur."
        ],
        en: [
          "An <strong>AI-assisted content generation SaaS</strong> integrating OpenAI models via dynamic prompt engineering.",
          "Full implementation of a <strong>monetization system</strong> using the Stripe API with a credit-based business model.",
          "Robust <strong>JWT-based authentication</strong> system securing exchanges between the Vue.js frontend and Node.js backend.",
          "Rich content editor allowing post-generation formatting and real-time database updates.",
          "Comprehensive test suite (Unit & Integration) with <strong>Vitest</strong> to ensure API and UI stability."
        ]
      },
      links: [
        { 
          label: { fr: "Code source (Application Vue)", en: "View source code (Vue app)" }, 
          url: "https://github.com/dtettarasar/otis-ai-frontend",
          icon: "material-symbols:code-blocks", 
        },
        { 
          label: { fr: "Code source (Backend Node.js)", en: "View source code (Node JS Backend)" }, 
          url: "https://github.com/dtettarasar/otis-ai-backend",
          icon: "material-symbols:code-blocks", 
        },
        {
          label: { fr: "Regarder la vidéo de démo", en: "Watch demo video" },
          url: "https://www.youtube.com/watch?v=4xhqBR_Kues",
          icon: "material-symbols:video-library",
        }
      ]
    },
    {
      title: { fr: "AI Art Shield – Protégez votre Art", en: "AI Art Shield – Protect Your Art" },
      img: "/img/portfolio/cs50.jpg",
      icon: "ic:round-terminal",
      stack: [
        "mdi:language-python",
      ],
      desc: {
        fr: [
          "Un <strong>outil de sécurité avancé basé sur Python</strong> conçu pour protéger les œuvres d'art visuelles contre l'entraînement non autorisé des I.A. et le scraping.",
          "Implémente des <strong>perturbations invisibles</strong> (Transformation en Cosinus Discrète - DCT) pour perturber la reconnaissance de style par les I.A. sans altérer la perception humaine.",
          "Comprend un <strong>système d'évaluation de la protection</strong> qui mesure et compare les niveaux d'altération entre les versions originales et sécurisées.",
          "Développé avec <strong>Pillow, OpenCV et NumPy</strong> pour un traitement d'image haute performance et une manipulation au niveau du pixel.",
          "Architecture prête pour le futur : conçue pour un refactoring modulaire et l'intégration de <strong>perturbations contradictoires</strong> (adversarial perturbations) et de <strong>signatures signées par Blockchain</strong>.",
          "Ce projet fait partie du cours <strong>CS50P de l'Université Harvard</strong>."
        ],
        en: [
          "A <strong>Advanced Python-based security tool</strong> designed to protect visual artworks from unauthorized AI training and scraping.",
          "Implements <strong>invisible perturbations</strong> (Discrete Cosine Transform - DCT) to disrupt AI style recognition without altering human perception.",
          "Features a <strong>Protection Evaluation System</strong> that measures and compares alteration levels between original and secured versions.",
          "Engineered with <strong>Pillow, OpenCV, and NumPy</strong> for high-performance image processing and pixel-level manipulation.",
          "Future-ready architecture: Designed for modular refactoring and integration of <strong>Adversarial Perturbations</strong> and <strong>Blockchain-signed signatures</strong>.",
          "The project is part of <strong>Harvard's CS50P course</strong>."
        ]
      },
      links: [
        { 
          label: { fr: "Voir le code source", en: "View source code" }, 
          url: "https://github.com/dtettarasar/CS50P-final-project",
          icon: "material-symbols:code-blocks", 
        },
        { 
          label: { fr: "Regarder la vidéo de démo", en: "Watch demo video" }, 
          url: "https://www.youtube.com/watch?v=fzHck-rlLZ0",
          icon: "material-symbols:video-library", 
        }
      ]
    },
    {
      title: { fr: "Tic Tac Toe I.A. – Maîtrise Algorithmique", en: "Tic Tac Toe AI – Algorithm Mastery" },
      img: "/img/portfolio/img-portfolio-cs50x-final.png",
      icon: "hugeicons:tic-tac-toe",
      stack: [
        "mdi:language-html5",
        "mdi:language-css3",
        "mdi:language-javascript",
      ],
      video: "https://youtu.be/O13g7CtV2bI",
      desc: {
        fr: [
          "Un <strong>jeu sur navigateur avancé</strong> doté d'une I.A. imbattable propulsée par l'<strong>algorithme Minimax</strong>.",
          "Conception de trois modes de jeu distincts : Humain vs Humain, I.A. Facile (logique aléatoire) et I.A. Impossible (prise de décision récursive).",
          "Implémentation d'un <strong>arbre de recherche récursif</strong> pour évaluer tous les mouvements possibles et garantir le résultat optimal pour l'I.A.",
          "Développement d'un <strong>suivi des scores et statistiques</strong> en temps réel gérant les états de session sur plusieurs manches.",
          "Accent mis sur une UI/UX soignée avec un design responsive et une iconographie SVG intégrée pour un rendu visuel 'Pixel Perfect'.",
          "Ce projet fait partie du cours <strong>CS50x de l'Université Harvard</strong>."
        ],
        en: [
          "An <strong>Advanced Browser-based Game</strong> featuring an unbeatable AI powered by the <strong>Minimax Algorithm</strong>.",
          "Engineered three distinct game modes: Human vs. Human, Easy AI (Randomized logic), and Impossible AI (Recursive decision-making).",
          "Implemented a <strong>recursive search tree</strong> to evaluate all possible moves and guarantee the optimal outcome for the AI.",
          "Developed a real-time <strong>Score & Statistics Tracker</strong> managing session states across multiple game rounds.",
          "Focus on clean UI/UX with responsive design and integrated SVG iconography for a 'Pixel Perfect' visual rendering.",
          "The project is part of <strong>Harvard's CS50x course</strong>."
        ]
      },
      links: [
        { 
          label: { fr: "Voir le code source", en: "View source code" }, 
          url: "https://github.com/dtettarasar/CS50-tic-tac-toe",
          icon: "material-symbols:code-blocks", 
        },
        { 
          label: { fr: "Regarder la vidéo de démo", en: "Watch demo video" }, 
          url: "https://youtu.be/O13g7CtV2bI",
          icon: "material-symbols:video-library", 
        }
      ]
    },
   {
      title: { fr: "Plateforme de Conférence d'Affaires", en: "Business Conference Platform" },
      img: "/img/portfolio/img-portfolio-cs50-homepage.png",
      icon: "material-symbols:event-available-rounded",
      stack: [
        "mdi:language-javascript",
        "mdi:language-html5",
        "mdi:language-css3",
        "mdi:bootstrap"
      ],
      desc: {
        fr: [
          "<strong>Plateforme événementielle responsive</strong> dotée d'un système d'inscription complexe et de composants UI interactifs développés en JavaScript Vanilla.",
          "Conception d'un <strong>moteur de validation de formulaire personnalisé</strong> à l'aide d'expressions régulières (Regex) pour gérer les messages d'erreur en temps réel et l'intégrité des données.",
          "Développement d'<strong>animations dynamiques basées sur le défilement</strong> (scroll), incluant des compteurs automatisés et des éléments de navigation intelligents (logique de retour en haut).",
          "Implémentation de <strong>patterns de manipulation du DOM</strong> pour la gestion d'état : basculement des états de succès et gestion de structures de données multi-saisies (boutons radio, cases à cocher, texte).",
          "Construit avec une approche mobile-first via <strong>Bootstrap</strong>, garantissant la compatibilité multi-navigateurs et une cohérence visuelle optimisée.",
          "Ce projet fait partie du cours <strong>CS50x de l'Université Harvard</strong>."
        ],
        en: [
          "<strong>Responsive event platform</strong> featuring a complex registration system and interactive UI components built with Vanilla JavaScript.",
          "Engineered a <strong>custom Form Validation Engine</strong> using Regular Expressions (Regex) to handle real-time error messaging and data integrity.",
          "Developed <strong>dynamic scroll-triggered animations</strong>, including automated counters and smart navigation elements (Go-to-top logic).",
          "Implemented <strong>DOM manipulation patterns</strong> for state management: toggling success states and handling multi-input data structures (radios, checkboxes, text).",
          "Built with a mobile-first approach using <strong>Bootstrap</strong>, ensuring cross-browser compatibility and optimized visual consistency.",
          "The project is part of <strong>Harvard's CS50x course</strong>."
        ]
      },
      links: [
        { 
          label: { fr: "Voir le code source", en: "View source code" }, 
          url: "https://github.com/dtettarasar/cs50x-homepage",
          icon: "material-symbols:code-blocks" 
        }
      ]
    },
    {
      title: { fr: "Interface de Documentation Technique", en: "Technical Documentation Interface" },
      img: "/img/portfolio/img-portfolio-doc-page.png",
      icon: "mdi:file-document",
      stack: [
        "mdi:language-html5",
        "mdi:language-css3",
        "mdi:language-javascript",
      ],
      desc: {
        fr: [
          "<strong>Portail de documentation haute lisibilité</strong> conçu pour la certification Responsive Web Design de freeCodeCamp.",
          "Respect strict des <strong>standards sémantiques HTML5</strong> et des rôles ARIA pour garantir une compatibilité totale avec les lecteurs d'écran.",
          "Conception d'une <strong>mise en page CSS dynamique</strong> avec navigation collante (sticky) et typographie fluide pour une expérience de lecture technique optimale.",
          "Implémentation certifiée 'Pixel Perfect', validant 100 % des tests automatisés d'accessibilité et de réactivité."
        ],
        en: [
          "<strong>High-readability documentation portal</strong> designed for the freeCodeCamp Responsive Web Design certification.",
          "Strict adherence to <strong>HTML5 Semantic standards</strong> and ARIA roles to ensure full compatibility with screen readers.",
          "Engineered a <strong>dynamic CSS layout</strong> with sticky navigation and fluid typography for an optimal technical reading experience.",
          "Certified 'Pixel Perfect' implementation, passing 100% of automated accessibility and responsiveness tests."
        ]
      },
      links: [
        { 
          label: { fr: "Voir le code sur CodePen", en: "View code on CodePen" }, 
          url: "https://codepen.io/dtettarasar/pen/rNNemwV",
          icon: "material-symbols:code-blocks" 
        }
      ]
    }
  ]

  // 2. On transforme le tableau pour extraire dynamiquement la bonne langue
  return projectsBase.map(project => {
    const lang = (locale === 'fr' || locale === 'en') ? locale : 'en'

    return {
      title: project.title[lang],
      img: project.img,
      icon: project.icon,
      stack: project.stack,
      video: project.video, // Sera undefined s'il n'existe pas (parfait pour JS)
      desc: project.desc[lang],
      links: project.links.map(link => ({
        url: link.url,
        icon: link.icon,
        label: link.label[lang]
      }))
    }
  })
}
