# 🛠️ Development Backlog & Roadmap
## Personal Site 25 - Implementation Plan

**Version:** 1.7  
**Status:** Active Development  
**Last Updated:** 2026-07-01  
**Owner:** Dylan Tettarasar

---

## 1. Backlog Overview

### Purpose
The backlog is a prioritized list of work items organized by:
- **Epics:** Large features or initiatives
- **User Stories:** Customer-facing features
- **Tasks:** Technical implementation work
- **Bugs:** Issues found in production/development

### Status Definitions
- 🔴 **Not Started:** Item not yet begun
- 🟡 **In Progress:** Currently being worked on
- 🟢 **Done:** Completed and tested
- 🔵 **Blocked:** Waiting on dependency or external factor

---

## 2. Current Sprint (Sprint 25.1)
**Duration:** Feb 28 - Mar 14, 2026  
**Goal:** Stabilize core features and prepare for contact form launch

### 2.1 Active Sprint Items

#### Story: Implement Contact Form (🟡 In Progress)
**Priority:** High  
**Points:** 13  
**Sprint Goal:** Allow visitors to send messages

**Tasks:**
- [ ] 🟡 Backend: Create POST /api/contact endpoint (3pts)
  - Input validation and sanitization
  - Rate limiting implementation
  - Email notification to admin
  - Response storage to MongoDB
  - Error handling and logging

- [ ] 🟡 Frontend: Build contact form component (5pts)
  - Form fields: name, email, subject, message
  - Client-side validation
  - Loading state and error messaging
  - Success confirmation
  - Responsive layout

- [ ] 🔴 Testing: Unit & integration tests (3pts)
  - Backend route tests
  - Component rendering tests
  - Form submission tests
  - Validation tests

- [ ] 🔴 Documentation: API docs for contact endpoint (2pts)

**Acceptance Criteria:**
- [ ] Form validates all inputs on client and server
- [ ] Messages persisted to MongoDB
- [ ] Rate limiting prevents spam (5/hour per IP)
- [ ] Admin receives email notification
- [ ] User receives confirmation email
- [ ] 100% test coverage for validation logic
- [ ] Page loads in < 2s on 4G

**Dependencies:**
- EmailService integration (planned)

---

#### Story: Database Connection Optimization (🟡 In Progress)
**Priority:** Medium  
**Points:** 8  
**Sprint Goal:** Reduce database query time and connection overhead

**Tasks:**
- [ ] 🟡 Add database indexes on commonly queried fields (2pts)
  - Index on Experience.companyName
  - Index on Project.category
  - Compound index on ContactMessage.status + createdAt

- [ ] 🟢 Configure Mongoose connection pooling (2pts)
  - Set maxPoolSize = 10
  - Enable connection monitoring

- [ ] 🔴 Query optimization audit (2pts)
  - Review all API queries
  - Remove N+1 queries
  - Select only needed fields

- [ ] 🔴 Caching layer implementation (2pts)
  - Add Redis for session caching (future)
  - HTTP Cache-Control headers

**Acceptance Criteria:**
- [ ] Database queries complete in < 100ms
- [ ] No N+1 query patterns
- [ ] Connection pool maintained at 5-10 active connections
- [ ] Test coverage for all query optimizations

---

#### Story: Data Migration: Skills, Education & Projects (🟢 Done)
**Priority:** High  
**Points:** 11  
**Sprint Goal:** Migrate hardcoded skills, education and projects data to centralized site-content.ts
**Completed:** 2026-03-01

**Context:** Skills, education and projects were hardcoded in component state. All have been moved to site-content.ts (Phase 1 of data consolidation). Future phases will migrate to MongoDB + admin dashboard.

**Completed Tasks:**
- [x] 🟢 Migrate skills from skill-section.vue to site-content.ts (3pts)
  - Created getSkills() function in site-content.ts
  - Created GET /api/skills endpoint
  - Created skillsStore (Composition API)
  - Updated skill-section.vue to consume from store
  - Added AI tools (GitHub Copilot, Claude Code) and Vitest to skills

- [x] 🟢 Migrate education from edu-section.vue to site-content.ts (3pts)
  - Created getEducations() function in site-content.ts
  - Created GET /api/educations endpoint
  - Created educationsStore (Composition API)
  - Updated edu-section.vue to consume from store

- [x] 🟢 Migrate projects from project-section.vue to site-content.ts (3pts)
  - Created getProjects() function in site-content.ts
  - Created GET /api/projects endpoint
  - Created projectsStore (Composition API)
  - Updated project-section.vue to consume from store

- [x] 🟢 Testing & validation (2pts)
  - All skills, certifications and projects display correctly
  - All API endpoints return properly formatted responses
  - No console errors or warnings
  - Responsive rendering unaffected

**Notes:**
- This completes **Phase 1 (Consolidation)** for business data (see MODEL.md)
- All 6 data stores now use Composition API pattern
- Phase 2 (MongoDB) will come later
- Admin dashboard comes after Phase 2

---

#### Story: Bilingual Content Delivery with i18n (🟢 Done)
**Priority:** High  
**Points:** 20  
**Sprint Goal:** Deliver FR/EN content end-to-end across UI labels, API payloads, and store-driven SSR rendering
**Completed:** 2026-06-27

**Context:** The site now supports French and English content from a single codebase using Nuxt i18n + locale-aware data retrieval. This includes localization of static labels, API-driven content, and locale caching in Pinia stores.

**Completed Tasks:**
- [x] 🟢 Integrated Nuxt i18n module in app configuration (locales: fr/en, `no_prefix` strategy, browser language detection)
- [x] 🟢 Added language switcher in navigation (desktop + mobile)
- [x] 🟢 Centralized translated UI labels in `constants/ui-labels.ts`
- [x] 🟢 Updated `site-content.ts` to serve localized content (`getHeroData`, `getIntroText`, `getResumeIntroText`, `getLanguageContent`, `getExperiences`, `getSkills`, `getEducations`, `getProjects`)
- [x] 🟢 Updated API routes to accept `locale` query parameter and pass locale to content provider layer
- [x] 🟢 Updated Pinia stores to cache by locale (`dataByLocale`) and fetch per selected language
- [x] 🟢 Updated key page/section components to re-fetch on locale change with `useAsyncData(..., { watch: [locale] })`
- [x] 🟢 SSR consistency pass: removed `result ?? true` fallback pattern and normalized store fetch contracts (`data | null`) to avoid hidden SSR failures

**Acceptance Criteria:**
- [x] Visitors see FR or EN content based on browser detection and manual language switch
- [x] Locale switch updates labels and server-provided content consistently
- [x] API responses vary by locale for content endpoints
- [x] Stores preserve per-locale cache and avoid redundant fetches
- [x] SSR path uses explicit async returns and no duplicated client fetch warning

**Notes:**
- Current routing strategy is `no_prefix` (single URL per page)
- International SEO enhancements (prefixed URLs, hreflang) are tracked separately as a future optimization

---

