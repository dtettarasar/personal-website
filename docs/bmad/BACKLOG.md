# 🛠️ Development Backlog & Roadmap
## Personal Site 25 - Implementation Plan

**Version:** 1.0  
**Status:** Active Development  
**Last Updated:** 2026-02-28  
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

#### Story: Data Migration: Skills & Education (🔴 Not Started)
**Priority:** High  
**Points:** 8  
**Sprint Goal:** Migrate hardcoded skills and education data to centralized site-content.ts

**Context:** Currently skills and education are hardcoded in component state. They need to be moved to site-content.ts (Phase 1 of data consolidation). Future phases will migrate to MongoDB + admin dashboard, but for now consolidation is key.

**Tasks:**
- [ ] 🔴 Migrate skills from skill-section.vue to site-content.ts (3pts)
  - Extract skillSections array from component
  - Create getSkills() function in site-content.ts
  - Update skill-section.vue to consume from API
  - Create GET /api/skills endpoint
  - Ensure response format matches component expectations

- [ ] 🔴 Migrate education from edu-section.vue to site-content.ts (3pts)
  - Extract educations array from component
  - Create getEducations() function in site-content.ts
  - Update edu-section.vue to consume from API
  - Create GET /api/educations endpoint
  - Validate data format

- [ ] 🔴 Testing & validation (2pts)
  - Verify all skills display correctly
  - Verify all certifications display correctly
  - Test responsive rendering
  - No data loss or duplication

**Acceptance Criteria:**
- [ ] Skills no longer hardcoded in component (data fetched from API)
- [ ] Education no longer hardcoded in component (data fetched from API)
- [ ] /api/skills returns properly formatted response
- [ ] /api/educations returns properly formatted response
- [ ] All data persists across page reloads
- [ ] No console errors or warnings
- [ ] Mobile rendering unaffected

**Notes:**
- This is **Phase 1 (Consolidation)** of data migration strategy (see MODEL.md)
- Phase 2 (MongoDB) will come later and depends on this completion
- Admin dashboard comes after Phase 2
- This unblocks profile completeness for PO repositioning

---

#### Story: Content Repositioning: Product Owner Profile (🔴 Not Started)
**Priority:** High  
**Points:** 8  
**Sprint Goal:** Reposition profile narrative towards "Technical Product Owner & Full-Stack Developer" target role

**Context:** Based on career analysis, target role is Technical Product Owner at companies like Davidson. Current content emphasizes frontend development. Need to reframe narrative to highlight:
- Product strategy & backlog management experience (7 years)
- Technical depth (Docker, APIs, DevOps, full-stack)
- Project management & cross-functional communication
- Business-to-technical translation skills

**Tasks:**
- [ ] 🔴 Update intro bio paragraph (2pts)
  - Current: "frontend developer with passion for clean interfaces"
  - Target: "Technical Product Owner with 7+ years bridging product strategy and technical execution"
  - Highlight: PO experience, technical credibility, business acumen

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
- [ ] Intro clearly positions as "Technical Product Owner"
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

1. **Data Migration (Q1 - CRITICAL):** Move skills & education to site-content.ts
2. **Content Repositioning (Q1 - CRITICAL):** Rebrand as Technical Product Owner
3. **Contact Form (Q1 - HIGH):** Complete API + UI
4. **Mobile Optimization (Q1-Q2 - HIGH):** Ensure responsive perfection
5. **MongoDB Migration (Q2 - MEDIUM):** Move data to persistence layer
6. **Analytics & Monitoring (Q2 - MEDIUM):** Plausible, Sentry integration
7. **Blog Platform (Q2-Q3 - LOW):** Nice-to-have for content marketing
8. **Admin Dashboard (Q2-Q3 - LOW-PRIORITY):** Depends on MongoDB completion
9. **Advanced Features (Q4+ - FUTURE):** Dark mode, i18n, E-commerce

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
**Status:** 🔴 Not Started  
**Complexity:** Medium  
**Estimated Points:** 34

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

#### User Story: Multi-Language Support (i18n)
**Status:** 🔴 Not Started  
**Points:** 20

- [ ] Implement Vue i18n
- [ ] Create French translations
- [ ] Language switcher component
- [ ] URL locale routing (/en, /fr)
- [ ] SEO for multi-language

**Acceptance Criteria:**
- [ ] Both languages render correctly
- [ ] Language switcher functional
- [ ] URLs reflect language choice
- [ ] Translations complete
- [ ] hreflang tags for SEO

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
| ComponentTests Missing | Medium | 8 | Add test coverage for all components |
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
- 📋 **Data migration: Skills & Education to site-content.ts** (CRITICAL - Mar 5-7)
- 📋 **Content repositioning: Product Owner narrative** (CRITICAL - Mar 8-14)
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

---

## 10. Related Documents
- [PRD.md](PRD.md) - Product requirements
- [ARCHITECTURE.md](ARCHITECTURE.md) - Technical architecture
- [Main README](../../README.md) - Setup guide
- Jira/GitHub Issues (to be linked)

---

*This backlog is a living document. Update regularly as priorities change.*  
*Last Sprint Review: 2026-02-28*  
*Next Sprint Planning: 2026-03-14*
