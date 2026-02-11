import { getLanguageContent } from '../database/site-content'

export default defineEventHandler(() => {
    return getLanguageContent()
})