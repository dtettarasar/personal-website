// server/api/resume-intro.get.ts
import { getResumeIntro } from '../database/site-content'

export default defineEventHandler(() => {
  return getResumeIntro()
})
