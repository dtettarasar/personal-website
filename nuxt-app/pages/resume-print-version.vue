<template>
  <div class="resume-print-page">
    <div class="resume-toolbar no-print">
      <h1>Resume Print Prototype</h1>

      <div class="toolbar-actions">
        <div class="lang-switch" role="group" aria-label="Print resume language">
          <button
            type="button"
            class="lang-btn"
            :class="{ active: locale === 'fr' }"
            @click="setLocale('fr')"
          >
            FR
          </button>
          <span class="lang-separator">|</span>
          <button
            type="button"
            class="lang-btn"
            :class="{ active: locale === 'en' }"
            @click="setLocale('en')"
          >
            EN
          </button>
        </div>

        <button type="button" class="print-btn" @click="handlePrint">
          Print / Save PDF
        </button>
      </div>
    </div>

    <article class="a4-sheet">
      <div class="accent-bar" />

      <ResumePrintVersionHeader />

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
            <ResumePrintVersionExperienceSection />
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

const { locale, setLocale } = useI18n()

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

<style scoped>
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

.toolbar-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.lang-switch {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border-radius: 999px;
  border: 1px solid #cbd5e1;
  background: #ffffff;
  padding: 4px 8px;
}

.lang-btn {
  border: none;
  background: transparent;
  color: #64748b;
  font-size: 0.73rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  cursor: pointer;
}

.lang-btn.active {
  color: #0f766e;
}

.lang-separator {
  color: #94a3b8;
  font-size: 0.72rem;
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
  .resume-toolbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .toolbar-actions {
    width: 100%;
    justify-content: space-between;
  }

  .sheet-body {
    grid-template-columns: 1fr;
  }

  .main-column {
    border-right: none;
    border-bottom: 1px solid #e2e8f0;
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

  .sheet-body {
    display: grid !important;
    grid-template-columns: 2fr 1fr !important;
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
