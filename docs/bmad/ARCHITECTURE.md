# 🏗️ Architecture Document
## Personal Site 25 - System Design & Technical Structure

**Version:** 1.0  
**Status:** Active Development  
**Last Updated:** 2026-02-28  
**Owner:** Dylan Tettarasar

---

## 1. Architecture Overview

### 1.1 High-Level Diagram

```
┌───────────────────────────────────────────────────────────────┐
│                         Internet Users                         │
└──────────────────────────────────┬──────────────────────────────┘
                                   │
                    ┌──────────────┴──────────────┐
                    │                             │
            ┌───────▼────────┐         ┌─────────▼──────┐
            │   CADDY        │         │   CADDY        │
            │ (Reverse Proxy)│         │   (SSL/TLS)    │
            └───────┬────────┘         └─────────┬──────┘
                    │                             │
                    └──────────────┬──────────────┘
                                   │
                    ┌──────────────▼──────────────┐
                    │      NUXT 3 SERVER         │
                    │  (Full-Stack Framework)    │
        ┌───────────┼─────────────────────────────┼───────────┐
        │           │                             │           │
    ┌───▼────┐ ┌───▼────┐              ┌────────▼──┐    ┌───▼──┐
    │ Pages  │ │ API    │              │   Store   │    │ SSR  │
    │ (Vue)  │ │Routes  │              │  (Pinia)  │    │Engine│
    │        │ │/server │              │           │    │      │
    └────────┘ └───┬────┘              └───────────┘    └──────┘
                   │
        ┌──────────▼───────────┐
        │    MONGODB DRIVER    │
        │    (Mongoose ODM)    │
        └──────────┬───────────┘
                   │
        ┌──────────▼───────────┐
        │     MONGODB 8.0      │
        │    (Data Storage)    │
        └──────────────────────┘
```

### 1.2 Architecture Pattern
- **Pattern:** Full-Stack Monolith (Backend + Frontend unified)
- **Rendering:** Server-Side Rendering (SSR) + Client-Side Hydration
- **Data Fetching:** Universal fetch (server + client capable)
- **State Management:** Pinia stores with auto-persist

---

## 2. Technology Stack Justification

### Frontend Layer
| Technology | Version | Rationale |
|------------|---------|-----------|
| **Nuxt 3** | 4.1+ | Full-stack framework, SSR out-of-box, TypeScript support |
| **Vue 3** | 3.5+ | Reactive component framework, Composition API, smaller bundle than React |
| **Tailwind CSS** | Latest | Utility-first design, rapid styling, small production bundle |
| **Pinia** | 3.0+ | Lightweight state management, Vue 3 native, TypeScript-friendly |
| **Nuxt Icon** | 2.1+ | Icon library integration, optimized SVG loading |

**Alternative Considered:**
- Next.js: Good choice but requires separate server setup
- Remix: Strong SSR but smaller ecosystem than Nuxt

### Backend Layer
| Technology | Version | Rationale |
|------------|---------|-----------|
| **Node.js** | 18+ | JavaScript runtime, async-first, npm ecosystem |
| **Nuxt Server API** | 4.1+ | Built-in server routes, same codebase, type-safe |
| **Mongoose** | 8.19+ | Schema validation, hooks, lite ORM layer over MongoDB |
| **TypeScript** | Latest | Type safety, IDE support, reduces runtime errors |

### Data Layer
| Technology | Version | Rationale |
|------------|---------|-----------|
| **MongoDB** | 8.0 | Flexible schema, document-based, good for content management |
| **WiredTiger** | Default | Default storage engine, good performance, compression |

### Infrastructure
| Technology | Version | Rationale |
|------------|---------|-----------|
| **Docker** | Latest | Containerization, consistency across environments |
| **Docker Compose** | 2.x | Multi-container orchestration, simple config |
| **Caddy** | 2.8+ | Modern reverse proxy, automatic HTTPS/TLS, low overhead |

### Development & Testing
| Technology | Version | Purpose |
|------------|---------|---------|
| **Vitest** | 3.2+ | Fast unit testing (Vite-native), Vue 3 support |
| **Vue Test Utils** | 2.4+ | Vue component testing |
| **Nuxt Test Utils** | 3.20+ | Nuxt-specific testing utilities |

---

## 3. System Architecture

### 3.1 Layered Architecture

