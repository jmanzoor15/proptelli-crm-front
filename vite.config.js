import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Important for deployment
  server: {
    proxy: {
      '/api': {
        target: 'https://api.crm.proptelli.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})