#### Story: Content Repositioning: Product Owner Profile (� In Progress)
**Priority:** High  
**Points:** 8  
**Sprint Goal:** Reposition profile narrative towards "Technical Product Owner & Full-Stack Developer" target role

**Context:** Based on career analysis, target role is Technical Product Owner at companies like Davidson. Current content emphasizes frontend development. Need to reframe narrative to highlight:
- Product strategy & backlog management experience (7 years)
- Technical depth (Docker, APIs, DevOps, full-stack)
- Project management & cross-functional communication
- Business-to-technical translation skills

**Tasks:**
- [x] 🟢 Update intro bio paragraph (2pts) — *Done 2026-03-01*
  - Updated hero-big.vue subtitle: "Technical Product Owner · Fullstack Developer"
  - Updated intro text in site-content.ts with TPO positioning
  - Updated resume.vue intro paragraph with strategic narrative

- [ ] 🔴 Refactor experience descriptions (3pts)
  - Reframe DII/POLITICO role to emphasize PO/TPM aspects
  - Highlight: backlog management, roadmap ownership, developer collaboration
  - Add metrics: "managed 50+ enterprise clients", "led 100+ feature launches"
  - Soften pure development tasks; emphasize strategic value

- [ ] 🔴 Update skills section ordering (1pt)
  - Move "Project Management" to top tier
  - Add "Product Strategy, Agile/Scrum, Backlog Management"
  - Reframe "Backend" as "Full-Stack Capabilities"

- [ ] 🔴 Enhance project descriptions (2pts)
  - Focus on product decisions made, not just tech implementation
  - Highlight business metrics (users, impact, ROI)
  - Link projects to PO narrative (strategy → execution)

**Acceptance Criteria:**
- [x] Intro clearly positions as "Technical Product Owner"
- [ ] Experience descriptions emphasize PO/strategy over pure development
- [ ] Project section highlights product thinking & business impact
- [ ] All content naturally flows from dev → PO progression
- [ ] Recruiter reading profile sees "Technical PO" profile fit

**Keywords to incorporate:**
- Technical Product Owner, Product Engineer, Technical Product Manager
- Product roadmap, backlog management, feature prioritization
- Cross-functional leadership, developer collaboration
- Technical architecture understanding, DevOps mindset
- Business strategy + technical execution

**Notes:**
- This repositioning appeals to roles like Davidson Technical PO job posting
- Salary target: 55k€-65k€ for Technical PO Senior role
- Protects against AI-driven obsolescence (POs less replaceable than coders)
- See competitive opportunity analysis in BACKLOG intro

---

#### Story: Mobile Optimization (🔴 Not Started)
**Priority:** Medium  
**Points:** 13  
**Sprint Goal:** Ensure perfect responsive experience on all devices

**Tasks:**
- [ ] 🔴 Responsive CSS audit (3pts)
  - Test on mobile (320px), tablet (768px), desktop (1920px)
  - Fix layout issues
  - Optimize touch targets (min 44x44px)

- [ ] 🔴 Image responsive implementation (3pts)
  - Add srcset for different screen sizes
  - Lazy load images
  - WebP with fallback

- [ ] 🔴 Mobile navigation improvements (3pts)
  - Add hamburger menu for mobile
  - Touch-friendly scrolling
  - Fix font sizing for mobile

- [ ] 🔴 Performance testing (4pts)
  - Lighthouse score on mobile
  - Core Web Vitals optimization
  - Test on slow 4G connection

**Acceptance Criteria:**
- [ ] Lighthouse score > 90 on mobile
- [ ] No layout shifts (CLS < 0.1)
- [ ] Navigation works perfectly on all sizes
- [ ] Touch targets all > 44x44px
- [ ] < 2s load time on 4G

**Blocked By:** None

---

### 2.2 Next Sprint Draft (Sprint 25.2) - Resume Print (A4)
**Duration:** TBD (proposed: 1 week)  
**Goal:** Add a printable CV experience directly in the Nuxt app, with an A4-ready layout for job applications and a simple user flow from Resume page to browser print/download.

**Description (Draft):**
This sprint introduces a new print-focused CV version inside the personal website. The objective is to avoid external design tools for final CV export by generating a clean A4 document directly from site content. The feature should remain easy to maintain, reuse existing data sources, and provide a smooth candidate workflow: open print version -> print to PDF/download from browser. The visual direction should stay aligned with the site's existing brand language (color palette, iconography, visual hierarchy), while adapting choices to print constraints (readability, available fonts, ink-friendly contrast). The target format is a single-page A4 CV; content must be shaped to fit that constraint rather than spilling onto a second page.

The print layout should include a short profile summary placed above the experience section, inspired by the current resume intro but optimized for the CV print format. This summary can reuse the same structural approach as `getResumeIntroText`, but it may need a dedicated shorter print-only version if the content density requires it.

**Technical Note:**
The implementation should rely on CSS Paged Media rules (`@media print`, `@page`, `page-break-*`, `break-inside`) rather than an external PDF engine. The main product tradeoff is overflow management: unlike desktop publishing software, HTML/CSS print layouts will not automatically stop content from flowing past the page boundary. To keep the result controlled, the CV model should support print-specific content shaping (for example a shorter summary field like `cvShort` and section visibility flags such as `displayOnPrint`).

For data architecture, the print feature should follow the same proven flow used by existing sections: `site-content.ts` -> API route -> Pinia store -> page/component consumption. No print-specific hardcoded data should be introduced directly in UI components.

**Print Header Scope Note (Draft):**
- Header identity should reuse existing data providers:
  - `getGlobalConfig()` for owner name
  - `getHeroData(locale)` for title, email, LinkedIn, and GitHub
- Print-specific header fields should be modeled explicitly for CV usage:
  - phone
  - residence area (prefer generic format, e.g. `Yvelines (IDF)`)
  - availability text
  - portfolio label + URL
- Given current public CV strategy, these fields are treated as intentionally public for the print route.

**Example Header Payload (FR draft):**
```ts
{
  ownerName: "Dylan Tettarasar",
  title: "Chef de Projet Digital & Product Owner Technique",
  email: "dtettarasar@gmail.com",
  linkedin: "https://www.linkedin.com/in/dylan-tettarasar-a89a0865/",
  github: "https://github.com/dtettarasar",
  phone: "+33 X XX XX XX XX",
  residence: "Yvelines (IDF)",
  availability: "Disponible immediatement | Metros/RER : Paris & IDF",
  portfolio: {
    label: "Portfolio",
    url: "https://dylan-tettarasar.dev"
  }
}
```

#### User Story 1: Create Print-Dedicated Route
**Status:** 🔴 Not Started  
**Priority:** High  
**Points:** 3

**User Story:**
As a candidate, I want a dedicated print CV route so that I can open a version specifically optimized for A4 output.

**Tasks:**
- [ ] Create a new page route (draft: `/resume-print-version`)
- [ ] Add page metadata/title for print context
- [ ] Keep route isolated from main responsive CV layout

**Acceptance Criteria:**
- [ ] Route is accessible directly by URL
- [ ] Route renders without breaking existing resume page
- [ ] Page title clearly indicates print CV view

