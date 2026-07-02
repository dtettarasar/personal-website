import { getResumePrintProfileText } from '../database/site-content'

export default defineEventHandler((event) => {
  const query = getQuery(event)
  const locale = (query.locale as string) || 'en'

  return getResumePrintProfileText(locale)
})
