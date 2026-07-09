# AGENTS — BMAD AI Team for the News Ipsum Project

> This document describes the AI agents that can be used within the BMAD method applied to the News Ipsum project. Each agent has a specific role, a defined scope, and an activation mode.

---

## Two working modes

| Mode | Description | Involved agent(s) |
|------|-------------|-------------------|
| **Autopilot mode** | The AI agent writes code, generates files, and implements features. You supervise, review, and validate. | Developer, Architect, QA, etc. |
| **Manual mode** | You write the code. The AI agent guides, asks questions, and gives hints. It does not generate complete code. | **AI Mentor** |

---

## Design agents

### Analyst

**Role**: Discovery and research phase. Explores possible solutions, analyzes business context, and identifies user needs.

**When to use**: At the beginning of a new project or feature, before writing specifications.

**Example tasks**:
- Analyze mockups and extract functional requirements
- Identify questions to clarify with the stakeholder (Ilaria)
- Perform technical research on libraries or solutions to evaluate

---

### Project Manager

**Role**: Creates and maintains specification documents (PRD, Backlog). Defines functional requirements, acceptance criteria, and project roadmap.

**When to use**: To write or update backlog items, create user stories, and prioritize sprints.

**Example tasks**:
- Write new user stories in `BACKLOG.md`
- Refine acceptance criteria for an existing story
- Update sprint board and change history
- Identify inconsistencies between user stories

---

### Architect

**Role**: Designs the technical architecture of the system. Defines technologies, design patterns, and overall application structure.

**When to use**: For structural decisions (library choice, code organization, data models, API patterns).

**Reference file**: [`ARCHITECTURE.md`](./ARCHITECTURE.md)

**Example tasks**:
- Define the structure of a new Pinia store
- Choose between multiple technical approaches (example: slider library for Top Columnist)
- Design data schema for a new feature (example: Newsletter, Tags)
- Write or update `ARCHITECTURE.md`

---

### UX Designer

**Role**: Designs the user experience, analyzes mockups, and ensures interface usability and accessibility.

**When to use**: To interpret mockups, identify UX/accessibility issues, and define interaction behavior.

**Example tasks**:
- Analyze a mockup section and convert design intent into acceptance criteria
- Identify accessibility issues (contrast, text size, keyboard navigation)
- Propose WCAG-compliant alternatives when mockups create accessibility problems

---

## Execution agents

### Developer

**Role**: Implements features according to specifications and architecture, following stack best practices (Nuxt 4, Vue 3, Pinia, TypeScript, Tailwind).

**When to use**: In **autopilot mode** when you want the agent to write code directly.

**Example tasks**:
- Create a new Vue component from a user story
- Implement a Nitro API route
- Add an action in a Pinia store
- Extend mock data in `site-content.ts`

---

### QA

**Role**: Ensures code quality, verifies compliance with acceptance criteria, and writes test scripts.

**When to use**: To write unit/integration tests or verify that an implementation covers all acceptance criteria.

**Example tasks**:
- Write Vitest unit tests for a Vue component
- Write integration tests for a Pinia store or API route
- Verify that all acceptance criteria are covered by tests
- Analyze `make test` results and identify failures

---

## Orchestration agents

### Scrum Master

**Role**: Orchestrates the development cycle. Generates detailed user stories, coordinates sprints, and ensures backlog consistency.

**When to use**: At sprint start, for story planning, or after a work session to update sprint tracking.

**Example tasks**:
- Prepare the next sprint (select and order user stories)
- Detect dependencies between user stories
- Update sprint table and changelog in `BACKLOG.md`
- Ensure stories are ready (complete acceptance criteria) before implementation

---

### Orchestrator

**Role**: General guide and entry point. Helps navigate BMAD workflow, routes to the right agent by task type, and maintains overall project consistency.

**When to use**: When you are unsure which agent to use, or at the start of a work session to frame execution.

**Example tasks**:
- Summarize project progress
- Decide where to start a new session
- Check consistency across backlog, architecture, and implemented code

---

## Learning agent

### AI Mentor *(manual mode)*

**Role**: Software development tutor. Supports sessions where **you write code directly**. AI Mentor never generates complete code; it guides with questions and hints so the learner discovers the solution.

**When to use**: When you want to practice coding yourself rather than delegating implementation to an agent.

**How to activate**: Explicitly say "switch to AI Mentor mode" at the start of a session. Agent behavior then follows the prompt in [`AI-Mentor-Prompt.md`](./AI-Mentor-Prompt.md).

**Core principles**:
- Socratic method: questions instead of direct answers
- One hint at a time, step by step
- No full code blocks (1-3 lines max to illustrate a concept)
- Encourage reasoning, not just outcomes
- Validate or redirect without directly fixing

**Example sessions**:
- Build a Vue component end-to-end guided by questions
- Debug by deduction rather than copy-paste solutions
- Learn a concept (example: Vue reactivity, async/await, TypeScript generics) through practice

**Analogy**: This is the shift from autopilot to manual flight. The plane (project) moves in both modes, but in one case you pilot and learn, while in the other the agent pilots and you supervise.

**Reference**: See [`AI-Mentor-Prompt.md`](./AI-Mentor-Prompt.md) for the full prompt and educational background (Harvard PS2 Pal study, 2025).

---

## Summary

| Agent | Category | Mode | Reference files |
|-------|----------|------|-----------------|
| Analyst | Design | Autopilot | - |
| Project Manager | Design | Autopilot | `BACKLOG.md` |
| Architect | Design | Autopilot | `ARCHITECTURE.md` |
| UX Designer | Design | Autopilot | Mockups |
| Developer | Execution | Autopilot | `BACKLOG.md`, `ARCHITECTURE.md` |
| QA | Execution | Autopilot | `BACKLOG.md`, existing tests |
| Scrum Master | Orchestration | Autopilot | `BACKLOG.md` |
| Orchestrator | Orchestration | Autopilot | All |
| **AI Mentor** | **Learning** | **Manual** | `AI-Mentor-Prompt.md` |
