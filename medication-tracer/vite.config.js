import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Set this to true to listen on all addresses, including LAN
    port: 3000, // Optional: Specify the port you want to use
  },
})
