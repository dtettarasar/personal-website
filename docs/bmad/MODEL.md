# 📊 Data Model & Domain Structure
## Personal Site 25 - Complete Schema Documentation

**Version:** 1.0  
**Status:** Active Development (Data Migration Phase)  
**Last Updated:** 2026-02-28  
**Owner:** Dylan Tettarasar

---

## 1. Overview

This document defines all data entities, their relationships, validation rules, and current state of migration from hardcoded data to MongoDB persistence.

### Current State
- ✅ **Experiences:** Partially migrated (site-content.ts)
- ✅ **Languages:** Fully migrated (site-content.ts)
- ✅ **Intro Text:** Fully migrated (site-content.ts)
- 🟡 **Skills:** Hardcoded in components (skill-section.vue) - needs migration
- 🟡 **Education:** Hardcoded in components (edu-section.vue) - needs migration
- ⏳ **Projects:** Not yet implemented
- ⏳ **Contact Messages:** Schema defined, API in progress

---

## 2. Core Data Entities

### 2.1 Profile Entity

**Collection:** `profiles`  
**Purpose:** Central user/profile information  
**Ownership:** One profile per site (singleton pattern)

#### Schema
```typescript
interface Profile {
  _id: ObjectId
  name: string                          // "Dylan Tettarasar"
  title: string                         // "Technical Product Owner & Full-Stack Developer"
  bioShort: string                      // < 160 chars for SEO
  bioLong: string[]                     // Array of paragraphs with HTML support
  avatar: string                        // URL to avatar image
  email: string                         // Contact email
  location: string                      // "Paris, France"
  contact: {
    email: string
    phone?: string
    website?: string
    linkedin?: string
    github?: string
    twitter?: string
  }
  createdAt: Date
  updatedAt: Date
}
```

#### Current Data (site-content.ts reference)
```javascript
{
  name: "Dylan Tettarasar",
  title: "Technical Product Owner & Full-Stack Developer",
  bioShort: "Technical PO with 7+ years bridging product strategy and development at scale",
  bioLong: getIntroText(), // From site-content.ts
}
```

#### Validation Rules
- `name`: Required, 2-100 chars
- `email`: Valid RFC 5322 format
- `bioShort`: Max 160 chars (SEO meta description)
- `bioLong`: Array of 3-5 paragraphs max

---

### 2.2 Language Entity

**Collection:** `languages` (or nested in Profile)  
**Purpose:** Language proficiency display  
**Status:** ✅ Fully migrated

#### Schema
```typescript
interface Language {
  _id?: ObjectId
  name: string                          // "French", "English"
  level: string                         // "Native", "Fluent", "Business", "Intermediate"
  certifications?: string[]             // ["TOEIC 920/990"]
  imageUrl: string                      // "/img/language/france-croissant.png"
  createdAt?: Date
  updatedAt?: Date
}
```

#### Current Data (site-content.ts)
```javascript
{
  name: 'French',
  level: 'Native Language',
  img: '/img/language/france-croissant.png'
},
{
  name: 'English',
  level: 'Business Level',
  img: '/img/language/uk-afternoon-tea.png'
}
```

#### Relationships
- **Profile (1) ──── (Many) Language**

---

### 2.3 Experience Entity

**Collection:** `experiences`  
**Purpose:** Professional work history  
**Status:** 🟡 Partially migrated

#### Schema
```typescript
interface Experience {
  _id: ObjectId
  profileId: ObjectId                   // Reference to Profile
  companyName: string                   // "DII / POLITICO"
  companyVenue: string                  // "Paris, France"
  companyLogoUrl: string                // "/img/resume/experiences/company-logo-dii.png"
  jobTitle: string                      // "Project Manager Web & CRM"
  description: string                   // Short overview (optional)
  period: string                        // "Jan 2018 - Dec 2024"
  startDate: Date                       // 2018-01-01
  endDate?: Date                        // null if current role
  isCurrent: boolean                    // true/false
  missions: Mission[]                   // Array of mission/achievement objects
  skills: string[]                      // ["Project Management", "React", "DevOps"]
  achievements?: {
    metric?: string                     // "Managed 50+ clients"
    impact?: string                     // "30% performance improvement"
  }
  featured: boolean                     // Highlight on portfolio
  order: number                         // For sorting (1, 2, 3...)
  createdAt: Date
  updatedAt: Date
}

interface Mission {
  title: string                         // "Web Development & CMS Architecture"
  description: string                   // HTML-formatted description
  icon?: string                         // "icon-name" for visual indication
}
```

