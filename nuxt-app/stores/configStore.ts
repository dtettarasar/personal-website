// stores/configStore.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface LocalizedConfigText {
  fr: string
  en: string
}

export interface GlobalConfig {
  ownerName: string
  phone: string
  venue: string
  website: string
  availability: LocalizedConfigText
  transport: LocalizedConfigText
}

const EMPTY_LOCALIZED_TEXT: LocalizedConfigText = {
  fr: '',
  en: ''
}

export const useConfigStore = defineStore('config', () => {
  const ownerName = ref<string>('')
  const phone = ref<string>('')
  const venue = ref<string>('')
  const website = ref<string>('')
  const availability = ref<LocalizedConfigText>({ ...EMPTY_LOCALIZED_TEXT })
  const transport = ref<LocalizedConfigText>({ ...EMPTY_LOCALIZED_TEXT })

  async function fetchConfig(): Promise<GlobalConfig | null> {
    if (ownerName.value) {
      return {
        ownerName: ownerName.value,
        phone: phone.value,
        venue: venue.value,
        website: website.value,
        availability: availability.value,
        transport: transport.value
      }
    }

    try {
        const response = await $fetch<GlobalConfig>('/api/config')
        ownerName.value = response.ownerName
        phone.value = response.phone
        venue.value = response.venue
        website.value = response.website
        availability.value = response.availability
        transport.value = response.transport
        return response // 👈 On renvoie la réponse fraîche
    } catch (err) {
        console.error("Erreur config globale", err)
        return null // 👈 On renvoie explicitement null en cas d'erreur
    }
}

  return {
    ownerName,
    phone,
    venue,
    website,
    availability,
    transport,
    fetchConfig
  }
})