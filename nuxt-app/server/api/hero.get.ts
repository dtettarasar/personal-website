// server/api/hero.get.ts
import { getHeroData } from '../database/site-content'

export default defineEventHandler((event: any) => {
  const query = getQuery(event)
  const locale = (query.locale as string) || 'en'
  
  return getHeroData(locale)
})