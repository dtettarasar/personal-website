import { MongoClient } from 'mongodb'

export default defineEventHandler(async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio'
  const client = new MongoClient(uri)
  await client.connect()

  const db = client.db('portfolio')
  const projects = await db.collection('projects').find().toArray()

  await client.close()
  return projects
})
