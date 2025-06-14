import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://github.com/adawinlee/601proj.git",
  server: {
    host: true,
  },
})
