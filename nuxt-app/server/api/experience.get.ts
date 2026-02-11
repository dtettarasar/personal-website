import { getExperiences } from '../database/site-content'

export default defineEventHandler(() => {
    return getExperiences()
})