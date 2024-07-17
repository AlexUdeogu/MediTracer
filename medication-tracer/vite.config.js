import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        '@fortawesome/react-fontawesome',
        'framer-motion',
        'axios',
        '@mui/material/styles', // Add @mui/material/styles here
      ],
    },
  },
  server: {
    host: true,
    port: 3000,
  },
});