```
┌─────────────────────────────────────────────────────────┐
│                  PRESENTATION LAYER                     │
│         (Vue Components, Pages, Layouts)                │
│  - Hero, About, Experience, Portfolio, Contact          │
│  - Layout: Navigation, Footer                           │
│  - Responsive design (mobile-first)                     │
└────────────────┬────────────────────────────────────────┘
                 │
┌────────────────▼────────────────────────────────────────┐
│                STATE MANAGEMENT LAYER                   │
│              (Pinia Stores)                             │
│  - experienceStore: manage experience data              │
│  - introStore: manage introduction text                 │
│  - languageContentStore: manage language skills        │
│  - Auto-persistence to localStorage                    │
└────────────────┬────────────────────────────────────────┘
                 │
┌────────────────▼────────────────────────────────────────┐
│              BUSINESS LOGIC LAYER                       │
│         (Services, Composables, Utils)                  │
│  - Data fetching logic                                  │
│  - Data transformation                                  │
│  - Validation rules                                     │
│  - Error handling                                       │
└────────────────┬────────────────────────────────────────┘
                 │
┌────────────────▼────────────────────────────────────────┐
│                 API LAYER                              │
│          (Nuxt Server API Routes)                       │
│  - GET /api/experience                                  │
│  - GET /api/intro-text                                  │
│  - GET /api/lang-content                                │
│  - POST /api/contact                                    │
│  - Request validation, auth checks                     │
└────────────────┬────────────────────────────────────────┘
                 │
┌────────────────▼────────────────────────────────────────┐
│              DATA ACCESS LAYER                          │
│         (MongoDB Operations)                            │
│  - Mongoose models & schemas                            │
│  - Database queries                                     │
│  - Connection pooling                                   │
│  - Transaction handling                                │
└────────────────┬────────────────────────────────────────┘
                 │
┌────────────────▼────────────────────────────────────────┐
│                DATA LAYER                              │
│          (MongoDB Database)                             │
│  - Collections: profiles, experiences, projects        │
│  - Indexes for query optimization                      │
│  - Backup & replication strategy                       │
└─────────────────────────────────────────────────────────┘
```

### 3.2 API Architecture

#### API Design Pattern: RESTful

| Endpoint | Method | Purpose | Auth | Cache |
|----------|--------|---------|------|-------|
| `/api/intro-text` | GET | Fetch intro paragraphs | None | 3600s |
| `/api/experience` | GET | Fetch work history | None | 3600s |
| `/api/lang-content` | GET | Fetch languages & skills | None | 3600s |
| `/api/contact` | POST | Submit contact form | Rate Limit | None |
| `/api/contact` | GET | List messages (admin) | JWT | None |

#### Request/Response Format

**Success Response (200)**
```json
{
  "status": "success",
  "data": { ... },
  "timestamp": "2026-02-28T10:30:00Z"
}
```

**Error Response (4xx/5xx)**
```json
{
  "status": "error",
  "message": "User-friendly error message",
  "code": "ERROR_CODE",
  "timestamp": "2026-02-28T10:30:00Z"
}
```

### 3.3 Data Flow

#### Server-Side Rendering (SSR) Flow
```
1. User requests page (e.g., /resume)
2. SSR server receives request
3. API routes fetch data from MongoDB
4. Data hydrated into Nuxt page component
5. HTML sent to browser with initial state
6. Browser hydrates Vue.js component
7. Subsequent interactions handled client-side
```

#### Client-Side Data Flow
```
1. Component mounts
2. Composable calls API route
3. Response stored in Pinia store
4. Component reactivity updates UI
5. User interacts with component
6. State updates trigger re-render
```

---

## 4. Component Architecture

### 4.1 Directory Structure

```
nuxt-app/
├── components/
│   ├── layout/
│   │   ├── nav-bar.vue          # Top navigation
│   │   └── footer.vue            # Footer section
│   ├── sections/
│   │   ├── hero-big.vue          # Large hero section
│   │   └── hero-small.vue        # Mobile hero section
│   ├── portfolio/
│   │   ├── ProjectCard.vue       # Single project card
│   │   └── project-section.vue   # Portfolio grid
│   ├── resume/
│   │   ├── skill-section.vue     # Skills display
│   │   ├── xp-section.vue        # Experience timeline
│   │   ├── edu-section.vue       # Education
│   │   ├── LanguageContent.vue   # Language skills
│   │   └── skill-content.vue     # Individual skill
│   ├── text/
│   │   └── section-title-lite-white.vue
│   └── other/
│       ├── teasing.vue
│       └── test-mongo-db.vue     # Debug component
├── pages/
│   ├── index.vue                 # Home (/)
│   ├── resume.vue                # Resume (/resume)
│   ├── portfolio.vue             # Portfolio (/portfolio)
│   └── contact.vue               # Contact (/contact)
├── layouts/
│   └── default.vue               # Main layout wrapper
├── stores/
│   ├── experienceStore.ts        # Experience state
│   ├── introStore.ts             # Intro text state
│   └── languageContentStore.ts   # Language state
├── server/
│   ├── api/
│   │   ├── experience.get.ts     # GET /api/experience
│   │   ├── intro-text.get.ts     # GET /api/intro-text
│   │   └── lang-content.get.ts   # GET /api/lang-content
│   ├── database/
│   │   ├── database.ts           # MongoDB connection
│   │   ├── site-content.ts       # Mock data/content
│   │   └── models/
│   │       └── test-message.ts   # Message model
│   └── plugins/
│       └── database.ts           # DB init plugin
├── app.vue                       # Root component
├── app.config.ts                 # App-wide config
├── nuxt.config.ts                # Nuxt configuration
└── tsconfig.json                 # TypeScript config
```

