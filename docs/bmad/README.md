# 📐 BMAD Methodology - Personal Site 25

## Overview

The **BMAD Framework** is a comprehensive, integrated approach to managing software development and maintenance. It ensures alignment between business goals, technical architecture, and implementation. This folder documents all four dimensions.

---

## 🎯 BMAD Structure

### **B - Business** 📊
**File:** [PRD.md](PRD.md)

Defines the *why* and *what* of the project:
- Product vision and objectives
- User personas and use cases
- Feature requirements and acceptance criteria
- Success metrics and KPIs
- Market/user analysis

**Current State:** Personal portfolio & CV management system
**Target Users:** Professional individuals seeking to showcase skills, experience, and portfolio projects

---

### **M - Model** 🗂️
**File:** `MODEL.md` (to be created)

Defines the *data structure* and *domain logic*:
- Data models and schemas
- Entity relationships and constraints
- Business rules and validation logic
- State management patterns
- Database normalization strategy

**Current Models:**
- `Profile` (intro text, personal info)
- `Experience` (job history, missions)
- `Language` (language proficiency)
- `Project` (portfolio items)
- `ContactMessage` (form submissions)

---

### **A - Architecture** 🏗️
**File:** [ARCHITECTURE.md](ARCHITECTURE.md)

Defines the *technical design* and *system interactions*:
- System components and layers
- Technology stack justification
- Infrastructure and deployment
- API contracts and data flow
- Security and performance considerations
- Scalability and extensibility patterns

**Current Stack:**
- Frontend: Nuxt 3, Vue 3, Tailwind CSS
- Backend: Nuxt Server API, Node.js
- Database: MongoDB with Mongoose ODM
- Deployment: Docker Compose, Caddy
- Observability: Monitoring and error tracking

---

### **D - Development** 🛠️
**File:** [BACKLOG.md](BACKLOG.md)

Defines the *implementation roadmap* and *delivery plan*:
- Feature backlog prioritized by value
- Sprint planning and resource allocation
- Technical debt tracking
- Dependency management
- Release schedule and versioning
- Testing strategy and QA criteria
- Documentation and knowledge sharing

**Current Development Cycles:**
- Active development features
- Bug fixes and hotfixes
- Technical debt reduction
- Performance optimization

---

## 🔄 BMAD Workflow

```
PRD (What to build)
   ↓
ARCHITECTURE (How to build it)
   ↓
BACKLOG (Who builds & when)
   ↓
Implementation & Testing
   ↓
Review & Iterate
```

### Integration Points
1. **PRD ↔ ARCHITECTURE:** Features must have a clear technical design
2. **ARCHITECTURE ↔ BACKLOG:** Each task must map to an architectural component
3. **BACKLOG ↔ USER STORIES:** Clear acceptance criteria from PRD
4. **Metrics:** Use KPIs from PRD to measure backlog progress

---

## 📋 Usage Guidelines

### Adding New Features
1. Define feature in **PRD** (user value, acceptance criteria)
2. Design technical solution in **ARCHITECTURE** (APIs, components, data flow)
3. Add tasks to **BACKLOG** with sprint estimates and dependencies

### Making Architectural Decisions
1. Document the decision in **ARCHITECTURE** with rationale
2. Identify impacted features in **PRD**
3. Update **BACKLOG** with refactoring tasks

### Updating Data Models
1. Validate against **PRD** use cases
2. Update **MODEL** section with schema changes
3. Document migrations in **BACKLOG**
4. Update **ARCHITECTURE** data flow section

---

## 🔍 Governance

- **Owner:** Dylan Tettarasar
- **Review Frequency:** 
  - PRD: Reviewed quarterly
  - ARCHITECTURE: Reviewed per major feature
  - BACKLOG: Updated per sprint (2 weeks)
- **Change Log:** See footer of each document

---

## 📚 Related Documentation
- [Main README](../../README.md) - Project setup and deployment
- Architecture diagrams (to be added)
- API Documentation (to be added)
- Database Schema Diagrams (to be added)

---

*Last Updated: 2026-02-28*
*Next Review: 2026-03-28*
