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
      fr: "Chef de Projet Digital & Product Owner Technique",
      en: "Digital Project Manager & Technical Product Owner"
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
        `Bonjour, je suis Dylan Tettarasar, Chef de Projet Digital & Product Owner Technique avec 7 ans d'expérience dans les environnements web, 
        faisant le lien entre les besoins business et l'exécution technique.`,

        `J'ai commencé ma carrière dans le développement web et la gestion de projets digitaux, en intervenant sur le design, l'intégration et le déploiement. 
        Pendant plusieurs années, <strong>j'ai managé et maintenu des plateformes WordPress pour des clients Grands Comptes (Uber, KPMG, Politico), coordonné des équipes de développement, 
        rédigé des spécifications techniques et supervisé le cycle de vie complet des projets, de la conception à la mise en production</strong>.`,
        
        `<strong>Cela m'a apporté une compréhension globale de la manière dont les applications web modernes sont construites, déployées et scalées</strong> — tant du point de vue de l'architecture technique que de l'impact produit et business. 
        J'ai développé une solide expertise en gestion de projets digitaux, plateformes CRM (Salesforce), optimisation des performances, ainsi qu'une capacité à collaborer efficacement avec des équipes pluridisciplinaires grâce à ma double vision technique et business.`,

        `Au fil du temps, <strong>j'ai approfondi mes compétences techniques sur les frameworks modernes et les architectures full-stack</strong>. 
        J'ai maîtrisé Vue.js, Nuxt.js, Node.js ainsi que les workflows DevOps modernes (Docker, Git, CI/CD), et j'ai construit plusieurs applications prêtes pour la production. <strong>Cette expérience concrète du développement fait de moi un gestionnaire de projet plus efficace</strong> : je parle le même langage que les développeurs et je peux évaluer les solutions techniques avec assurance.`,
       
        `Aujourd'hui, je me positionne comme un <strong>Product Owner Technique avec une forte expertise web concrète</strong>. 
        J'associe des compétences en gestion de projet (gestion du backlog, spécifications, coordination des parties prenantes) à une réelle compréhension des contraintes techniques et de la stratégie produit digitale. 
        Cette combinaison me permet de <strong>livrer des projets qui sont non seulement bien exécutés, mais aussi stratégiquement alignés sur les objectifs business</strong>.`,
      ]
    }

    // Par défaut / Version EN
    return [
        `Hello, I'm Dylan Tettarasar, a Digital Project Manager & Technical Product Owner with 7 years of experience in web environments, bridging the gap between business needs and technical execution.`,

        `I started my career in web development and digital project management, working across design, integration, and deployment. 
        For several years, <strong>I managed and maintained WordPress platforms for enterprise clients (Uber, KPMG, Politico), 
        coordinated development teams, wrote technical specifications, and oversaw the complete project lifecycle from conception to production</strong>.`,
        
        `<strong>This gave me a comprehensive understanding of how modern web applications are built, deployed, and scaled</strong> — 
        both from a technical architecture perspective and a product/business impact angle. I developed strong expertise in 
        digital project management, CRM platforms (Salesforce), performance optimization, and the ability to collaborate 
        effectively with cross-functional teams as I understand both the technical and business sides.`,

        `Over time, <strong>I deepened my technical skills on modern frameworks and full-stack architectures</strong>. 
        I mastered Vue.js, Nuxt.js, Node.js, and modern DevOps workflows (Docker, Git, CI/CD), 
        and built several production-ready applications. <strong>This hands-on development experience makes me a more effective 
        project manager</strong> — I speak the same language as developers and can evaluate technical solutions with confidence.`,
       
        `Today, I position myself as a <strong>Technical Product Owner with strong hands-on web expertise</strong>. I combine 
        project management skills (backlog management, specs, stakeholder coordination) with a genuine understanding of 
        technical constraints and digital product strategy. This combination allows me to <strong>deliver projects that are 
        not only well-executed but also strategically aligned with business goals</strong>.`,
    ]
}

  export function getResumeIntroText(locale: string): string[] {

    if (locale === 'fr') {
      return [
        `Product Owner technico-fonctionnel avec 7 ans d'expérience, j'évolue à la croisée de la gestion de projet web, des plateformes CRM et du développement technique. J'ai notamment piloté des écosystèmes CMS (WordPress Multisite) pour des clients d'envergure (Uber, KPMG, Politico), managé des projets Salesforce de bout en bout et coordonné des équipes de delivery de la spécification à la mise en production.`,
        `Expert dans la traduction de besoins business en spécifications fonctionnelles (PRD, User Stories) et l'animation de backlogs (Jira), j'allie cette expérience terrain à un solide bagage technique renforcé par des cursus intensifs (Harvard CS50, freeCodeCamp). Cette double compétence me permet de garantir un dialogue d'égal à égal avec les développeurs et d'assurer une synchronisation parfaite avec les parties prenantes.`
      ]
    }

    // Par défaut / EN
    return [
      `As a technico-functional Product Owner with 7 years of experience, I operate at the crossroads of web project management, CRM platforms, and technical development. My track record includes piloting CMS ecosystems (WordPress Multisite) for enterprise clients (Uber, KPMG, Politico), managing Salesforce projects end-to-end, and leading delivery teams from initial specifications to production.`,
      `Expert in translating business needs into functional requirements (PRDs, User Stories) and managing backlogs (Jira), I combine hands-on product management with a strong technical background reinforced by intensive programs (Harvard CS50, freeCodeCamp). This dual expertise allows me to speak the same language as developers and bridge the gap with business stakeholders with confidence.`
    ]

}

