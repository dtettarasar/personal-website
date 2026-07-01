<template>
  <header class="sheet-header">
    <div>
      <h1 class="candidate-name">{{ headerData.name }}</h1>
      <p class="candidate-title">{{ headerData.title }}</p>
    </div>

    <div class="contact-block">
      <p>
        <a :href="`mailto:${headerData.email}`">{{ headerData.email }}</a>
      </p>
      <p>
        <a :href="`tel:${headerData.phoneHref}`">{{ headerData.phone }}</a>
      </p>
      <p class="availability-line">{{ headerData.availability }}</p>
      <p>{{ headerData.residence }}</p>
      <p>
        <a :href="headerData.portfolio.url" target="_blank" rel="noopener noreferrer">
          {{ headerData.portfolio.label }}
        </a>
      </p>
      <p>
        <a :href="headerData.linkedin.url" target="_blank" rel="noopener noreferrer">
          {{ headerData.linkedin.label }}
        </a>
      </p>
      <p>
        <a :href="headerData.github.url" target="_blank" rel="noopener noreferrer">
          {{ headerData.github.label }}
        </a>
      </p>
    </div>
  </header>
</template>

<script setup lang="ts">
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
