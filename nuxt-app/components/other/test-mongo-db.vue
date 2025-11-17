<template>
  <div>
    <p>Test MongoDB</p>
    <button @click="testMongo">Tester</button>
    <pre>{{ response }}</pre>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const response = ref('');

console.log("test button loaded")

// testMongo()

async function testMongo() {

  console.log('init test Mongo function')

  
  try {
    const res = await $fetch('/api/test-mongo')
    response.value = JSON.stringify(res, null, 2)
  } catch (err) {
    console.error("Fetch failed:", err)
  }


}
</script>