#### Current Data (site-content.ts)
```javascript
{
  companyName: "DII / POLITICO",
  companyVenue: "Paris, France",
  jobTitle: "Project Manager Web & CRM",
  period: "Jan 2018 - Dec 2024",
  companyLogoSrc: "/img/resume/experiences/company-logo-dii.png",
  jobMissions: [
    "<strong>Web Development & CMS Architecture:</strong> Managed a WordPress Multisite network...",
    "<strong>Salesforce Engineering (LWC):</strong> Developed front-end adjustments...",
    // ... more missions
  ]
}
```

#### Validation Rules
- `companyName`: Required, 2-100 chars
- `jobTitle`: Required, 3-100 chars
- `period`: Format "Month Year - Month Year" or "Current"
- `missions`: At least 1, max 10 missions
- `startDate/endDate`: Valid ISO dates

#### Relationships
- **Profile (1) ──── (Many) Experience**
- **Experience ──── (Many) Skills**

---

### 2.4 Skill Entity

**Collection:** `skills` or nested in Profile  
**Purpose:** Technical & professional competencies  
**Status:** 🟡 Hardcoded in skill-section.vue

#### Schema
```typescript
interface Skill {
  _id?: ObjectId
  profileId: ObjectId                   // Reference to Profile
  name: string                          // "Vue.js", "Project Management"
  category: SkillCategory               // enum
  proficiency: "Expert" | "Advanced" | "Intermediate" | "Beginner"
  yearsOfExperience: number             // 0-30
  icon?: string                         // "mdi:vuejs"
  description?: string                  // 0-200 chars
  endorsements?: number                 // count
  order: number                         // For sorting
  createdAt?: Date
  updatedAt?: Date
}

type SkillCategory = 
  | "Frontend"
  | "Backend"
  | "DevOps & Tools"
  | "CMS & Business Tools"
  | "Creative Tools"
  | "Languages & Other"
```

#### Current Hardcoded Data (skill-section.vue)
```javascript
const skillSections = [
  {
    title: "Frontend – Main Stack",
    icon: "mdi:star-four-points",
    items: [
      { icon: "mdi:vuejs", label: "Vue.js" },
      { icon: "lineicons:nuxt", label: "Nuxt.js" },
      { icon: "mdi:tailwind", label: "Tailwind CSS" }
    ]
  },
  {
    title: "Web & Integration",
    items: [
      { icon: "mdi:language-html5", label: "HTML5" },
      { icon: "mdi:language-css3", label: "CSS3" },
      // ...
    ]
  },
  // ... more categories
]
```

#### Expected Migrated Structure
```javascript
// After migration - returned from API
[
  {
    category: "Frontend",
    skills: [
      { name: "Vue.js", proficiency: "Expert", yearsOfExperience: 3, icon: "mdi:vuejs" },
      { name: "Nuxt.js", proficiency: "Expert", yearsOfExperience: 2, icon: "lineicons:nuxt" },
      // ...
    ]
  },
  // ...
]
```

#### Validation Rules
- `name`: Required, 2-50 chars
- `proficiency`: Must be one of enum values
- `yearsOfExperience`: 0-30
- `order`: Unique per category
- Duplicate skills prevented at application level

---

### 2.5 Education & Certification Entity

**Collection:** `educations`  
**Purpose:** Certifications, courses, degrees  
**Status:** 🟡 Hardcoded in edu-section.vue

