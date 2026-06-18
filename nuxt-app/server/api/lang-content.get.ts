import { getLanguageContent } from '../database/site-content'

export default defineEventHandler((event) => {
    // 1. On récupère les paramètres de l'URL (ex: { locale: 'fr' })
    const query = getQuery(event)
    
    // 2. On extrait la locale, et on met une valeur par défaut ('en') au cas où
    const locale = (query.locale as string) || 'en'
    
    // 3. On passe cette locale à ta fonction de données
    return getLanguageContent(locale)
})