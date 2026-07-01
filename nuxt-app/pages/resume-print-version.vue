<template>
  <div class="resume-print-page">
    <div class="resume-toolbar no-print">
      <h1>Resume Print Prototype</h1>
      <button type="button" class="print-btn" @click="handlePrint">
        Print / Save PDF
      </button>
    </div>

    <article class="a4-sheet">
      <div class="accent-bar" />

      <header class="sheet-header">
        <div>
          <h1 class="candidate-name">News Ipsum Candidate</h1>
          <p class="candidate-title">Technical Product Owner · Web Project Lead</p>
        </div>

        <div class="contact-block">
          <p>news.ipsum@example.com</p>
          <p>+33 6 00 00 00 00</p>
          <p>Ile-de-France</p>
          <p>portfolio.news-ipsum.dev</p>
          <p>linkedin.com/in/news-ipsum</p>
        </div>
      </header>

      <section class="sheet-body">
        <div class="main-column">
          <section class="section-block">
            <div class="section-title-row">
              <h2>Profile</h2>
              <span class="rule" />
            </div>
            <p class="profile-text">
              News ipsum dolor sit amet, product strategy and delivery signals in a
              multi-stakeholder environment. This placeholder summary is intentionally
              short to simulate one-page A4 density constraints.
            </p>
          </section>

          <section class="section-block">
            <div class="section-title-row">
              <h2>Experience</h2>
              <span class="rule" />
            </div>

            <article v-for="job in jobs" :key="job.id" class="entry-block">
              <div class="entry-header">
                <h3>{{ job.role }}</h3>
                <span>{{ job.period }}</span>
              </div>
              <p class="entry-meta">{{ job.company }} · {{ job.location }}</p>
              <ul>
                <li v-for="bullet in job.bullets" :key="bullet">{{ bullet }}</li>
              </ul>
            </article>
          </section>

          <section class="section-block">
            <div class="section-title-row">
              <h2>Education</h2>
              <span class="rule" />
            </div>

            <article v-for="edu in education" :key="edu.id" class="entry-block">
              <div class="entry-header">
                <h3>{{ edu.title }}</h3>
                <span>{{ edu.year }}</span>
              </div>
              <p class="entry-meta">{{ edu.issuer }}</p>
            </article>
          </section>
        </div>

        <aside class="side-column">
          <section class="section-block">
            <div class="section-title-row">
              <h2>Skills</h2>
              <span class="rule" />
            </div>

            <div v-for="group in skills" :key="group.category" class="skill-group">
              <h3 class="group-title">{{ group.category }}</h3>
              <div class="pills">
                <span v-for="item in group.items" :key="item" class="pill">
                  {{ item }}
                </span>
              </div>
            </div>
          </section>

          <section class="section-block">
            <div class="section-title-row">
              <h2>Languages</h2>
              <span class="rule" />
            </div>
            <div class="lang-list">
              <div v-for="lang in languages" :key="lang.name" class="lang-row">
                <span>{{ lang.name }}</span>
                <span>{{ lang.level }}</span>
              </div>
            </div>
          </section>
        </aside>
      </section>

      <footer class="sheet-footer">
        <span>Curriculum Vitae</span>
      </footer>
    </article>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false
})

useHead({
  title: 'Resume Print Prototype'
})

const jobs = [
  {
    id: 1,
    role: 'Lead Web Project Manager',
    period: '2023 - Present',
    company: 'News Ipsum Studio',
    location: 'Paris, France',
    bullets: [
      'News ipsum roadmap alignment across product, design, and engineering teams.',
      'Defined release governance and delivery cadence for multi-site initiatives.',
      'Structured backlog priorities with measurable impact and technical feasibility.'
    ]
  },
  {
    id: 2,
    role: 'Product Owner (Web Platforms)',
    period: '2019 - 2023',
    company: 'Daily Placeholder Group',
    location: 'Ile-de-France',
    bullets: [
      'Led platform redesign streams with UX and performance goals.',
      'Coordinated QA and acceptance strategy for high-traffic event websites.'
    ]
  }
]

const education = [
  {
    id: 1,
    title: 'Certificate in Web Product Delivery',
    issuer: 'News Ipsum Academy',
    year: '2025'
  },
  {
    id: 2,
    title: 'Master in Digital Marketing',
    issuer: 'Placeholder Business School',
    year: '2015'
  }
]

const skills = [
  {
    category: 'Product',
    items: ['Backlog', 'Roadmap', 'Stakeholders', 'Delivery']
  },
  {
    category: 'Web',
    items: ['Nuxt', 'Vue', 'Node.js', 'API Design']
  },
  {
    category: 'Ops',
    items: ['Docker', 'Caddy', 'CI/CD', 'Quality Gates']
  }
]

const languages = [
  { name: 'French', level: 'Native' },
  { name: 'English', level: 'Professional' }
]

function handlePrint() {
  window.print()
}
</script>