### 4.2 Component Responsibilities

#### Layout Components
- **nav-bar.vue:** Navigation menu, logo, links
- **footer.vue:** Copyright, social links, sitemap

#### Section Components
- **hero-big.vue:** Large hero section (desktop)
- **hero-small.vue:** Compact hero (mobile)

#### Feature Components
- **ProjectCard.vue:** Indivi project display
- **project-section.vue:** Grid layout for projects
- **xp-section.vue:** Timeline of experiences
- **skill-section.vue:** Skills grouped by category

#### Utility Components
- **section-title-lite-white.vue:** Styled section headers

---

## 5. Data Models & Schema

### 5.1 Core Entities

#### Profile Collection
```typescript
interface Profile {
  _id: ObjectId
  userId: String
  introText: String[]           // Array of HTML paragraphs
  languages: Language[]
  contact: {
    email: String
    phone?: String
    website?: String
    social?: {
      linkedin?: String
      github?: String
      twitter?: String
    }
  }
  createdAt: Date
  updatedAt: Date
}

interface Language {
  name: String
  level: String
  img: String                   // Image URL
}
```

#### Experience Collection
```typescript
interface Experience {
  _id: ObjectId
  companyName: String
  companyVenue: String
  jobTitle: String
  period: String                // "Jan 2018 - Dec 2024"
  companyLogoSrc: String        // Static image path
  jobMissions: String[]         // HTML-formatted
  startDate: Date
  endDate?: Date                // Null for current role
  featured: Boolean
  createdAt: Date
  updatedAt: Date
}
```

#### Project Collection
```typescript
interface Project {
  _id: ObjectId
  title: String
  category: String              // Web, Design, etc.
  description: String           // Short desc
  fullDescription: String       // Long desc (Markdown)
  thumbnail: String             // Image URL
  techStack: String[]           // ["Vue", "Nuxt"]
  links: {
    demo?: String
    github?: String
    caseStudy?: String
  }
  featured: Boolean
  createdAt: Date
  updatedAt: Date
}
```

#### ContactMessage Collection
```typescript
interface ContactMessage {
  _id: ObjectId
  name: String
  email: String
  subject: String
  message: String
  status: "new" | "read" | "responded"
  createdAt: Date
  respondedAt?: Date
  response?: String
}
```

### 5.2 Relationships

```
Profile (1) ─────── (Many) Language
     │
     └─── contains intro & contact info

Experience (Many) ──── visualized on Resume page

Project (Many) ──── displayed in Portfolio

ContactMessage (Many) ──── tracked by admin
```

---

## 6. Security Architecture

### 6.1 Authentication & Authorization
- **Current:** No authentication (public portfolio)
- **Future:** JWT tokens for admin dashboard

### 6.2 Input Validation & Sanitization
```typescript
// Contact form validation
- Email: RFC 5322 format
- Name: Min 2 chars, max 100 chars, no special chars
- Subject: Max 200 chars
- Message: Max 5000 chars
- XSS Protection: Sanitize all inputs on server
```

### 6.3 Data Protection
- **HTTPS/TLS:** Enforced by Caddy (automatic)
- **Environment Variables:** `.env` file with sensitive data (not in git)
- **Database Access:** Limited to internal Docker network
- **CORS:** Configured to allow only localhost in dev, domain in prod

### 6.4 Rate Limiting
```typescript
// Contact form rate limiting
- Per IP: Max 5 submissions per hour
- Global: Max 100 submissions per hour
- Spam detection: Verify email exists, content length
```

---

## 7. Performance Architecture

### 7.1 Caching Strategy

| Data | Cache Duration | Strategy | Invalidation |
|------|-----------------|----------|---------------|
| Experience | 3600s (1hour) | HTTP Cache-Control | Manual or daily refresh |
| Languages | 3600s | HTTP Cache-Control | Manual or daily refresh |
| Contact Messages | No cache | Private | Real-time |
| Static Assets | 86400s (1 day) | Browser + CDN | Version hash |

