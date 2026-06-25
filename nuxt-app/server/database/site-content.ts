// server/database/site-content.ts

export function getGlobalConfig() {
  return {
    ownerName: "Dylan Tettarasar"
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
      fr: "Chef de Projet Web · Product Owner",
      en: "Web Project Manager · Product Owner"
    },
    specialty: {
      fr: "Spécialiste Vue.js / Nuxt.js",
      en: "Vue.js / Nuxt.js Specialist"
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
        `Bonjour, je suis Dylan Tettarasar, un Chef de Projet Digital...`,
        `J'ai managé et maintenu des plateformes WordPress pour des clients d'envergure (Uber, KPMG, Politico)...`
      ]

    }

    // Par défaut / EN

    return [
        `Hello, I'm Dylan Tettarasar, a Digital Project Manager...`,
        `I managed and maintained WordPress platforms for enterprise clients (Uber, KPMG, Politico)...`
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

  export function getExperiences(locale: string): { companyName: string; companyVenue: string; jobTitle: string; period: string; companyLogoSrc: string; jobMissions: string[] }[] {

    // 1. On définit la structure technique et les clés de traduction
    const experiencesBase = [

        {

          companyName: "DII / POLITICO",
          companyVenue: "Paris, France",
          jobTitle: "Project Manager Web & CRM",
          period: "Jan 2018 - Dec 2024",
          companyLogoSrc: "/img/resume/experiences/company-logo-dii.png",
          translations: {
            fr: {
              jobTitle: "Chef de Projet Web & CRM",
              jobMissions: [
                "<strong>Développement Frontend & Intégration :</strong> Développé et maintenu plus de 15 sites WordPress pour des clients d'entreprise (Uber, KPMG, Politico). Responsable de l'intégration HTML5/CSS3/JavaScript responsive à partir de maquettes Figma et de l'optimisation des performances (Core Web Vitals).",
                "<strong>Développement de Composants Salesforce :</strong> Modifié et maintenu des composants Lightning Web (Salesforce) : ajustements HTML/CSS/JavaScript, corrections d'interface utilisateur et mises à jour logiques. Gestion du cycle complet de développement : branchement Git, tests et déploiements (staging/production).",
                "<strong>Gestion Technique de Projet :</strong> Collaboré avec les équipes de développement pour relier les besoins métier à l'exécution technique. Rédaction de spécifications techniques, gestion des flux Jira et direction des tests d'assurance qualité (QA).",
                "<strong>Performance & Accessibilité :</strong> Optimisé les performances web (Core Web Vitals) et mis en œuvre des normes d'accessibilité (WCAG) sur tous les projets.",
                "<strong>Infrastructure & DevOps :</strong> Géré les cycles de vie des domaines et les configurations DNS via Gandi.net, et coordonné avec les fournisseurs d'hébergement pour le déploiement et la maintenance des sites clients."
              ]
            },
            en: {
              jobTitle: "Project Manager Web & CRM",
              jobMissions: [
                "<strong>Frontend Development & Integration:</strong> Developed and maintained 15+ WordPress sites for enterprise clients (Uber, KPMG, Politico). Responsible for responsive HTML5/CSS3/JavaScript integration from Figma mockups and performance optimization (Core Web Vitals).",
                "<strong>Salesforce Component Development:</strong> Modified and maintained Lightning Web Components (Salesforce): HTML/CSS/JavaScript adjustments, UI fixes, and logic updates. Managed the full development lifecycle: Git branching, testing, and deployments (staging/production).",
                "<strong>Technical Project Management:</strong> Collaborated with development teams to bridge business needs and technical execution. Wrote technical specifications, managed Jira workflows, and led Quality Assurance (QA) testing.",
                "<strong>Performance & Accessibility:</strong> Optimized web performance (Core Web Vitals) and implemented accessibility standards (WCAG) across all projects.",
                "<strong>Infrastructure & DevOps:</strong> Managed domain lifecycles and DNS configurations via Gandi.net, and coordinated with hosting providers for deployment and maintenance of client websites."
              ]
            }
          }
        },

    ]

    // 2. On transforme le tableau pour renvoyer exactement le format attendu
    return experiencesBase.map(exp => {

      // On récupère la traduction correspondante, ou on se rabat sur l'anglais au cas où
      const text = exp.translations[locale as 'fr' | 'en'] || exp.translations['en']
      
      return {
        companyName: exp.companyName,
        companyVenue: exp.companyVenue,
        jobTitle: text.jobTitle,
        period: exp.period,
        companyLogoSrc: exp.companyLogoSrc,
        jobMissions: text.jobMissions
      }
      
    })

  }


  export function getSkills(locale: string): { title: string; icon: string; items: { icon: string; label: string }[] }[] {
  
    const skillsBase = [
      {
        // Pour les titres de catégories, comme ils changent toujours, un petit objet direct { fr, en } est super propre
        title: { fr: "Frontend – Stack Principale", en: "Frontend – Main Stack" },
        icon: "mdi:star-four-points",
        items: [
          { icon: "mdi:vuejs", label: "Vue.js" }, // Chaîne simple = identique pour tout le monde
          { icon: "lineicons:nuxt", label: "Nuxt.js" },
          { icon: "mdi:tailwind", label: "Tailwind CSS" }
        ]
      },
      {
        title: { fr: "Gestion de Projet & Produit", en: "Project & Product Management" },
        icon: "ion:color-palette",
        items: [
          // Objet de traduction = s'adapte selon la locale !
          { 
            icon: "mdi:account-group", 
            label: { 
              fr: "Gestion des parties prenantes", 
              en: "Stakeholder Management" 
            } 
          },
          { icon: "mdi:microsoft-azure-devops", label: "Azure DevOps" }, // Outil fixe
          { icon: "mdi:jira", label: "Jira / Confluence" } // Outil fixe
        ]
      }
    ]

    // 2. On transforme le tableau avec le double niveau de map
    return skillsBase.map(category => {
      return {
        // On récupère le titre de la catégorie traduit
        title: category.title[locale as 'fr' | 'en'] || category.title['en'],
        icon: category.icon,
        
        // On passe au crible chaque compétence de la catégorie
        items: category.items.map(item => {
          
          // LE TWIST MAGIQUE : On vérifie le type du label
          const resolvedLabel = typeof item.label === 'string'
            ? item.label // Si c'est du texte brut, on le renvoie tel quel
            : (item.label[locale as 'fr' | 'en'] || item.label['en']) // Si c'est un objet, on cherche la langue

          return {
            icon: item.icon,
            label: resolvedLabel
          }
        })
      }
    })
}

   export function getEducations(locale: string): { educationLogoSrc: string; title: string; issuer: string; year: string; certificationLink?: string }[] {

    // 1. On définit la structure technique et les clés de traduction
    const educationsBase = [
      {
        educationLogoSrc: "/img/resume/educations/harvard-university-logo-0.png",
        year: "2025",
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

    ]

    // 2. On transforme le tableau pour renvoyer exactement le format attendu
    return educationsBase.map(edu => {

      // On récupère la traduction correspondante, ou on se rabat sur l'anglais au cas où
      const text = edu.translations[locale as 'fr' | 'en'] || edu.translations['en']
      
      return {
        educationLogoSrc: edu.educationLogoSrc,
        title: text.title,
        issuer: text.issuer,
        year: edu.year,
        certificationLink: edu.certificationLink
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
