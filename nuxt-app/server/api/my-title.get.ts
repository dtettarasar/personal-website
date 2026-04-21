import { getMyTitle } from '../database/site-content';

export default defineEventHandler(() => {
    return getMyTitle()
})