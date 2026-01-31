import { defineConfig } from 'vitest/config'
import { defineVitestProject } from '@nuxt/test-utils/config'
import path from 'path'

export default defineConfig({
  test: {
    projects: [
      // 1. Backend – tests unitaires (mocks, pas de DB)
      {
        test: {
          name: 'backend',
          include: ['tests/unit/backend/**/*.{test,spec}.ts'],
          environment: 'node',
        },
      },
      // 2. Intégration – vraie connexion MongoDB (nécessite make dev ou stack Docker)
      {
        test: {
          name: 'integration',
          include: ['tests/integration/backend/**/*.{test,spec}.ts'],
          environment: 'node',
        },
      },
      // 3. Frontend (environnement Nuxt)
      await defineVitestProject({
        test: {
          name: 'frontend',
          include: ['tests/unit/frontend/**/*.{test,spec}.ts'],
          environment: 'nuxt',
          environmentOptions: {
            nuxt: {
              domEnvironment: 'jsdom',
            },
          },
        },
      }),
    ],
    globals: true,
    // watch: true par défaut ; pour Docker + watch, usePolling peut être géré via env VITEST_WATCH_POLLING
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      '~': path.resolve(__dirname, './'),
    },
  },
})
