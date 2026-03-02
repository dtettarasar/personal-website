import { getEducations } from '../database/site-content'

export default defineEventHandler(async (event) => {
  try {
    const educationsData = getEducations()
    
    return {
      status: 'success',
      data: educationsData,
      timestamp: new Date().toISOString()
    }
  } catch (error) {
    console.error('Error fetching educations:', error)
    
    return {
      status: 'error',
      message: 'Failed to fetch educations',
      code: 'EDUCATIONS_FETCH_ERROR',
      timestamp: new Date().toISOString()
    }
  }
})
