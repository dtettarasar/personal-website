import TestMessage from '../database/models/test-message'

export default defineEventHandler(async (event) => {

  console.log("received call to test-mongo.get.ts")

  try {

    // On insère un document de test
    const newMessage = await TestMessage.create({ message: 'Hello from Nuxt + Mongoose!' });
    console.log('Created:', newMessage)

    const foundMessage = await TestMessage.findById(newMessage._id)
    console.log('Found:', foundMessage)

    return foundMessage

  } catch (e) {
    console.error('Error in test-mongo:', e)
    throw e
  }

})