#### Schema
```typescript
interface Education {
  _id: ObjectId
  profileId: ObjectId                   // Reference to Profile
  type: "Degree" | "Certification" | "Course"
  title: string                         // "Master's degree - Digital Marketing"
  issuer: string                        // "INSEEC Business School Paris"
  issuerLogoUrl: string                 // "/img/resume/educations/diploma-logo-inseec.png"
  description?: string                  // Additional details
  year: string | number                 // 2015 or "2014-2015"
  completionDate: Date                  // 2015-06-30
  credentialUrl?: string                // Link to certificate
  credentialId?: string                 // Cert ID if applicable
  skills: string[]                      // ["Digital Marketing", "SEO", "Analytics"]
  featured: boolean                     // Show on resume
  order: number                         // For sorting
  createdAt: Date
  updatedAt: Date
}
```

#### Current Hardcoded Data (edu-section.vue)
```javascript
const educations = [
  {
    educationLogoSrc: "/img/resume/educations/harvard-university-logo-0.png",
    title: "Introduction to Programming with Python",
    issuer: "Harvard University",
    year: "2025",
    certificationLink: "https://certificates.cs50.io/eed08f81-a764-4e60-b861-87bb616aacff.pdf...",
  },
  {
    educationLogoSrc: "/img/resume/educations/diploma-logo-inseec.png",
    title: "Master's degree - Digital Marketing",
    issuer: "INSEEC Business School Paris",
    year: "2015",
  },
  // ... more items
]
```

#### Migration Notes
- Add `type` field (currently inferred from issuer)
- Standardize `year` to `completionDate` ISO format
- Map `certificationLink` → `credentialUrl`
- Map `educationLogoSrc` → `issuerLogoUrl`

#### Validation Rules
- `title`: Required, 3-150 chars
- `issuer`: Required, 2-100 chars
- `type`: Must be in enum
- `year/completionDate`: Valid date
- `credentialUrl`: Valid HTTP/HTTPS URL (optional)

---

### 2.6 Project/Portfolio Entity

**Collection:** `projects`  
**Purpose:** Personal/professional project showcase  
**Status:** ⏳ Not yet implemented

#### Schema
```typescript
interface Project {
  _id: ObjectId
  profileId: ObjectId                   // Reference to Profile
  title: string                         // "OtisAI: Personal AI Assistant"
  slug: string                          // "otisai-personal-assistant"
  category: ProjectCategory             // enum: "Web", "AI", "Design", "Open Source"
  description: string                   // Short 2-3 sentence description
  fullDescription: string               // Markdown or HTML for detail page
  thumbnail: string                     // Image URL (main preview)
  gallery: string[]                     // Array of project images
  techStack: string[]                   // ["React", "Node.js", "MongoDB"]
  role: string                          // "Full Stack Developer", "Product Manager"
  contributions: string[]               // Specific achievements
  duration?: {
    startDate: Date
    endDate?: Date
  }
  links: {
    live?: string                       // Deployed URL
    github?: string                     // GitHub repo
    caseStudy?: string                  // Blog post explaining project
    demo?: string                       // Demo video URL
  }
  metrics?: {
    users?: number
    downloads?: number
    stars?: number
  }
  featured: boolean                     // Show on homepage
  order: number                         // For sorting
  createdAt: Date
  updatedAt: Date
}

type ProjectCategory = "Web" | "AI" | "Design" | "Open Source" | "Research" | "Other"
```

#### Example Project Data
```javascript
{
  title: "News Ipsum: AI-Powered News Aggregation",
  slug: "news-ipsum",
  category: "Web",
  description: "Full-stack RSS aggregator with AI-powered categorization and monthly email digest.",
  techStack: ["Nuxt 3", "Node.js", "MongoDB", "OpenAI API"],
  role: "Full Stack Developer",
  contributions: [
    "Architected end-to-end RSS feed processing pipeline",
    "Implemented AI categorization with OpenAI API",
    "Designed and built responsive UI with Nuxt/Vue"
  ],
  links: {
    github: "https://github.com/dtettarasar/news-ipsum",
    demo: "https://news-ipsum.app"
  },
  featured: true
}
```

---