<style>
.resume-print-page {
  min-height: 100vh;
  background: linear-gradient(145deg, #f6f7fb 0%, #eceff5 100%);
  padding: 20px 12px 28px;
  color: #0f172a;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.resume-toolbar {
  max-width: 920px;
  margin: 0 auto 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.resume-toolbar h1 {
  margin: 0;
  font-size: 0.95rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #334155;
}

.print-btn {
  border: none;
  border-radius: 999px;
  padding: 8px 14px;
  font-size: 0.82rem;
  font-weight: 600;
  color: #ffffff;
  background: #0f766e;
  cursor: pointer;
}

.print-btn:hover {
  background: #115e59;
}

.a4-sheet {
  width: min(210mm, 100%);
  margin: 0 auto;
  background: #ffffff;
  border: 1px solid #dbe3ee;
  box-shadow: 0 10px 35px rgba(15, 23, 42, 0.1);
}

.accent-bar {
  height: 3px;
  width: 100%;
  background: #0f766e;
}

.sheet-header {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
  padding: 26px 28px 16px;
  border-bottom: 1px solid #e2e8f0;
}

.candidate-name {
  margin: 0 0 6px;
  font-size: 2rem;
  line-height: 1.1;
  font-family: Georgia, "Times New Roman", serif;
  color: #0f172a;
}

.candidate-title {
  margin: 0;
  font-size: 0.78rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #475569;
}

.contact-block {
  text-align: right;
  font-size: 0.72rem;
  color: #334155;
  line-height: 1.5;
}

.contact-block p {
  margin: 0;
}

.sheet-body {
  display: grid;
  grid-template-columns: 2fr 1fr;
}

.main-column {
  border-right: 1px solid #e2e8f0;
  padding: 16px 18px 8px 28px;
}

.side-column {
  padding: 16px 28px 8px 18px;
}

.section-block {
  margin-bottom: 18px;
}

.section-title-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}

.section-title-row h2 {
  margin: 0;
  font-size: 0.66rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 700;
  color: #0f766e;
}

.section-title-row .rule {
  height: 1px;
  flex: 1;
  background: #e2e8f0;
}

.profile-text {
  margin: 0;
  font-size: 0.83rem;
  line-height: 1.6;
  color: #1e293b;
}

.entry-block {
  margin-bottom: 12px;
}

.entry-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
}

.entry-header h3 {
  margin: 0;
  font-size: 0.9rem;
  font-family: Georgia, "Times New Roman", serif;
  color: #0f172a;
}

.entry-header span {
  font-size: 0.68rem;
  color: #64748b;
}

.entry-meta {
  margin: 1px 0 4px;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #0f766e;
}

.entry-block ul {
  margin: 0;
  padding-left: 14px;
  font-size: 0.78rem;
  line-height: 1.5;
  color: #1e293b;
}

.entry-block li {
  margin-bottom: 2px;
}

.skill-group {
  margin-bottom: 10px;
}

.group-title {
  margin: 0 0 6px;
  font-size: 0.64rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #64748b;
}

.pills {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.pill {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  background: #1e293b;
  color: #ffffff;
  font-size: 0.68rem;
  padding: 3px 8px;
}

.lang-list {
  display: grid;
  gap: 5px;
}

.lang-row {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  font-size: 0.74rem;
  color: #1e293b;
}

.lang-row span:last-child {
  color: #64748b;
}

.sheet-footer {
  border-top: 1px solid #e2e8f0;
  padding: 8px 28px;
  display: flex;
  justify-content: flex-end;
}

.sheet-footer span {
  font-size: 0.62rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #64748b;
}

@media screen and (max-width: 900px) {
  .sheet-body {
    grid-template-columns: 1fr;
  }

  .main-column {
    border-right: none;
    border-bottom: 1px solid #e2e8f0;
  }

  .sheet-header {
    grid-template-columns: 1fr;
  }

  .contact-block {
    text-align: left;
  }
}

@page {
  size: A4;
  margin: 8mm;
}

@media print {
  * {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  html,
  body {
    margin: 0 !important;
    padding: 0 !important;
  }

  .resume-print-page {
    background: #ffffff;
    padding: 0;
  }

  .a4-sheet {
    width: 100%;
    min-height: 0;
    border: none;
    box-shadow: none;
    margin: 0;
  }

  .sheet-header {
    display: grid !important;
    grid-template-columns: 1fr auto !important;
  }

  .sheet-body {
    display: grid !important;
    grid-template-columns: 2fr 1fr !important;
  }

  .sheet-header {
    padding: 18px 20px 12px;
  }

  .main-column {
    padding: 12px 14px 6px 20px;
  }

  .side-column {
    padding: 12px 20px 6px 14px;
  }

  .section-block {
    margin-bottom: 12px;
  }

  .entry-block {
    margin-bottom: 8px;
  }

  .entry-block ul {
    line-height: 1.4;
  }

  .pill {
    background: #1e293b !important;
    color: #ffffff !important;
    border: 1px solid #1e293b !important;
  }

  .no-print {
    display: none !important;
  }

  .section-block,
  .entry-block,
  .skill-group {
    break-inside: avoid;
    page-break-inside: avoid;
  }
}
</style>
