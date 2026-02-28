# 📊 Product Requirements Document (PRD)
## Personal Site 25 - Professional Portfolio & CV Platform

**Version:** 1.0  
**Status:** Active Development  
**Last Updated:** 2026-02-28  
**Owner:** Dylan Tettarasar

---

## 1. Executive Summary

**Personal Site 25** is a full-stack web application designed to create a professional, customizable portfolio and CV platform. It serves as both a personal marketing tool and a reusable template for other professionals.

**Key Value Proposition:**
- Professional online presence with complete control
- Centralized content management (no third-party platform lock-in)
- SEO-optimized single-page application with server-side rendering
- Future admin dashboard for non-technical users

---

## 2. Product Vision

### Long-term Goal
Build a modern, scalable, self-hosted portfolio platform that allows professionals to:
- Showcase skills, experience, and portfolio projects
- Maintain a professional online presence
- Leverage data-driven insights about their audience
- Deploy independently with minimal DevOps knowledge

### Core Principles
1. **User-Centric:** Clean, modern UX with focus on content visibility
2. **Developer-First:** Open-source architecture, easy to customize
3. **Performance-First:** Fast load times, optimized for Core Web Vitals
4. **Self-Hosted:** Full data ownership, no SaaS dependency
5. **Extensible:** Modular architecture for future feature additions

---

## 3. Target Users

### Primary User
- **Persona:** Professional (Developer, Designer, Manager, Entrepreneur)
- **Age:** 25-45
- **Tech Savvy:** Intermediate to Advanced
- **Need:** Professional online presence to showcase work and attract opportunities
- **Pain Points:**
  - Generic portfolio templates lack personality
  - Third-party platforms limit customization
  - Managing content across multiple platforms is time-consuming

### Secondary Users
- **HR Recruiters:** Viewing portfolios, assessing candidates
- **Potential Clients:** Evaluating expertise and past work quality
- **Network Contacts:** Learning about career updates

### Admin User (Future)
- Site content manager (may not be technical)
- Needs intuitive UI to manage profile, experience, portfolio

---

## 4. Product Scope

### 4.1 In Scope (MVP)

#### Pages & Sections
| Page | Purpose | Status |
|------|---------|--------|
| **Home / Hero** | First impression, call-to-action | ✅ Active |
| **About / Intro** | Professional background narrative | ✅ Active |
| **Experience** | Work history, skills, missions | ✅ Active |
| **Portfolio** | Project showcase with descriptions | ✅ Active |
| **Resume / CV** | Skills, languages, certifications | ✅ Active |
| **Contact** | Contact form with automated reply | 🔄 In Development |
| **Admin Dashboard** (Future) | Content management interface | 📋 Planned |

#### Core Features
1. **Profile Management**
   - Personal intro (bio, professional summary)
   - Professional experience (company, role, missions)
   - Portfolio projects (title, description, links, images)
   - Skills and languages
   - Contact information

2. **Content Display**
   - Dynamic rendering from MongoDB
   - SEO-optimized metadata per page
   - Responsive design (mobile, tablet, desktop)
   - Smooth animations and transitions

3. **Technical Infrastructure**
   - Server-side rendering (SSR) for SEO
   - RESTful API endpoints for data retrieval
   - Environment-based configuration (dev, staging, prod)
   - Docker containerization for easy deployment

4. **Performance & Accessibility**
   - Core Web Vitals optimization (LCP, FID, CLS)
   - Mobile-first responsive design
   - Semantic HTML and ARIA labels
   - Page speed < 2s on 4G

### 4.2 Out of Scope (Future Phases)

- User authentication & authorization (multi-user support)
- Admin dashboard GUI (currently requires code edit)
- Analytics and visitor tracking
- Blog / article publishing with comments
- E-commerce / digital product sales
- Social media integration
- Email subscription system
- A/B testing framework

---

## 5. Feature Requirements

### 5.1 Feature 1: Dynamic Profile Display

**User Story:**
> As a visitor, I want to see Dylan's professional background, so I can understand their expertise and experience.

**Acceptance Criteria:**
- [ ] Intro section displays formatted text from database
- [ ] Text supports HTML formatting (bold, links, emphasis)
- [ ] Images load from public CDN efficiently
- [ ] Mobile responsive (stacks vertically under 768px)
- [ ] Loads in < 1s on 4G connection

**Data Model:**
```
Profile {
  id: ObjectId
  introText: String[] // Array of paragraphs
  languages: Language[]
  contact: ContactInfo
}

Language {
  name: String
  level: String
  imageUrl: String
}
```

---

### 5.2 Feature 2: Experience Timeline

**User Story:**
> As a recruiter, I want to view Dylan's complete work history with detailed achievements, so I can assess fit for opportunities.

**Acceptance Criteria:**
- [ ] Experience displayed in reverse chronological order
- [ ] Each role shows: company, title, period, missions
- [ ] Company logos load from image server
- [ ] missions formatted as bullet points with HTML support
- [ ] Filter by company or time period (future)
- [ ] Print-friendly layout for resume

**Data Model:**
```
Experience {
  id: ObjectId
  companyName: String
  companyVenue: String
  jobTitle: String
  period: String
  companyLogoSrc: String
  jobMissions: String[] // HTML-formatted strings
  startDate: Date
  endDate: Date
}
```

---

### 5.3 Feature 3: Portfolio Showcase

**User Story:**
> As a potential client, I want to see examples of Dylan's work with descriptions and links, so I can evaluate their capabilities.