---

#### User Story 2: Build A4 Print Layout System
**Status:** 🔴 Not Started  
**Priority:** High  
**Points:** 8

**User Story:**
As a recruiter/candidate, I want a clean A4 layout with proper print rules so that the CV is professional on paper/PDF.

**Tasks:**
- [ ] Define print CSS (`@page`, margins, print-safe typography)
- [ ] Build A4 container and section spacing rules
- [ ] Add page-break controls for major sections
- [ ] Remove non-print UI artifacts (navigation effects, animations, shadows if needed)
- [ ] Align print visual style with existing site branding (colors, spacing rhythm, section headers)
- [ ] Define icon/picto usage rules for print using existing Nuxt Icon set only where it improves readability
- [ ] Add CSS Paged Media guardrails (`break-inside: avoid`, section overflow rules)

**Acceptance Criteria:**
- [ ] Output fits A4 format without clipped content
- [ ] Content remains readable in print and PDF
- [ ] Major sections do not break awkwardly across pages
- [ ] Final print page is visually consistent with site identity without reducing print legibility
- [ ] Overflow strategy is explicitly controlled by data shaping rules, not left to browser defaults

---

#### User Story 3: Reuse Existing Resume Data in Print Page
**Status:** 🔴 Not Started  
**Priority:** High  
**Points:** 5

**User Story:**
As a maintainer, I want the print CV to reuse existing content sources so that updates stay synchronized with the main site.

**Tasks:**
- [ ] Reuse current stores/APIs for intro, experience, skills, education, languages
- [ ] Ensure locale compatibility (FR/EN behavior aligned with current i18n strategy)
- [ ] Define print-safe subset/order of resume content
- [ ] Confirm no dedicated Projects section in print CV; project depth is delegated to Portfolio/GitHub links in header
- [ ] Confirm unified Education section (degrees + Harvard/freeCodeCamp certifications in the same block)
- [ ] Introduce a print-specific content shape (example: `cvShort`, `displayOnPrint`, shorter bullet sets)
- [ ] Define experience print payload with `companyName`, `companyVenue`, `jobTitle`, `period`, `jobMissionsShort`, and `displayOnPrint`; keep `companyLogoSrc` digital-only
- [ ] Position `R&D Lab / Side Projects` as a full experience block carrying recent project/training narrative for 2024-present period
- [ ] Add editorial calibration pass for `R&D Lab / Side Projects` wording so it reads as serious professional experience (not a casual personal-project bucket)
- [ ] Define a short print profile summary above experience, with either a dedicated `getResumePrintIntroText` or a shortened print-only variant of `getResumeIntroText`
- [ ] Define print header payload by combining `getGlobalConfig()` + `getHeroData(locale)` + print-specific fields (`phone`, `residence`, `availability`, `portfolio`)
- [ ] Add explicit API/store pipeline for print header data (no direct component hardcoding)
- [ ] Define education print payload with only `issuer` (school/institution), `title` (diploma/certification), and `year`
- [ ] Define languages print payload with `name` and `level`, plus optional `img`/icon usage if space allows
- [ ] Define skills print payload with sectioned categories and skill items, reusing existing resume skill structure
- [ ] Add `displayOnPrint` at both skill-category and individual skill-item level to allow one-page content selection
- [ ] Add a print-focused projection/getter strategy in store layer to return only fields needed by CV print sections
- [ ] Update store interfaces/types to include print-oriented fields where needed (example: `displayOnPrint`, `jobMissionsShort`)
- [ ] Add dedicated Pinia getters for CV print projections (header, experience, education, skills, and summary)
- [ ] Ensure print components consume getters directly, with no filtering/mapping logic in template markup
- [ ] Define design direction for print skills inspired by current site resume section + Figma draft: grouped subsections, pill-style skill items, existing Nuxt Icon identifiers, dark background tokens, white text
- [ ] Validate whether language icons can be kept in print layout without harming one-page density; fallback to text-only rendering if space is too constrained

**Acceptance Criteria:**
- [ ] Print page displays the same up-to-date content as current data layer
- [ ] No duplicate hardcoded data introduced for print version
- [ ] Locale-specific content is respected
- [ ] Print page has a controlled content density so A4 overflow remains predictable
- [ ] Print CV excludes a dedicated Projects section while still providing project depth through portfolio links
- [ ] Experience blocks on print use a shorter mission list and remain within the single-page budget
- [ ] Company logos are excluded from the print version to preserve space for content
- [ ] A short profile summary appears above the experience section and remains concise enough to fit the one-page layout
- [ ] Header includes identity/contact fields required for applications (name, title, email, LinkedIn, GitHub, phone, residence, availability, portfolio)
- [ ] Header uses existing data-flow architecture (`site-content.ts` -> API -> store -> component)
- [ ] Education section after experiences uses only institution, diploma title, and graduation year
- [ ] Education remains a unified section including degrees and certifications (no split Certifications block for print)
- [ ] `R&D Lab / Side Projects` is presented with calibrated wording and concrete missions to support role credibility
- [ ] Languages section uses existing localized data with language name and proficiency level; icons remain optional based on print-space validation
- [ ] Skills section uses grouped subsections with selective visibility at category and item level to preserve one-page readability
- [ ] Skill pills may reuse existing Nuxt Icon identifiers and remain visually aligned with site branding
- [ ] Print page consumes a store-level projected model (no direct field filtering inside template markup)
- [ ] Print filtering rules are implemented in API/store/model layer, not in page/component templates
- [ ] Store interface contracts cover print-specific data needs without breaking existing non-print views

---

#### User Story 4: Add Entry Point from Main Resume Page
**Status:** 🔴 Not Started  
**Priority:** Medium  
**Points:** 3

**User Story:**
As a user, I want a visible action on the resume page so that I can quickly open the print CV version.

**Tasks:**
- [ ] Add CTA button/link on main resume page
- [ ] Ensure accessibility label and clear microcopy
- [ ] Open print page in expected context (same tab or new tab decision documented)

**Acceptance Criteria:**
- [ ] CTA is visible and understandable on desktop/mobile
- [ ] Navigation to print route works reliably
- [ ] UX wording communicates print/download intent

---

#### User Story 5: Trigger Browser Print/Download Flow
**Status:** 🔴 Not Started  
**Priority:** High  
**Points:** 5

**User Story:**
As a candidate, I want to trigger browser print from the print page so that I can save my CV as PDF for applications.

**Tasks:**
- [ ] Add print action (button + `window.print()` flow)
- [ ] Hide print controls in printed result
- [ ] Validate behavior with browser native “Save as PDF”
- [ ] Ensure print action works with current route branding (print view remains clean and application-ready)

**Acceptance Criteria:**
- [ ] User can print/save as PDF in one clear flow
- [ ] Print controls are not visible in final printed output
- [ ] No blocking UI issues during print action

---

#### User Story 6: Print QA & Cross-Browser Validation
**Status:** 🔴 Not Started  
**Priority:** Medium  
**Points:** 5