### 7.2 Image Optimization
- Lazy loading for below-the-fold images
- Responsive images (srcset for different screen sizes)
- WebP format with fallback
- Image compression (80% quality)
- CDN delivery for static assets

### 7.3 Bundle Optimization
- Code splitting per page
- Tree-shaking unused exports
- Minification of JS/CSS
- Gzip compression on server

### 7.4 Database Optimization
- Indexes on frequently queried fields
- Pagination for large collections
- Connection pooling (Mongoose)
- Query optimization (select only needed fields)

---

## 8. Deployment Architecture

### 8.1 Deployment Topology

```
                  ┌─────────────────┐
                  │   Git Repository │
                  └────────┬─────────┘
                           │
                  (push to main branch)
                           │
        ┌──────────────────▼──────────────────┐
        │    CI/CD Pipeline (GitHub Actions) │
        ├──────────────────────────────────────┤
        │ 1. Run tests                         │
        │ 2. Build Docker image               │
        │ 3. Push to registry                 │
        │ 4. Deploy to production             │
        └──────────────────┬──────────────────┘
                           │
                ┌──────────▼───────────┐
                │   Docker Registry    │
                │  (Docker Hub/Local)  │
                └──────────┬───────────┘
                           │
              ┌────────────▼────────────┐
              │  Production Server      │
              ├────────────────────────┤
              │ - Docker Compose up    │
              │ - Caddy SSL/TLS        │
              │ - Nuxt App Container   │
              │ - MongoDB Container    │
              │ - Volume persistence   │
              └────────────────────────┘
```

### 8.2 Environment Configuration

| Env | Server | Database | SSL | Monitoring |
|-----|--------|----------|-----|-----------|
| **Dev** | localhost:3000 | local MongoDB | http | Console logs |
| **Staging** | staging.domain | cloud MongoDB | https | File logs |
| **Prod** | domain.com | cloud MongoDB | https | Sentry/DataDog |

### 8.3 Scaling Strategy
- **Currently:** Single Docker host (monolithic)
- **Future:** Kubernetes cluster with horizontal pod autoscaling
- **Database:** Sharding by user_id if > 10M documents

---

## 9. Monitoring & Observability

### 9.1 Logging Strategy
```
Application Logs:
- Level: info, warn, error, debug
- Format: JSON for structured logging
- Transport: console (dev) + file (prod)
- Retention: 30 days

Database Logs:
- Query logs in dev (debug mode)
- Slow query threshold: 1000ms
```

### 9.2 Error Tracking
- **Dev:** Console errors + network tab
- **Prod:** Sentry integration (planned)
- **Mail Alerts:** Critical errors to admin email

### 9.3 Performance Monitoring
- Lighthouse CI for every deploy
- Web Vitals tracking (client-side)
- API response time metrics
- Database query performance

---

## 10. Extensibility & Future Considerations

### 10.1 Plugin Architecture
```
Planned plugins:
- Analytics (Plausible, Vercel Analytics)
- Email service (SendGrid, Mailgun)
- CMS integration (Strapi, Sanity)
- Payment processing (Stripe)
- Blog engine (markdown-based)
```

### 10.2 API Versioning
```
Future API versions:
/api/v1/experience      # Current
/api/v2/experience      # With additional fields
/api/v3/experience      # With pagination
```

### 10.3 Multi-Tenancy
- Potential to host multiple portfolios
- Database per tenant or shared with tenant_id
- Role-based access control (RBAC)

---

## 11. Architecture Decision Log (ADL)

### Decision 1: Monolithic vs. Microservices
**Chosen:** Monolithic  
**Rationale:** Single-page portfolio doesn't need service separation; easier to deploy and maintain for solo project.

### Decision 2: SSR vs. Static Generated
**Chosen:** SSR (with future static export option)  
**Rationale:** Dynamic data fetching + SEO benefits; can generate static files for performance.

### Decision 3: MongoDB vs. SQL DB
**Chosen:** MongoDB (NoSQL)  
**Rationale:** Flexible schema for content management; easier to extend without migrations.

### Decision 4: Pinia vs. Vuex
**Chosen:** Pinia  
**Rationale:** Lighter, better TypeScript support, simpler API than Vuex; better for small apps.

---

## 12. Diagram References

- System diagram: Section 3.1
- Layered architecture: Section 3.1
- Data relationships: Section 5.2
- Deployment topology: Section 8.1

---

## 13. Change Log

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | 2026-02-28 | Initial architecture documentation | Dylan Tettarasar |

---

## 14. Appendix: Related Documents
- [PRD.md](PRD.md) - Product requirements
- [BACKLOG.md](BACKLOG.md) - Development tasks
- [Main README](../../README.md) - Setup guide
- Nuxt Docs: https://nuxt.com
- Vue Docs: https://vuejs.org
