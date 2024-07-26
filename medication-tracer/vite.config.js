import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [

      ], 
    },
  },
  server: {
    host: true,
    port: 3000,
  },
});