**User Story:**
As a product owner, I want validated print quality across major browsers so that the generated CV is reliable for real-world applications.

**Tasks:**
- [ ] QA pass on Chrome + Firefox (desktop)
- [ ] Validate A4 rendering, margins, page breaks, and text hierarchy
- [ ] Regression check on existing resume page
- [ ] Document known limitations and fallback recommendations
- [ ] Validate print color contrast and icon rendering quality (screen vs paper/PDF)
- [ ] Add unit tests for print-oriented store getters/projections (header, experience, education, skills, languages)
  - [ ] Header getter returns required fields and print-specific values
  - [ ] Experience getter enforces `displayOnPrint` and prefers `jobMissionsShort` for print
  - [ ] Education getter returns only issuer/title/year for print projection
  - [ ] Skills getter filters categories/items by `displayOnPrint`
  - [ ] Languages getter returns name/level with optional icon field
- [ ] Add tests for print filtering rules (`displayOnPrint`, `jobMissionsShort`, one-page-oriented subset selection)
  - [ ] Hidden entries (`displayOnPrint: false`) never reach print component props
  - [ ] Print-projected arrays preserve expected ordering for CV readability
- [ ] Add component tests for print sections rendering (header, experience, education, skills, languages) with projected store data
  - [ ] Sections render correctly from getter output without template-level filtering
  - [ ] Skills pill rendering remains stable with and without icons
- [ ] Add locale coverage tests (FR/EN) for print data mapping and section content
- [ ] Add interaction tests for print user flow
  - [ ] Resume page CTA opens print route reliably
  - [ ] Print button triggers `window.print()`
  - [ ] Print controls are excluded from print media snapshot/DOM checks
- [ ] Add non-regression tests to ensure existing digital resume route behavior remains unchanged

**Test Files Planning Matrix (Print CV):**

| Scope | File Path | Status | Test Work to Add / Update |
|------|-----------|--------|-----------------------------|
| Store tests (skills) | `tests/unit/frontend/skillsStore.spec.ts` | Update existing | Add getter/projection assertions for print payload (`displayOnPrint` at category/item level, ordering, icon optionality). |
| Store tests (education) | `tests/unit/frontend/educationsStore.spec.ts` | Update existing | Add print projection checks for unified Education block (`issuer`, `title`, `year`) and regression checks for existing behavior. |
| UI CTA tests | `tests/unit/frontend/button-link.spec.ts` | Update existing | Add assertions for CV print CTA semantics/microcopy and navigation target to print route. |
| Store tests (experience) | `tests/unit/frontend/experienceStore.spec.ts` | Create | Validate print getter behavior (`displayOnPrint`, `jobMissionsShort` priority, one-page-oriented ordering). |
| Store tests (languages) | `tests/unit/frontend/languageContentStore.spec.ts` | Create | Validate language projection for print (`name`, `level`, optional `img`) and FR/EN mapping. |
| Store tests (print orchestration) | `tests/unit/frontend/resumePrintStore.spec.ts` | Create | Validate aggregated getters for header/experience/education/skills/languages and no template-level filtering assumptions. |
| Component tests (print page) | `tests/unit/frontend/resume-print-page.spec.ts` | Create | Validate section rendering from projected store data (header, experience, education, skills, languages). |
| Component tests (skills print) | `tests/unit/frontend/resume-print-skills.spec.ts` | Create | Validate pills rendering with and without icons, category visibility, and compact layout assumptions. |
| Integration flow tests | `tests/integration/resume-print-flow.spec.ts` | Create | Validate end-to-end flow: CTA opens print route, print action triggers `window.print()`, print controls hidden in print mode. |

**Acceptance Criteria:**
- [ ] Print output passes visual QA checklist on target browsers
- [ ] No regression introduced on current resume route
- [ ] Known print constraints documented for future iterations
- [ ] Brand coherence preserved (colors/icons/typography) with print-safe adjustments documented
- [ ] Automated test suite validates print store projections and section rendering behavior
- [ ] Print filtering logic is covered by tests and does not rely on template-level conditions
- [ ] FR/EN print rendering paths pass tests with expected localized content
- [ ] CTA-to-print navigation and print action trigger are covered by automated interaction tests
- [ ] Stores and print components have dedicated test coverage for all print-specific data contracts

---

#### Story: Migrate Identity & Profile Content to site-content.ts (🔴 Not Started)
**Priority:** Medium  
**Points:** 5  
**Sprint Goal:** Centralize remaining hardcoded identity content from components to server-side data

**Context:** Phase 1 data consolidation is complete for business data (experiences, skills, educations, projects, languages, intro). However, some identity/profile content remains hardcoded in components. Moving it to site-content.ts ensures a single source of truth and prepares for future admin dashboard management.

**Tasks:**
- [ ] 🔴 Migrate hero-big.vue content to site-content.ts (3pts)
  - Extract personal name ("Hello World! I'm Dylan")
  - Extract title/subtitle ("Technical Product Owner · Fullstack Developer")
  - Extract social links (email, LinkedIn, GitHub URLs)
  - Extract profile picture path
  - Create `getProfileIdentity()` function in site-content.ts
  - Create GET /api/profile endpoint
  - Update hero-big.vue to consume from API/store

- [ ] 🔴 Migrate resume.vue intro paragraph to site-content.ts (2pts)
  - Extract intro paragraph text (TPO positioning narrative)
  - Add to existing `getIntroText()` or create `getResumeIntro()` function
  - Update resume.vue to consume from API/store

**Acceptance Criteria:**
- [ ] Hero identity data (name, title, links, photo) no longer hardcoded in component
- [ ] Resume intro paragraph fetched from server
- [ ] No visual or functional regression
- [ ] Consistent with existing store/API patterns

**Notes:**
- Lower priority than business data migration (already done)
- Not blocking for MVP launch
- Enables future single-source profile management

**Depends On:** None

---

### 2.2 Sprint Metrics
| Metric | Target | Actual |
|--------|--------|--------|
| Velocity | 20 pts | 28 pts (carry-over) |
| Bug Resolution Rate | 100% | TBD |
| Test Coverage | 80%+ | ~70% |
| Deployment Success | 100% | TBD |

---

## 3. Prioritized Backlog (Not Scheduled)

### Overview: Prioritization Strategy

**Current Priority Order (Q1-Q3 2026):**

1. ~~**Data Migration (Q1 - CRITICAL):** Move skills & education to site-content.ts~~ ✅ **DONE** (2026-03-01) — Skills, educations & projects migrated + stores + APIs
2. **Content Repositioning (Q1 - CRITICAL):** Rebrand as Technical Product Owner — 🟡 IN PROGRESS (intro done, experience descriptions pending)
3. **Contact Form (Q1 - HIGH):** Complete API + UI
4. **Mobile Optimization (Q1-Q2 - HIGH):** Ensure responsive perfection
5. **MongoDB Migration (Q2 - MEDIUM):** Move data to persistence layer
6. **Analytics & Monitoring (Q2 - MEDIUM):** Plausible, Sentry integration
7. **Blog Platform (Q2-Q3 - LOW):** Nice-to-have for content marketing
8. **Admin Dashboard (Q2-Q3 - LOW-PRIORITY):** Depends on MongoDB completion
9. **Advanced Features (Q4+ - FUTURE):** Dark mode, international SEO enhancements, E-commerce

