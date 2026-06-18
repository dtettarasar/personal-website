// server/api/resume-intro-text.get.ts
import { getResumeIntroText } from '../database/site-content'

export default defineEventHandler((event) => {
  // On récupère les paramètres de l'URL (ex: ?locale=fr)
  const query = getQuery(event)
  const locale = (query.locale as string) || 'en' // 'en' par défaut si non spécifié

  return getResumeIntroText(locale)
})  