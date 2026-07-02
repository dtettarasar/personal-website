<template>
  <header class="sheet-header">
    <div class="identity-block">
      <h1 class="candidate-name">{{ configStore.ownerName }}</h1>
      <p class="candidate-title">{{ headerData.title }}</p>
    </div>

    <div class="contact-block">
      <p class="contact-item">
        <ResumePrintVersionIconsMailIcon class="contact-icon" />
        <a :href="`mailto:${headerData.email}`">{{ headerData.email }}</a>
      </p>
      <p class="contact-item">
        <ResumePrintVersionIconsPhoneIcon class="contact-icon" />
        <a :href="`tel:${headerData.phoneHref}`">{{ headerData.phone }}</a>
      </p>
      <p class="contact-item">
        <ResumePrintVersionIconsLocationIcon class="contact-icon" />
        <span>{{ headerData.residence }}</span>
      </p>
      <p class="contact-item">
        <ResumePrintVersionIconsGlobeIcon class="contact-icon" />
        <a :href="headerData.portfolio.url" target="_blank" rel="noopener noreferrer">
          {{ headerData.portfolio.label }}
        </a>
      </p>
      <p class="contact-item">
        <ResumePrintVersionIconsLinkedinIcon class="contact-icon" />
        <a :href="headerData.linkedin.url" target="_blank" rel="noopener noreferrer">
          {{ headerData.linkedin.label }}
        </a>
      </p>
      <p class="contact-item">
        <ResumePrintVersionIconsGithubIcon class="contact-icon" />
        <a :href="headerData.github.url" target="_blank" rel="noopener noreferrer">
          {{ headerData.github.label }}
        </a>
      </p>
      <p class="contact-item availability-line">
        Disponible immédiatement
      </p>
      <p class="contact-item availability-line">
        Métros/RER : Paris & IDF
      </p>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useConfigStore } from '~/stores/configStore'

const configStore = useConfigStore()

await useAsyncData('resume-print-config', async () => {
  return await configStore.fetchConfig()
})

interface HeaderLink {
  label: string
  url: string
}

interface ResumePrintHeaderData {
  name: string
  title: string
  email: string
  phone: string
  phoneHref: string
  availability: string
  residence: string
  portfolio: HeaderLink
  linkedin: HeaderLink
  github: HeaderLink
}

const headerData: ResumePrintHeaderData = {
  name: 'News Ipsum Candidate',
  title: 'Technical Product Owner · Web Project Lead',
  email: 'news.ipsum@example.com',
  phone: '+33 6 00 00 00 00',
  phoneHref: '+33600000000',
  availability: 'Disponible immédiatement | Métros/RER : Paris & IDF',
  residence: 'Rambouillet, Ile-de-France',
  portfolio: {
    label: 'portfolio.news-ipsum.dev',
    url: 'https://portfolio.news-ipsum.dev'
  },
  linkedin: {
    label: 'linkedin.com/in/news-ipsum',
    url: 'https://linkedin.com/in/news-ipsum'
  },
  github: {
    label: 'github.com/news-ipsum',
    url: 'https://github.com/news-ipsum'
  }
}
</script>

<style scoped>
.sheet-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  padding: 26px 28px 16px;
  border-bottom: 1px solid #e2e8f0;
}

.identity-block {
  flex: 1 1 auto;
  min-width: 0;
  max-width: 62%;
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
  flex: 0 0 auto;
  width: fit-content;
  max-width: 36%;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  font-size: 0.72rem;
  color: #334155;
  line-height: 1.5;
}

.contact-item {
  margin: 0;
  display: flex;
  width: auto;
  justify-content: flex-end;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
}

.contact-icon {
  color: #0f766e;
  font-size: 0.86rem;
  flex-shrink: 0;
}

.contact-block a {
  color: inherit;
  text-decoration: none;
}

.contact-block a:hover {
  text-decoration: underline;
}

.availability-line {
  font-weight: 600;
  color: #0f766e;
}

@media screen and (max-width: 900px) {
  .sheet-header {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  .identity-block {
    max-width: none;
  }

  .contact-block {
    max-width: none;
    margin-left: 0;
    align-items: flex-start;
    text-align: left;
  }

  .contact-item {
    width: 100%;
    justify-content: flex-start;
  }
}

@media print {
  .sheet-header {
    display: flex !important;
    align-items: flex-start !important;
    justify-content: space-between !important;
    padding: 18px 20px 12px;
  }

  .identity-block {
    max-width: 62%;
  }

  .contact-block {
    max-width: 36%;
  }

  .contact-block a {
    text-decoration: none !important;
  }
}
</style>