**Acceptance Criteria:**
- [ ] Projects displayed in grid layout (responsive, 1-3 columns)
- [ ] Each project shows: title, thumbnail, category, short description
- [ ] Click expands to full project details modal
- [ ] Project details include: full description, tech stack, links (demo, GitHub, case study)
- [ ] Projects filterable by category (Web, Design, etc.)
- [ ] Images optimized for web (lazy loading, webp format)

**Data Model:**
```
Project {
  id: ObjectId
  title: String
  category: String // Web, Design, Architecture, etc.
  thumbnail: String // Image URL
  description: String
  fullDescription: String // Markdown or HTML
  techStack: String[] // ["Vue", "Nuxt", "Tailwind"]
  links: {
    demo?: String
    github?: String
    caseStudy?: String
  }
  featured: Boolean
  createdAt: Date
}
```

---

### 5.4 Feature 4: Contact Form

**User Story:**
> As a potential collaborator, I want to send Dylan a message, so I can initiate a conversation about opportunities.

**Acceptance Criteria:**
- [ ] Form fields: name, email, subject, message
- [ ] Client-side validation (required fields, email format)
- [ ] Server-side validation and sanitization
- [ ] Anti-spam measures (rate limiting, CAPTCHA optional)
- [ ] Confirmation email sent to visitor
- [ ] Admin receives notification email
- [ ] Messages are persisted in database
- [ ] Error handling with user-friendly messages

**Data Model:**
```
ContactMessage {
  id: ObjectId
  name: String
  email: String
  subject: String
  message: String
  status: Enum ["new", "read", "responded"]
  createdAt: Date
  respondedAt?: Date
}
```

---

## 6. User Flows

### Flow 1: First-Time Visitor Journey
```
Landing (Hero) → Read Intro → Browse Experience → Check Portfolio → Contact Form → Leave
```

**Key Metrics:**
- Bounce rate (time on site > 30s is good)
- Click-through to portfolio
- Contact form submissions

### Flow 2: Recruiter Research
```
Landing → Experience Section → Download CV → Save/Share → Research on LinkedIn
```

**Key Metrics:**
- Experience section engagement time
- CV download count
- Time spent on page

### Flow 3: Potential Client Evaluation
```
Landing → Portfolio → Project Details → Contact Form → Schedule Consultation
```

**Key Metrics:**
- Portfolio overview duration
- Deep-dive into project details
- Contact form completion rate

---

## 7. Success Metrics & KPIs

### Technical Metrics
| Metric | Target | Current |
|--------|--------|---------|
| Page Load Time (4G) | < 2s | TBD |
| Core Web Vitals Score | > 90 | TBD |
| Mobile Usability | 100% | TBD |
| SEO Score | > 85 | TBD |
| Uptime | 99.5% | TBD |

### Business Metrics
| Metric | Target | Current |
|--------|--------|---------|
| Monthly Visitors | > 500 | TBD |
| Avg. Session Duration | > 2 min | TBD |
| Contact Form Completion | > 5% | TBD |
| Portfolio CTR | > 30% | TBD |
| Returning Visitors | > 20% | TBD |

---

## 8. Non-Functional Requirements

### Performance
- **Target Load Time:** < 2 seconds on 4G
- **Lighthouse Score:** 90+ on all metrics
- **Core Web Vitals:**
  - LCP (Largest Contentful Paint): < 2.5s
  - FID (First Input Delay): < 100ms
  - CLS (Cumulative Layout Shift): < 0.1

### Accessibility (WCAG 2.1 AA)
- [ ] Keyboard navigation support
- [ ] ARIA labels for screen readers
- [ ] Color contrast ratios (4.5:1 minimum)
- [ ] Alt text for all images
- [ ] Focus indicators visible

### Security
- [ ] HTTPS/TLS encryption (enforced by Caddy)
- [ ] Input validation and sanitization (XSS prevention)
- [ ] CORS policy configuration
- [ ] Environment variable protection (no hardcoded secrets)
- [ ] Regular dependency updates (security patches)

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Android)

### Internationalization (i18n)
- Currently: English + French interface ready
- Expand to additional languages as needed

---

## 9. Constraints & Assumptions

### Technical Constraints
- **Hosting:** Self-hosted Docker containers (currently local/dedicated server)
- **Database:** MongoDB (NoSQL for flexibility)
- **Language:** JavaScript/TypeScript for full-stack consistency
- **CDN:** Optional for image/static asset delivery

### Assumptions
- Users have modern browsers (ES2020+ support)
- Server connection available for real-time data fetching
- Database will remain < 1GB for foreseeable future (no sharding needed)
- Traffic < 10,000 concurrent users (scale horizontally if needed)

---

## 10. Acceptance & Sign-Off

| Role | Name | Date | Status |
|------|------|------|--------|
| Product Owner | Dylan Tettarasar | 2026-02-28 | ✅ Approved |
| Tech Lead | Dylan Tettarasar | 2026-02-28 | ✅ Approved |
| Stakeholders | - | - | ⏳ Pending |

---

## 11. Change Log

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | 2026-02-28 | Initial PRD creation based on current codebase | Dylan Tettarasar |

---

## 12. Appendix

### A. Glossary
- **SSR:** Server-Side Rendering
- **SPA:** Single Page Application
- **Core Web Vitals:** Google's metrics for page experience
- **Lighthouse:** Google's automated tool for measuring web quality

### B. Related Documents
- [ARCHITECTURE.md](ARCHITECTURE.md) - Technical design
- [BACKLOG.md](BACKLOG.md) - Development roadmap
- [Main README](../../README.md) - Setup instructions

### C. Reference Links
- [Nuxt Documentation](https://nuxt.com)
- [Vue 3 Guide](https://vuejs.org)
- [MongoDB Docs](https://docs.mongodb.com)
- [Tailwind CSS](https://tailwindcss.com)
