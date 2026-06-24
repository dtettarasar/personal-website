// server/api/config.ts
import { getGlobalConfig } from '../database/site-content'

export default defineEventHandler(() => {
  return getGlobalConfig() 
})