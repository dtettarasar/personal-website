import mongoose from 'mongoose'

/**
 * Connexion à MongoDB pour les tests d'intégration.
 * Utilise les variables d'environnement (ex. fournies par Docker Compose).
 */
export const connectTestDB = async () => {
  if (mongoose.connection.readyState !== 0) return

  const user = process.env.MONGO_INITDB_ROOT_USERNAME
  const pass = process.env.MONGO_INITDB_ROOT_PASSWORD
  const dbName = process.env.MONGO_DB_NAME || 'personal_site_test'
  const uri = `mongodb://${user}:${pass}@mongodb:27017/${dbName}?authSource=admin`

  try {
    await mongoose.connect(uri)
    console.log('📡 Database connected for testing')
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error)
    throw error
  }
}

/**
 * Déconnexion de MongoDB après les tests d'intégration.
 */
export const disconnectTestDB = async () => {
  await mongoose.disconnect()
  console.log('💤 Database disconnected')
}