**Why This Order?**
- Data consolidation must come first (unblocks everything downstream)
- Content repositioning is critical for job applications (career goal)
- Contact form completes MVP functionality
- Admin dashboard is deferred because current hardcoded approach is intentional and manageable
- Rushing admin UI before data is clean wastes effort on rework

### Epic 1: Admin Dashboard (Planned Q2-Q3 2026)
**Status:** 🔴 Not Started  
**Complexity:** High  
**Estimated Points:** 80

⚠️ **IMPORTANT NOTE:** This epic is NOT a priority for the immediate future. The current approach is:
1. **Phase 1 (Q1):** Consolidate data in site-content.ts (data-driven, no admin needed yet)
2. **Phase 2 (Q2-Q3):** Move to MongoDB + API endpoints
3. **Phase 3 (Q2-Q3):** Build admin dashboard UI

**Rationale:** Admin dashboard is complex and not needed until data moves to MongoDB. Earlier phases ensure data is clean and well-structured before building admin interfaces.

#### User Story: Admin Authentication
**Status:** 🔴 Not Started  
**Points:** 21

- [ ] Implement JWT token generation
- [ ] Add login page with user/password
- [ ] Add password reset flow
- [ ] Secure route guards
- [ ] Session timeout logic

**Acceptance Criteria:**
- [ ] Login works with valid credentials
- [ ] Invalid credentials show error
- [ ] Sessions expire after 30 minutes
- [ ] Password meets security requirements (12+ chars, special chars)

---

#### User Story: Profile Management UI
**Status:** 🔴 Not Started  
**Points:** 20

- [ ] Create admin panel layout
- [ ] Build form for editing profile/intro
- [ ] Build form for managing languages
- [ ] Build form for managing contact info
- [ ] Add image upload functionality

**Acceptance Criteria:**
- [ ] All profile fields editable
- [ ] Images upload to server
- [ ] Changes persist to MongoDB
- [ ] Validation shows errors
- [ ] Success messages on save

---

#### User Story: Experience Management UI
**Status:** 🔴 Not Started  
**Points:** 18

- [ ] Build experience list view
- [ ] Create experience add/edit form
- [ ] Implement drag-to-sort ordering
- [ ] Delete experience with confirmation
- [ ] Bulk import from CSV

**Acceptance Criteria:**
- [ ] CRUD operations work for experiences
- [ ] Drag-to-sort re-orders items
- [ ] Deleted items removed from database
- [ ] CSV import validates data
- [ ] Changes visible immediately on site

---

#### User Story: Project Management UI
**Status:** 🔴 Not Started  
**Points:** 21

- [ ] Build project list view with filters
- [ ] Create project add/edit form
- [ ] Multiple image upload for gallery
- [ ] Link management (demo, GitHub, etc.)
- [ ] Publish/unpublish toggle

**Acceptance Criteria:**
- [ ] All project fields editable
- [ ] Multiple images uploadable
- [ ] Unpublished projects don't appear on site
- [ ] Project ordering customizable
- [ ] Tech stack tags editable

---

### Epic 2: Blog & Content Management (Planned Q3 2026)
**Status:** 🔴 Not Started  
**Complexity:** Medium  
**Estimated Points:** 55

#### User Story: Markdown Blog Editor
**Status:** 🔴 Not Started  
**Points:** 25

- [ ] Implement markdown parser
- [ ] Build markdown editor UI with preview
- [ ] Add code syntax highlighting
- [ ] Support image embedding
- [ ] Auto-save drafts

**Acceptance Criteria:**
- [ ] Markdown renders correctly
- [ ] Code blocks syntax highlighted
- [ ] Preview updates in real-time
- [ ] Drafts saved every 30 seconds
- [ ] Can publish/unpublish posts

---

#### User Story: Blog Listing & Reading
**Status:** 🔴 Not Started  
**Points:** 15

- [ ] Create blog index page
- [ ] Individual blog post pages
- [ ] Categories and tags filtering
- [ ] Search functionality
- [ ] Related posts suggestions

**Acceptance Criteria:**
- [ ] All posts display with metadata
- [ ] Search finds posts by title/content
- [ ] Categories filter correctly
- [ ] Related posts relevant
- [ ] Page SEO optimized

---

#### User Story: Comments & Discussion
**Status:** 🔴 Not Started  
**Points:** 15

- [ ] Comments system on blog posts
- [ ] Comment moderation queue
- [ ] Nested reply threads
- [ ] Email notifications for replies
- [ ] Admin delete comments

**Acceptance Criteria:**
- [ ] Comments save to database
- [ ] Moderation queue functional
- [ ] Spam filtering active
- [ ] Notifications sent to email
- [ ] Deleted comments removed

---

### Epic 3: Analytics & SEO (Planned Q2 2026)
**Status:** 🔴 Not Started  
**Complexity:** Medium  
**Estimated Points:** 34

#### User Story: Visitor Analytics
**Status:** 🔴 Not Started  
**Points:** 15

- [ ] Integrate Plausible Analytics
- [ ] Track page views and sessions
- [ ] Monitor referral sources
- [ ] Track goal conversions (contact form)
- [ ] Dashboard visualization

**Acceptance Criteria:**
- [ ] Analytics data collected
- [ ] Dashboard shows key metrics
- [ ] Historical data preserved
- [ ] Privacy: No personal data tracked
- [ ] GDPR compliant

---

#### User Story: Search Engine Optimization
**Status:** 🔴 Not Started  
**Points:** 10

- [ ] Add meta tags for all pages
- [ ] Implement structured data (JSON-LD)
- [ ] Add sitemap.xml generation
- [ ] Add robots.txt
- [ ] Optimize image alt text
- [ ] Improve Core Web Vitals

**Acceptance Criteria:**
- [ ] All pages have meta descriptions
- [ ] Lighthouse SEO score > 95
- [ ] Sitemap includes all pages
- [ ] Structured data validated
- [ ] robots.txt up-to-date

---

#### User Story: Performance Monitoring
**Status:** 🔴 Not Started  
**Points:** 9

- [ ] Integrate Sentry for error tracking
- [ ] Set up uptime monitoring
- [ ] Create performance dashboards
- [ ] Alert configuration
- [ ] Weekly performance reports

**Acceptance Criteria:**
- [ ] Errors tracked in Sentry
- [ ] Uptime monitored 24/7
- [ ] Alerts on critical issues
- [ ] Performance baseline established
- [ ] Weekly reports generated

---

### Epic 5: Code Quality & Architecture (Planned Q1-Q2 2026)
**Status:** � In Progress  
**Complexity:** Medium  
**Estimated Points:** 55

⚠️ **IMPORTANT NOTE:** This epic focuses on improving code quality, architecture patterns, and maintainability. These improvements enable cleaner future development, better team collaboration, and reduced technical debt.