### 2.7 Contact Message Entity

**Collection:** `contactMessages`  
**Purpose:** Contact form submissions tracking  
**Status:** ⏳ API in progress

#### Schema
```typescript
interface ContactMessage {
  _id: ObjectId
  senderName: string                    // Sender's name (2-100 chars)
  senderEmail: string                   // Sender's email (RFC 5322)
  subject: string                       // Message subject (3-200 chars)
  message: string                       // Main message body (10-5000 chars)
  status: "new" | "read" | "responded" // Workflow status
  rateLimit?: {
    senderIp: string                    // For spam prevention
    timestamp: Date
  }
  response?: {
    respondedAt: Date
    respondedBy?: string                // Admin name (future)
    responseMessage?: string            // Reply content
  }
  metadata?: {
    userAgent?: string
    referer?: string
    visitId?: string
  }
  createdAt: Date
  updatedAt: Date
}
```

#### Validation Rules
- `senderName`: Required, 2-100 chars, no special chars
- `senderEmail`: Valid email, checked for existence
- `subject`: Required, 3-200 chars
- `message`: Required, 10-5000 chars
- **Anti-Spam:** Rate limit 5 per IP per hour
- **Security:** XSS sanitization on all fields

---

## 3. Data Relationships

### Entity Relationship Diagram

```
┌─────────────┐
│   Profile   │ (singleton - 1 per site)
├─────────────┤
│ - name      │
│ - title     │
│ - bio       │
├─────────────┤
│
├─ (1:M) ────── Languages
│
├─ (1:M) ────── Experiences
│                    │
│                    └─ (M:M) ──── Skills
│
├─ (1:M) ────── Educations
│
├─ (1:M) ────── Projects
│
└─ (1:M) ────── ContactMessages
```

### Referential Integrity
- Experiences reference Profile._id (FK)
- Languages reference Profile._id (FK)
- Education references Profile._id (FK)
- Projects reference Profile._id (FK)
- **Note:** For MVP, single Profile OK; multi-tenancy would require tenant sharding

---

## 4. Enum Types

### SkillCategory
```typescript
type SkillCategory =
  | "Frontend"              // Vue, React, Angular
  | "Backend"               // Node, Django, Express
  | "DevOps & Tools"        // Docker, Git, CI/CD
  | "CMS & Business"        // WordPress, Salesforce
  | "Creative"              // Figma, Krita, Blender
  | "Languages & Other"     // French, English, etc.
```

### ProjectCategory
```typescript
type ProjectCategory =
  | "Web"                   // Web apps, websites
  | "AI"                    // ML, LLM projects
  | "Design"                // UI/UX, visual
  | "Open Source"           // OSS contributions
  | "Research"              // Experimental
  | "Other"
```

### MessageStatus
```typescript
type MessageStatus =
  | "new"                   // Just received
  | "read"                  // Admin has read
  | "responded"             // Admin has replied
```

---

## 5. Database Indexes

### Recommended Indexes

```typescript
// Experiences Collection
db.experiences.createIndex({ profileId: 1, startDate: -1 })  // For sorting by date
db.experiences.createIndex({ featured: 1 })                   // For featured filter

// Skills Collection
db.skills.createIndex({ profileId: 1, category: 1 })         // For grouping by category
db.skills.createIndex({ order: 1 })                           // For sorting

// Education Collection
db.educations.createIndex({ profileId: 1, completionDate: -1 })  // Date sorting
db.educations.createIndex({ featured: 1 })                    // Featured items

// Projects Collection
db.projects.createIndex({ profileId: 1, featured: -1 })      // Featured projects first
db.projects.createIndex({ category: 1 })                      // Category filtering
db.projects.createIndex({ slug: 1 })                          // URL lookups (unique)

// ContactMessages Collection
db.contactMessages.createIndex({ createdAt: -1 })            // Recent messages first
db.contactMessages.createIndex({ status: 1 })                // Status filtering
db.contactMessages.createIndex({ senderEmail: 1 })           // Email lookups
db.contactMessages.createIndex({ status: 1, createdAt: -1 }) // Compound: unread then recent
```

