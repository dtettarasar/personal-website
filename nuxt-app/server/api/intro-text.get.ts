// server/api/intro-text.get.ts
import { getIntroText } from '../database/site-content'

export default defineEventHandler(() => {
  return getIntroText()
})