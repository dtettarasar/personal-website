import mongoose from 'mongoose'

let isConnected = false

// Éviter de logger les requêtes (et données sensibles) en production
if (process.env.NODE_ENV !== 'production') {
  mongoose.set('debug', true)
}

process.on('unhandledRejection', (reason, promise) => {

    console.error('Unhandled Rejection at:', promise, 'reason:', reason);

})

export async function initDB(uri: string) {

    if (isConnected) {

        console.log('⚡ MongoDB is already connected.');
        return;

    }

    try {

        const connection = await mongoose.connect(uri, {
            serverSelectionTimeoutMS: 30000, // 30s timeout
        })

        isConnected = connection.connections[0].readyState === 1;

        console.log('✅ Connected to MongoDB successfully.');

        return connection;

    } catch (error) {

        console.error('❌ Error connecting to MongoDB:', error);

        console.trace();

        throw error;

    }
}

/** Réinitialise l'état de connexion (uniquement pour les tests unitaires). */
export function _resetForTesting(): void {
  isConnected = false
}

export async function closeDB() {

    try {

        await mongoose.disconnect();
        isConnected = false;
        console.log('🔒 MongoDB connection closed.');

    } catch (error) {

        console.error('Error while closing MongoDB connection:', error);

    }
    
}

// Ferme proprement quand le process s'arrête
process.on('SIGINT', async () => {

    await closeDB();
    process.exit(0);

})

process.on('SIGTERM', async () => {

    await closeDB();
    process.exit(0);

})