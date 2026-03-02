import { getProjects } from "../database/site-content";

export default defineEventHandler(async (event) => {
  try {
    const projectsData = getProjects();
    
    return {
      status: 'success',
      data: projectsData,
      timestamp: new Date().toISOString()
    }
  } catch (error) {
    console.error('Error fetching projects:', error);
    
    return {
      status: 'error',
      message: 'Failed to fetch projects',
      code: 'PROJECTS_FETCH_ERROR',
      timestamp: new Date().toISOString()
    }
  }
})