#### User Story: Refactor Stores to Composition API (🔴 Not Started)
**Priority:** Medium  
**Points:** 13  
**Sprint Goal:** Migrate existing state management from Options API to modern Composition API pattern

**Context:** Current stores (`experienceStore`, `introStore`, `languageContentStore`) use Options API pattern. New stores (`skillsStore`, `educationsStore`) have been created using Composition API. For consistency, code quality, and future-proofing, all existing stores should be migrated to Composition API.

**Why This Matters:**
- **Modern Standards:** Composition API is Vue 3 + Nuxt 3 recommended pattern
- **TypeScript:** Better type inference, less `as` casting needed
- **Testability:** Pure functions easier to unit test
- **Reusability:** Logic extractible into composables
- **Maintainability:** Scales better than Options API (most critical > 500 loc)
- **Future-Proof:** Aligns with Vue 4 direction
- **Code Consistency:** All stores follow same pattern

**Tasks:**

- [ ] 🔴 Refactor experienceStore to Composition API (4pts)
  - Convert `state()` object to `ref()` declarations
  - Convert `actions` to functions
  - Convert `getters` to function-based getters
  - Update Pinia `defineStore` wrapper
  - Maintain backward compatibility with current components (no component changes needed)
  - Add error handling following skillsStore/educationsStore pattern
  - Implement caching (avoid refetch if data already loaded)

- [ ] 🔴 Refactor introStore to Composition API (3pts)
  - Same conversion process as experienceStore
  - Ensure intro text arrays loaded once and reused
  - Add proper TypeScript interfaces for intro data
  - Maintain API compatibility with current components

- [ ] 🔴 Refactor languageContentStore to Composition API (3pts)
  - Same conversion process
  - Add getters for language filtering (e.g., `getLanguageByName()`)
  - Implement caching pattern
  - Type safety for language objects

- [ ] 🔴 Testing & Validation (3pts)
  - ⚠️ **Write unit tests for each refactored store during refactoring (TDD approach)**
  - Follow same pattern as skillsStore/educationsStore/projectsStore tests
  - Unit tests for each store's actions/getters
  - Component integration tests (ensure components still work)
  - No console errors or warnings in browser
  - Verify caching behavior (no unnecessary re-fetches)
  - Performance benchmarks (before/after bundle size)

