import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@fortawesome/react-fontawesome', 'framer-motion', 'axios'],
    },
  },
  server: {
    host: true,
    port: 3000,
  },
});
