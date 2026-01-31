/**
 * Données de test pour le modèle TestMessage.
 * Un suffixe unique permet d'éviter les collisions si plusieurs tests tournent en parallèle.
 */
export const generateTestMessageData = (message?: string) => {
  const suffix = Math.floor(Math.random() * 10000)
  return {
    message: message ?? `Test message from integration test ${suffix}`,
  }
}
