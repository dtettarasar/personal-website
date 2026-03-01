import { getSkills } from '../database/site-content'

export default defineEventHandler(async (event) => {
  try {
    const skillsData = getSkills()
    
    return {
      status: 'success',
      data: skillsData,
      timestamp: new Date().toISOString()
    }
  } catch (error) {
    console.error('Error fetching skills:', error)
    
    return {
      status: 'error',
      message: 'Failed to fetch skills',
      code: 'SKILLS_FETCH_ERROR',
      timestamp: new Date().toISOString()
    }
  }
})
