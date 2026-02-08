// server/data/site-content.ts

export function getIntroText(): string[] {
    return [
        'Hello world I am Dylan Tettarasar, a frontend developer with a passion for creating clean, efficient, and user-friendly interfaces.',

        `I started my career in digital communication and web project management, working across strategy, design, and execution. 
        'For several years, <strong>I led and built WordPress websites, worked on SEO optimization, and handled UX, content creation, and performance analysis</strong>.`,
        
        `<strong>This gave me a full, practical understanding of how a website is conceived, designed, developed, delivered, and maintained</strong> — from both a technical and business perspective. 
        It also shaped my autonomy, creativity, and ability to bridge the gap between technical teams and user needs.`,

        `But over time, <strong>I felt the need to go deeper</strong> — to move past CMS limitations and actually build things from the ground up. 
        That's when I shifted toward development and started learning JavaScript, Python, and modern tools.`,
       
        `Today, I focus primarily on <strong>frontend development with Vue.js, Nuxt, and Tailwind CSS</strong>. 
        I enjoy crafting clean interfaces, smooth user experiences, and well-structured components, while keeping a flexible full-stack edge thanks to Node, Django, and database fundamentals.`,
    ]
  }

  export function getLanguageContent() {

    return [

        {
            name: 'French',
            level: 'Native Language',
            img: '/img/language/france-croissant.png'
        },

        {
            name: 'English',
            level: 'Business Level',
            img: '/img/language/uk-afternoon-tea.png'
        },

    ]

  }