**Acceptance Criteria:**
- [ ] All 3 stores (experience, intro, languages) refactored to Composition API
- [ ] Store structure matches skillsStore/educationsStore pattern
- [ ] Zero breaking changes to component API (components don't need updates)
- [ ] TypeScript types inferred correctly (minimal type assertions)
- [ ] All getters functional and tested
- [ ] Caching implemented consistently across all stores
- [ ] Unit tests cover all actions/getters
- [ ] Component integration tests pass
- [ ] Bundle size improved or neutral
- [ ] Developer experience improved (cleaner code, easier to extend)

**Code Pattern Reference:**
```typescript
// AFTER: Composition API pattern
export const useExperienceStore = defineStore('experience', () => {
  // State
  const data = ref<Experience[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  // Actions
  async function fetchData() { ... }

  // Getters
  function getExperienceByCompany(name: string) { ... }

  return { data, loading, error, fetchData, getExperienceByCompany }
})
```

**Notes:**
- This is **NOT urgent** for MVP but important for code quality
- No changes required to components (backward compatible API)
- Enables future extraction of logic into composables
- Reduces technical debt score
- Demonstrates modern Vue/Nuxt expertise

**Depends On:** None (can be done in-parallel with other work)

**Blocked By:** None

---

#### User Story: Tests for New Stores & Components (� In Progress)
**Priority:** High  
**Points:** 21  
**Sprint Goal:** Ensure reliability and prevent regressions on newly created stores, API endpoints, and refactored components

**Context:** Three new Composition API stores (`skillsStore`, `educationsStore`, `projectsStore`) and their associated API endpoints (`/api/skills`, `/api/educations`, `/api/projects`) were created during Phase 1 data consolidation. The consuming components (`skill-section.vue`, `edu-section.vue`, `project-section.vue`) were also refactored to use these stores. Currently, none of these have test coverage.

**Why This Matters:**
- These stores are the backbone of content rendering — a regression breaks the entire site
- API endpoints need validation of response format (components depend on exact structure)
- Store caching logic and error handling must be verified
- Components consuming stores via `useAsyncData` need integration tests
- Current test coverage is ~70%, target is 80%+

**Tasks:**

- [x] 🟢 Unit tests: skillsStore (3pts) — **DONE Mar 2** (23 tests passing)
  - ✅ Test `fetchData()` calls API and populates `data`
  - ✅ Test caching: second call doesn't re-fetch
  - ✅ Test `getSkillByLabel()` returns correct skill
  - ✅ Test `getSkillCount()` returns total across all sections
  - ✅ Test `getSectionByTitle()` returns correct section
  - ✅ Test error state when API fails (3 variants: message, statusMessage, fallback)
  - ✅ Test loading state transitions

- [x] 🟢 Unit tests: educationsStore (3pts) — **DONE Mar 2** (31 tests passing)
  - ✅ Test `fetchData()` calls API and populates `data`
  - ✅ Test caching behavior
  - ✅ Test `getEducationByTitle()` returns correct education (partial, case-insensitive)
  - ✅ Test `getEducationsByYear()` filters correctly
  - ✅ Test `getEducationsByIssuer()` filters correctly (partial, case-insensitive)
  - ✅ Test `getEducationCount()` returns correct count
  - ✅ Test `hasCredential()` returns boolean based on certificationLink
  - ✅ Test error/loading states (3 variants + reset)

- [x] 🟢 Unit tests: projectsStore (3pts) — **DONE Mar 2** (22 tests passing)
  - ✅ Test `fetchData()` calls API and populates `data`
  - ✅ Test caching behavior
  - ✅ Test `getProjectByTitle()` returns correct project (with/without video)
  - ✅ Test `getProjectCount()` returns correct count
  - ✅ Test `getProjectsByStackIcon()` filters by tech stack
  - ✅ Test error/loading states (3 variants + reset)

- [ ] 🔴 Unit tests: API endpoints (4pts)
  - Test GET /api/skills returns `{ status: 'success', data: [...], timestamp }`
  - Test GET /api/educations returns correct format
  - Test GET /api/projects returns correct format
  - Verify data structure matches TypeScript interfaces
  - Test error responses (simulate site-content.ts failure)
  - Validate response timestamps

- [ ] 🔴 Integration tests: skill-section.vue (3pts)
  - Test component renders all skill sections from store
  - Test each section displays title and icon
  - Test skill items render with correct labels
  - Test loading state display
  - Test error state fallback
  - Mock store data for deterministic tests

- [ ] 🔴 Integration tests: edu-section.vue (3pts)
  - Test component renders all education items from store
  - Test certification links render when present
  - Test courseDetails render when present
  - Test items without certificationLink render correctly
  - Mock store data for deterministic tests

- [ ] 🔴 Integration tests: project-section.vue (2pts)
  - Test component renders all projects from store
  - Test project cards display title, description, stack icons, links
  - Test video link renders when present
  - Mock store data for deterministic tests

**Acceptance Criteria:**
- [ ] All 3 new stores have unit tests covering actions, getters, and error states
- [ ] All 3 API endpoints have unit tests validating response format
- [ ] All 3 refactored components have integration tests
- [ ] Caching logic verified: no duplicate API calls
- [ ] Error handling verified: stores handle API failures gracefully
- [ ] Tests follow existing patterns (Vitest + `@nuxt/test-utils`)
- [ ] All tests pass in CI (`vitest run`)
- [ ] Test coverage reaches 80%+ target

**Test Pattern Reference:**
```typescript
// Store unit test pattern
import { setActivePinia, createPinia } from 'pinia'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { useSkillsStore } from '~/stores/skillsStore'

describe('skillsStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('fetches and caches data', async () => {
    const store = useSkillsStore()
    vi.stubGlobal('$fetch', vi.fn().mockResolvedValue({ data: mockSkills }))
    await store.fetchData()
    expect(store.data).toHaveLength(6)
    // Second call should not re-fetch
    await store.fetchData()
    expect($fetch).toHaveBeenCalledTimes(1)
  })
})
```

```typescript
// Component integration test pattern
import { mountSuspended } from '@nuxt/test-utils/runtime'
import SkillSection from '~/components/resume/skill-section.vue'

describe('SkillSection', () => {
  it('renders skill sections from store', async () => {
    const wrapper = await mountSuspended(SkillSection)
    expect(wrapper.findAll('[data-testid="skill-section"]')).toHaveLength(6)
  })
})
```

**Notes:**
- Priority is HIGH because these stores serve critical content
- Existing tests use `mountSuspended` from `@nuxt/test-utils/runtime` (see hero-small.spec.ts)
- Follow same directory structure: `tests/unit/frontend/` for stores & components, `tests/unit/backend/` for API endpoints
- Can be parallelized: store tests and component tests are independent

**Depends On:** None (stores and components already implemented)

---

### Epic 6: Advanced Features (Q4 2026+)
**Status:** 🔴 Not Started  
**Complexity:** High  
**Estimated Points:** 89

#### User Story: Dark Mode Theme
**Status:** 🔴 Not Started  
**Points:** 8

- [ ] Add theme toggle component
- [ ] Implement dark CSS variables
- [ ] Persist theme preference
- [ ] System preference detection
- [ ] Smooth transition animation

**Acceptance Criteria:**
- [ ] Dark mode visually appealing
- [ ] Toggle saves preference
- [ ] Respects system settings
- [ ] No FOUC (flash of unstyled content)

---

#### User Story: International SEO Enhancements
**Status:** 🔴 Not Started  
**Points:** 8

- [ ] Evaluate `no_prefix` vs prefixed locale routing (`/fr`, `/en`) strategy
- [ ] Add `hreflang` tags per localized page metadata
- [ ] Add canonical URL rules per locale page version
- [ ] Validate multilingual indexing in Search Console

**Acceptance Criteria:**
- [ ] SEO metadata clearly declares language variants
- [ ] Search engines index FR/EN pages without duplicate content penalty
- [ ] Routing strategy documented and validated in production

---

#### User Story: Resume Download (PDF Export)
**Status:** 🔴 Not Started  
**Points:** 12

- [ ] Implement PDF generation
- [ ] Create printable resume template
- [ ] Download button on resume page
- [ ] Print-to-PDF styling
- [ ] A4 page sizing

**Acceptance Criteria:**
- [ ] PDF downloads successfully
- [ ] PDF formatting matches screen
- [ ] All content included
- [ ] File size < 500KB
- [ ] Metadata added (author, title)

---

#### User Story: Email Newsletter
**Status:** 🔴 Not Started  
**Points:** 18

- [ ] Subscriber signup form
- [ ] Email campaign management
- [ ] Newsletter template builder
- [ ] Drip campaign automation
- [ ] Unsubscribe link (GDPR)

**Acceptance Criteria:**
- [ ] Signup works
- [ ] Subscribers stored securely
- [ ] Campaigns send successfully
- [ ] GDPR compliant
- [ ] Unsubscribe function

---

#### User Story: Portfolio Commenting System
**Status:** 🔴 Not Started  
**Points:** 16

- [ ] Add comments to projects
- [ ] Threaded replies to comments
- [ ] Admin comment moderation
- [ ] Email notifications
- [ ] Social proof display

**Acceptance Criteria:**
- [ ] Comments save to database
- [ ] Replies nest properly
- [ ] Moderation queue works
- [ ] Notifications sent
- [ ] Comments visible on project

---

#### User Story: E-Commerce Integration (Product Sale)
**Status:** 🔴 Not Started  
**Points:** 15

- [ ] Integrate Stripe payment
- [ ] Product listing for digital goods
- [ ] Shopping cart
- [ ] Secure checkout
- [ ] Order management admin panel

**Acceptance Criteria:**
- [ ] Products displayable with price
- [ ] Cart functional
- [ ] Checkout secure (HTTPS)
- [ ] Payments processed
- [ ] Order confirmation email sent

---

---

## 4. Bug Backlog

### Severity Levels
- 🔴 **Critical:** App unusable, security risk
- 🟠 **High:** Major functionality broken
- 🟡 **Medium:** Feature impaired, workaround exists
- 🟢 **Low:** Minor UI issue, cosmetic

### Reported Bugs

#### Bug #1: MongoDB Connection Timeout on Startup
**Severity:** 🔴 Critical  
**Status:** 🟢 Done  
**Points:** 5

**Description:** Application fails to start if MongoDB takes > 5 seconds to initialize.

**Reproduction Steps:**
1. Stop MongoDB container
2. Start application
3. Application crashes

**Root Cause:** Connection timeout set too low (default 5s)  
**Fix:** Increased serverSelectionTimeoutMS to 30s

**Acceptance Criteria:**
- [ ] App waits for MongoDB
- [ ] Clear console message when connecting
- [ ] Retries connection periodically

---

#### Bug #2: Contact Form Not Sending Emails
**Severity:** 🟠 High  
**Status:** 🟡 In Progress  
**Points:** 8

**Description:** Contact form submission stores message but doesn't send notification email.

**Reproduction Steps:**
1. Fill contact form
2. Click submit
3. Check email inbox
4. No email received

**Root Cause:** Email service not configured  
**Workaround:** Check MongoDB for messages manually

**Next Steps:**
- [ ] Integrate SendGrid or Mailgun API
- [ ] Add SMTP configuration to .env
- [ ] Test email delivery
- [ ] Add retry logic for failed sends

---

#### Bug #3: Images Not Loading on Mobile
**Severity:** 🟠 High  
**Status:** 🟡 In Progress  
**Points:** 5

**Description:** Static images (logos, thumbnails) don't load on mobile 4G.

**Reproduction Steps:**
1. Access site on mobile
2. Throttle network to 4G
3. Portfolio images not visible

**Root Cause:** Images not optimized; no lazy loading  
**Workaround:** Access on desktop or WiFi

**Next Steps:**
- [ ] Implement lazy loading
- [ ] Add responsive images (srcset)
- [ ] Optimize image sizes
- [ ] Test on slow connection

---

#### Bug #4: Lighthouse Score Lower on Mobile
**Severity:** 🟡 Medium  
**Status:** 🔴 Not Started  
**Points:** 5

**Description:** Mobile Lighthouse score is 78 instead of target 90.

**Issues:**
- [ ] CLS (layout shift) on hero section
- [ ] LCP slow on 4G
- [ ] Unused JavaScript

**Solution:**
- [ ] Fix layout shifts (preload skeleton)
- [ ] Code split critical path
- [ ] Remove unused jQuery/libs

---

#### Bug #5: Experience Section HTML Not Rendering
**Severity:** 🟡 Medium  
**Status:** 🟢 Done  
**Points:** 3

**Description:** HTML in experience missions shows as text, not rendered.

**Root Cause:** Vue Security: v-html needs explicit binding  
**Fix:** Changed to v-html binding in template

---

---

## 5. Technical Debt

### Current Tech Debt Items

| Item | Severity | Points | Notes |
|------|----------|--------|-------|
| ComponentTests Missing | Medium | 8 | Add test coverage for all components — **stores & data components prioritized (see Epic 5)** |
| Database Query N+1 | High | 13 | Audit and fix inefficient queries |
| Type Safety | Medium | 5 | Add stricter TypeScript checks |
| API Error Handling | High | 8 | Standardize error responses |
| Documentation Outdated | Low | 3 | Update setup guide |
| Dependency Audit | Low | 5 | Update vulnerable packages |
| CSS Code Duplication | Low | 3 | Refactor repeated Tailwind classes |
| Environment Config | Medium | 5 | Move secrets to proper secret manager |

**Total Tech Debt:** 50 points (1 sprint)

**Recommendation:** Allocate 20% of sprint capacity to tech debt (4 points/sprint)

---

## 6. Roadmap Timeline

### Q1 2026 (Jan - Mar) - DATA CONSOLIDATION & CAREER POSITIONING
- ✅ Core pages (Home, Resume, Portfolio)
- ✅ Database integration
- 🟡 Contact form (in-progress)
- ✅ **Data migration: Skills, Education & Projects to site-content.ts** (DONE - Mar 1)
- 🟡 **Content repositioning: Product Owner narrative** (IN PROGRESS - intro done)
- ✅ **Tests: New store unit tests** (DONE - Mar 2, 76 tests: skills 23 + educations 31 + projects 22)
- 📋 **Tests: API endpoints & component integration** (Mar 5-10)
- 📋 Mobile optimization
- 📋 Performance optimization

**Target Launch Date:** March 31, 2026  
**Estimated Completion:** 85%

**Why This Order:**
- Data migration unblocks downstream work (APIs, MongoDB, admin)
- Content repositioning directly supports job applications + profile credibility
- Both complete before end of Q1 for recruiter impact

---

### Q2 2026 (Apr - Jun) - MONGODB MIGRATION & MONITORING
- 📋 MongoDB migration (move data from site-content.ts to persistence)
- 📋 API endpoints for all data models
- 📋 Analytics & Monitoring (Sentry, Plausible)
- 📋 SEO optimization
- 📋 Admin Dashboard foundation (NOT full UI yet)

**Target Completion:** 90%

**Rationale:** Admin dashboard begins but is not fully built until Q3 when data layer is stable.

---

### Q3 2026 (Jul - Sep) - ADMIN & FEATURES
- 📋 Admin Dashboard UI (auth, CRUD interfaces)
- 📋 Blog platform (if time permits)
- 📋 Advanced features (newsletter, comments)
- 📋 E-commerce integration
- 📋 Performance tier-2 optimization
- 📋 Security audit & hardening

**Target Completion:** 100%

---

### Q4 2026+ (Oct - Dec & Beyond)
- 📋 AI-powered recommendations
- 📋 Mobile app (React Native)
- 📋 Real-time notifications
- 📋 Marketplace for portfolio themes
- 📋 Community features

---

## 7. Dependencies & Blockers

### External Dependencies
| Dependency | Status | Impact |
|------------|--------|--------|
| EmailService (SendGrid) | ⏳ Pending | Contact form |
| Image Hosting (CDN) | ⏳ Pending | Portfolio performance |
| SSL Cert (Let's Encrypt) | ✅ Ready | HTTPS/Security |
| Domain Registration | ✅ Ready | Public availability |
| Server Hosting | ✅ Ready | Deployment |

### Internal Blockers
| Blocker | Resolution | Timeline |
|---------|-----------|----------|
| Contact form email config | Integrate SendGrid API | Week of Mar 3 |
| Mobile optimization approval | Design review required | Week of Mar 3 |
| Admin dashboard design | UX mockups needed | Week of Mar 10 |

---

## 8. Sprint Planning Template

### [Sprint NN] - [Dates]
**Sprint Goal:** [What we're trying to accomplish]

**Planned Velocity:** [X] points

**Stories:**
1. [Story 1] - [X] pts
2. [Story 2] - [Y] pts

**Risks:**
- [Potential risk]

**Success Metrics:**
- Velocity target met
- Bug resolution rate > 90%
- Test coverage maintained > 80%

---

## 9. Change Log

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | 2026-02-28 | Initial backlog creation | Dylan Tettarasar |
| 1.1 | 2026-06-27 | Added completed i18n story, SSR consistency notes, and updated future roadmap item | Dylan Tettarasar |
| 1.2 | 2026-06-30 | Added draft Sprint 25.2 (Resume Print A4) with 6 structured user stories | Dylan Tettarasar |
| 1.3 | 2026-06-30 | Added print header scope (fields + example payload) and explicit technical data-flow note for resume-print | Dylan Tettarasar |
| 1.4 | 2026-06-30 | Confirmed print content strategy: no dedicated Projects section, unified Education block, and editorial positioning guidance for R&D Lab experience | Dylan Tettarasar |
| 1.5 | 2026-06-30 | Added explicit automated test scope for CV print stores/getters/components, locale coverage, and non-regression checks | Dylan Tettarasar |
| 1.6 | 2026-07-01 | Expanded test story with detailed store/component cases and explicit CTA + print-trigger interaction coverage | Dylan Tettarasar |
| 1.7 | 2026-07-01 | Added detailed test files planning matrix listing existing specs to update and new print-focused specs to create | Dylan Tettarasar |

---

## 10. Related Documents
- [PRD.md](PRD.md) - Product requirements
- [ARCHITECTURE.md](ARCHITECTURE.md) - Technical architecture
- [Main README](../../README.md) - Setup guide
- Jira/GitHub Issues (to be linked)

---

*This backlog is a living document. Update regularly as priorities change.*  
*Last Sprint Review: 2026-06-27*  
*Next Sprint Planning: 2026-06-30 (drafted Sprint 25.2)*