<template>
  <header class="sheet-header">
    <div class="identity-block">
      <h1 class="candidate-name">{{ headerData.name }}</h1>
      <p class="candidate-title">{{ headerData.title }}</p>
    </div>

    <div class="contact-block">
      <p class="contact-item">
        <svg
          class="contact-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 32 32"
          aria-hidden="true"
          focusable="false"
        >
          <path
            fill="currentColor"
            d="M15.448 7.021c2.443 0 4.745 1.083 6.432 2.776v.005c0-.813.547-1.428 1.303-1.428h.192c1.193 0 1.432 1.125 1.432 1.48l.005 12.635c-.083.828.855 1.256 1.376.724c2.025-2.083 4.452-10.719-1.261-15.719c-5.328-4.667-12.479-3.896-16.281-1.276c-4.041 2.792-6.624 8.959-4.115 14.755c2.74 6.319 10.573 8.204 15.235 6.324c2.36-.953 3.448 2.233.995 3.276c-3.697 1.577-14 1.416-18.812-6.917C-1.302 18.027-1.13 8.125 7.496 2.995C14.089-.932 22.788.156 28.032 5.631c5.48 5.729 5.163 16.448-.187 20.615c-2.423 1.895-6.021.052-5.995-2.709l-.027-.9c-1.687 1.671-3.932 2.651-6.375 2.651c-4.833 0-9.088-4.256-9.088-9.084c0-4.88 4.255-9.181 9.088-9.181zm6.079 8.834c-.183-3.537-2.808-5.667-5.98-5.667h-.12c-3.656 0-5.687 2.88-5.687 6.145c0 3.661 2.453 5.973 5.672 5.973c3.593 0 5.952-2.629 6.124-5.739z"
          />
        </svg>
        <a :href="`mailto:${headerData.email}`">{{ headerData.email }}</a>
      </p>
      <p class="contact-item">
        <Icon name="mdi:phone-outline" class="contact-icon" />
        <a :href="`tel:${headerData.phoneHref}`">{{ headerData.phone }}</a>
      </p>
      <p class="contact-item">
        <Icon name="mdi:map-marker-outline" class="contact-icon" />
        <span>{{ headerData.residence }}</span>
      </p>
      <p class="contact-item">
        <Icon name="mdi:web" class="contact-icon" />
        <a :href="headerData.portfolio.url" target="_blank" rel="noopener noreferrer">
          {{ headerData.portfolio.label }}
        </a>
      </p>
      <p class="contact-item">
        <Icon name="fa7-brands:linkedin" class="contact-icon" />
        <a :href="headerData.linkedin.url" target="_blank" rel="noopener noreferrer">
          {{ headerData.linkedin.label }}
        </a>
      </p>
      <p class="contact-item">
        <Icon name="fa7-brands:github" class="contact-icon" />
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
