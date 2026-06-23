import { defineConfig } from 'vitest/config'

// Eigene Test-Konfiguration, unabhaengig vom App-Build (kein MDX/React noetig
// fuer reine Logik- und Schema-Tests).
export default defineConfig({
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
  },
})
