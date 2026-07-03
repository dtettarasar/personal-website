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
            <ResumePrintVersionProfileSection />
          </section>

          <section class="section-block">
            <ResumePrintVersionExperienceSection />
          </section>

          <!-- Layout test: keep this block to quickly move Education back under Experience if needed.
          <section class="section-block">
            <ResumePrintVersionEducationSection />
          </section>
          -->
        </div>

        <aside class="side-column">
          <section class="section-block">
            <ResumePrintVersionSkillsSection />
          </section>

          <section class="section-block">
            <ResumePrintVersionLanguageSection />
          </section>

          <section class="section-block">
            <ResumePrintVersionEducationSection />
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
  grid-template-columns: 1.9fr 1.1fr;
}

.main-column {
  border-right: 1px solid #e2e8f0;
  padding: 16px 16px 8px 26px;
}

.side-column {
  padding: 16px 26px 8px 16px;
}

.section-block {
  margin-bottom: 18px;
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
    display: flex !important;
    align-items: stretch !important;
    break-inside: auto;
    page-break-inside: auto;
  }

  .main-column {
    width: 63%;
    flex: 0 0 63%;
    padding: 12px 12px 6px 18px;
  }

  .side-column {
    width: 37%;
    flex: 0 0 37%;
    padding: 12px 18px 6px 12px;
  }

  .sheet-footer {
    padding: 4px 18px 2px;
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
