import { initDB } from '../database/database'

export default defineNitroPlugin(async () => {
  const config = useRuntimeConfig()

  console.log('Mongo user:', config.mongoUser)
  console.log('Mongo pass:', config.mongoPass)
  console.log('Mongo db name:', config.mongoDbName)

  const uri = `mongodb://${config.mongoUser}:${config.mongoPass}@mongodb:27017/${config.mongoDbName}?authSource=admin`

  await initDB(uri)
})