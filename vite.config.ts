import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://hoanghaing.github.io/random-quiz-opentdb/",
  plugins: [react()],
})
