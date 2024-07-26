import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [], // Ensure no externalization of MUI components
    },
  },
  server: {
    host: true,
    port: 3000,
  },
});