export function getResumePrintProfileText(locale: string): string {
  if (locale === 'fr') {
    return 'Product Owner technico-fonctionnel avec 7 ans d\'experience, je relie vision produit, execution web et coordination delivery pour transformer des enjeux business en resultats concrets.'
  }

  return 'Technico-functional Product Owner with 7 years of experience, bridging product vision, web delivery, and cross-team execution to turn business goals into concrete outcomes.'
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
        companyName: "R&D Lab / Side Projects",
        companyVenue: "Rambouillet, France",
        companyLogoSrc: "/img/resume/experiences/research-and-development.png",
        displayOnPrint: true,
        translations: {
          fr: {
            jobTitle: "Product Owner & Concepteur Solo",
            period: "2024 - Présent",
            jobMissions: [
              "<strong>2025 : Cursus Harvard CS50P (Python) & Protection Créative :</strong> Approfondissement de la programmation orientée objet. Conception d’<em>AI Art Shield</em> (Projet final Harvard) : un MVP algorithmique en ligne de commande (CLI) dédié à la protection des œuvres des illustrateurs (Cadrage, PRD, logique POO).",
              "<strong>2025 : Architecture & DevOps (Site Portfolio) :</strong> Déploiement et maintenance en production du site portfolio (dylan-tettarasar.dev) développé sous <strong>Nuxt.js</strong>. Conteneurisation complète via <strong>Docker</strong> et configuration d'un reverse-proxy <strong>Caddy</strong> sur serveur VPS (gestion automatisée du HTTPS/DNS).",
              "<strong>Fin 2024 : Conception du SaaS <em>Otis AI</em> :</strong> Pilotage produit complet d'une application de génération de contenu IA. Cadrage des spécifications et déploiement d'une <strong>architecture découplée</strong> (Frontend Vue.js / Backend Node.js-Express) avec intégration des API OpenAI et Stripe. Mise en place de tests avec l’outil Vitest."
            ],
            jobMissionsShort: [
              "Conception de <strong>AI Art Shield</strong> (projet final Harvard CS50P) avec <strong>cadrage produit</strong>, PRD et logique orientee objet.",
              "Mise en production du portfolio <strong>Nuxt.js</strong> avec Docker, Caddy, gestion <strong>HTTPS/DNS</strong> et exploitation VPS en autonomie.",
              "Pilotage de la conception du SaaS <strong>Otis AI</strong> avec architecture decouplee Vue.js / Node.js, integrations <strong>OpenAI + Stripe</strong> et tests Vitest."
            ]
          },
          en: {
            jobTitle: "Product Owner & Solo Developer",
            period: "2024 - Present",
            jobMissions: [
              "<strong>2025: Harvard CS50P (Python) & Creative Protection:</strong> Deep dive into Object-Oriented Programming. Conceived <em>AI Art Shield</em> (Harvard Final Project): an algorithmic Command Line Interface (CLI) MVP dedicated to protecting artists' artwork (Scoping, PRD, OOP logic).",
              "<strong>2025: Architecture & DevOps (Portfolio Site):</strong> Deployment and production maintenance of the portfolio website (dylan-tettarasar.dev) built with <strong>Nuxt.js</strong>. Full containerization via <strong>Docker</strong> and setup of a <strong>Caddy</strong> reverse-proxy on a VPS server (automated HTTPS/DNS management).",
              "<strong>Late 2024: SaaS Conception - <em>Otis AI</em>:</strong> Full product management of an AI content generation application. Scoped functional specifications and deployed a <strong>decoupled architecture</strong> (Vue.js Frontend / Node.js-Express Backend) integrated with OpenAI and Stripe APIs. Implemented testing with Vitest."
            ],
            jobMissionsShort: [
              "Built <strong>AI Art Shield</strong> (Harvard CS50P final project) with <strong>product scoping</strong>, PRD framing, and OOP architecture.",
              "Deployed and operated the <strong>Nuxt.js</strong> portfolio in production with Docker, Caddy, <strong>HTTPS/DNS</strong> setup, and VPS infrastructure.",
              "Led <strong>Otis AI</strong> product conception with a decoupled Vue.js / Node.js architecture, <strong>OpenAI + Stripe</strong> integrations, and Vitest testing."
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
              "<strong>Gestion & Évolution du Parc CMS :</strong> Pilotage global de l’architecture <strong>WordPress Multisite</strong> pour l'ensemble des conférences de l'agence (marques propres et Grands Comptes : <em>Uber, KPMG, Le Figaro, Politico...</em>). Gestion des déploiements et des configurations <strong>DNS/HTTPS</strong> avec les prestataires.",
              "<strong>Intégration Frontend & Support Interne :</strong> Intégration complète des contenus événementiels (programmes, intervenants, modules de vidéos et livestreams) et adaptation responsive des interfaces (<strong>HTML5/CSS3/JS</strong>). Support technique auprès des équipes marketing pour des événements <strong>Grands Comptes</strong>, avec la gestion de pics dépassant <strong>1 000 visites uniques</strong> par jour.",
              "<strong>Migration & Administration Salesforce :</strong> Acteur clé de la transition critique en 3 mois d’un CRM legacy vers <strong>Salesforce</strong>. Administration quotidienne de la plateforme (gouvernance, droits d'accès, profils, <strong>Permission Sets</strong>, mapping d'objets et gestion des champs).",
              "<strong>Product Ownership & Delivery Technique :</strong> Conception fonctionnelle et pilotage du cycle de vie de <strong>features complexes</strong> (parcours de membership, formulaires dynamiques via iframes connectées à Salesforce). Rédaction des cahiers des charges et des User Stories (<strong>Jira</strong>), modélisation des flux de données et tests de recette (<strong>UAT</strong>).",
              "<strong>Build & Code CRM :</strong> Optimisation frontend (HTML/CSS) directement sur des composants <strong>LWC</strong> (Lightning Web Components) et gestion des déploiements via pull-requests sur <strong>GitHub</strong>."
            ],
            jobMissionsShort: [
              "Pilotage de l'écosystème <strong>WordPress Multisite</strong> et des opérations <strong>DNS/HTTPS</strong> pour des conférences grands comptes.",
              "Supervision de <strong>l'intégration des contenus événementiels</strong> (agendas, speakers, livestreams) et <strong>support technique</strong> des équipes marketing sur des <strong>pics > 1 000 visites/jour</strong>.",
              "Transition CRM vers <strong>Salesforce en 3 mois</strong>, puis administration quotidienne (gouvernance, droits, Permission Sets, mapping objets).",
              "Conception et delivery de <strong>features métier complexes</strong> (membership, formulaires dynamiques connectés Salesforce) avec User Stories Jira et UAT.",
              "Optimisation frontend sur composants <strong>LWC</strong> et coordination des déploiements via <strong>pull requests GitHub</strong>."
            ]
          },
          en: {
            jobTitle: "Web & CRM Product Owner",
            period: "January 2018 - December 2024",
            jobMissions: [
              "<strong>CMS Fleet Management & Evolution:</strong> Global management of the <strong>WordPress Multisite</strong> architecture for all agency conferences (own brands and key accounts: <em>Uber, KPMG, Le Figaro, Politico...</em>). Handled custom domain deployments and <strong>DNS/HTTPS</strong> configurations.",
              "<strong>Frontend Integration & Internal Support:</strong> Full integration of event content (agendas, speakers, video modules, and livestreams) and responsive adaptation of interfaces (<strong>HTML5/CSS3/JS</strong>). Provided technical troubleshooting for marketing teams for <strong>key account</strong> events, managing traffic peaks exceeding <strong>1,000 unique visits</strong> per day.",
              "<strong>Salesforce CRM Migration & Administration:</strong> Key player in the critical 3-month transition from a legacy CRM to <strong>Salesforce</strong>. Managed daily platform administration (governance, access rights, profiles, <strong>Permission Sets</strong>, object mapping, and field management).",
              "<strong>Product Ownership & Technical Delivery:</strong> Functional design and lifecycle management of <strong>complex features</strong> (membership paths, dynamic iframe forms connected to Salesforce). Wrote technical specifications and User Stories (<strong>Jira</strong>), modeled data flows, and executed User Acceptance Testing (<strong>UAT</strong>).",
              "<strong>CRM Build & Code:</strong> Optimized frontend layouts (HTML/CSS) directly within <strong>LWC</strong> (Lightning Web Components) and managed delivery via GitHub <strong>pull-requests</strong>."
            ],
            jobMissionsShort: [
              "Led <strong>WordPress Multisite</strong> operations and <strong>DNS/HTTPS</strong> setup for high-visibility conference websites.",
              "Oversaw <strong>event content integration</strong> (agendas, speakers, livestream modules) and <strong>technical support</strong> for marketing teams during <strong>peaks above 1,000 daily visits</strong>.",
              "Drove a <strong>3-month Salesforce migration</strong> and daily administration (governance, access rights, Permission Sets, object mapping).",
              "Designed and delivered <strong>complex product features</strong> (membership journeys, dynamic Salesforce-connected forms) with Jira workflows and UAT.",
              "Improved frontend layouts in <strong>LWC</strong> and coordinated deliveries through <strong>GitHub pull requests</strong>."
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
              "<strong>Interface technique</strong> avec le siege allemand pour le suivi des bugs et la priorisation des evolutions web.",
              "Administration <strong>eZ Publish</strong>, optimisation <strong>SEO</strong> et integration de pages marketing responsive."
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
          { icon: "bi:kanban-fill", label: "Agile / Kanban", displayOnPrint: true },
          { 
            icon: "mdi:file-document-edit", 
            label: { fr: "Spécifications fonctionnelles", en: "Functional Specs" },
            displayOnPrint: false
          },
          { 
            icon: "mdi:account-group", 
            label: { fr: "Gestion des parties prenantes", en: "Stakeholder Management" },
            displayOnPrint: false
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
          { icon: "mdi:tailwind", label: "Tailwind CSS", displayOnPrint: true },
          { icon: "mdi:bootstrap", label: "Bootstrap", displayOnPrint: true },
          { icon: "mdi:vuejs", label: "Vue.js", displayOnPrint: true },
          { icon: "lineicons:nuxt", label: "Nuxt.js", displayOnPrint: true }
        ]
      },
      {
        title: { fr: "Outils & Workflow", en: "Tools & Workflow" },
        icon: "carbon:tools-alt",
        displayOnPrint: true,
        items: [
          { icon: "mdi:git", label: "Git", displayOnPrint: true },
          { icon: "mdi:docker", label: "Docker", displayOnPrint: true },
          { icon: "simple-icons:caddy", label: "Caddy", displayOnPrint: true },
          { icon: "mdi:github", label: "GitHub", displayOnPrint: false },
          { icon: "ri:copilot-fill", label: "GitHub Copilot", displayOnPrint: true },
          { icon: "ri:claude-fill", label: "Claude Code", displayOnPrint: false },
          { icon: "devicon-plain:vitest", label: "Vitest", displayOnPrint: true }
        ]
      },
      {
        title: { fr: "Backend & Bases de données", en: "Backend & Databases" },
        icon: "mdi:server-network",
        displayOnPrint: true,
        items: [
          { icon: "mdi:nodejs", label: "Node.js / Express", displayOnPrint: true },
          { icon: "lineicons:mongodb", label: "MongoDB", displayOnPrint: true },
          { icon: "mdi:language-python", label: "Python", displayOnPrint: true },
          { icon: "mdi:database", label: "SQL", displayOnPrint: false }
        ]
      },
      {
        title: { fr: "Outils Créatifs", en: "Creative Tools" },
        icon: "ion:color-palette",
        displayOnPrint: false,
        items: [
          { icon: "file-icons:gimp", label: "GIMP", displayOnPrint: false },
          { icon: "simple-icons:krita", label: "Krita", displayOnPrint: false },
          { icon: "solar:figma-bold", label: "Figma", displayOnPrint: false }
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
            title: "Introduction à la Programmation avec Python",
            issuer: "Université Harvard"
          },
          en: {
            title: "Introduction to Programming with Python",
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