---

## 6. Data Flow & Current Migration State

### Phase 1: Data Consolidation (CURRENT - Q1 2026)

**Objective:** Move all hardcoded data to centralized source (site-content.ts)

**Status by Entity:**

| Entity | Current Location | Target | Status | ETA |
|--------|------------------|--------|--------|-----|
| Profile | index.vue, intro | site-content.ts | 🟡 Partial | Mar 3 |
| Languages | site-content.ts | site-content.ts | ✅ Done | - |
| Experiences | site-content.ts | site-content.ts | ✅ Done | - |
| **Skills** | **skill-section.vue** | **site-content.ts** | 🟡 TODO | **Mar 5** |
| **Education** | **edu-section.vue** | **site-content.ts** | 🟡 TODO | **Mar 7** |
| Projects | *Not started* | site-content.ts | ⏳ Planned | Mar 14 |
| Messages | ContactForm | API endpoint | 🟡 In Progress | Mar 10 |

### Phase 2: API Integration (Q2 2026)

**Objective:** Create API endpoints that fetch data from site-content.ts

```
/api/profile       → GET profile data
/api/experiences   → GET all experiences
/api/skills        → GET skills grouped by category
/api/educations    → GET all certifications
/api/projects      → GET portfolio projects (with filtering)
```

### Phase 3: MongoDB Persistence (Q2-Q3 2026)

**Objective:** Replace site-content.ts with real MongoDB data

```
API Endpoints → Mongoose Models → MongoDB Collections
```

### Phase 4: Admin Dashboard (Q2-Q3 2026)

**Objective:** Admin UI for CRUD operations

```
Admin Dashboard → API Routes → MongoDB → Site Update
```

---

## 7. Data Validation & Sanitization

### Input Validation Strategy

```typescript
// Example: Experience validation
const validateExperience = (data: any): Result<Experience> => {
  // Required fields check
  if (!data.companyName || !data.jobTitle) {
    return { error: "Missing required fields" }
  }

  // Type checking
  if (typeof data.companyName !== 'string') {
    return { error: "Invalid company name" }
  }

  // Length validation
  if (data.companyName.length < 2 || data.companyName.length > 100) {
    return { error: "Company name must be 2-100 chars" }
  }

  // Business logic
  if (data.startDate > data.endDate && data.endDate) {
    return { error: "End date cannot be before start date" }
  }

  return { data: validated }
}
```

### Sanitization Rules

| Field Type | Sanitization | Risk |
|-----------|--------------|------|
| HTML Content (missions) | DOMPurify / Sanitize | XSS |
| Email | Verify format + domain check | Invalid email |
| URLs | Validate protocol + structure | Phishing |
| Plain Text | Trim + escape special chars | XSS |
| Numbers | Parse + type check | Injection |

---

## 8. Example API Responses

### GET /api/skills
```json
{
  "status": "success",
  "data": [
    {
      "category": "Frontend",
      "skills": [
        {
          "name": "Vue.js",
          "proficiency": "Expert",
          "yearsOfExperience": 3,
          "icon": "mdi:vuejs"
        }
      ]
    },
    {
      "category": "Backend",
      "skills": [...]
    }
  ]
}
```

### GET /api/educations
```json
{
  "status": "success",
  "data": [
    {
      "id": "507f1f77bcf86cd799439011",
      "type": "Certification",
      "title": "Introduction to Programming with Python",
      "issuer": "Harvard University",
      "year": "2025",
      "credentialUrl": "https://certificates.cs50.io/...",
      "featured": true
    }
  ]
}
```

---

## 9. Change Log

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | 2026-02-28 | Initial data model documentation | Dylan Tettarasar |

---

## 10. Related Documents
- [PRD.md](PRD.md) - Data requirements from business perspective
- [ARCHITECTURE.md](ARCHITECTURE.md) - Technical implementation
- [BACKLOG.md](BACKLOG.md) - Migration tasks
- Site Content: `nuxt-app/server/database/site-content.ts`
