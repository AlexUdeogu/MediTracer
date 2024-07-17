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
        '@mui/material/styles',
        '@mui/icons-material/ArrowForwardIosSharp',
        '@mui/material/Accordion', // Add @mui/material/Accordion here
      ],
    },
  },
  server: {
    host: true,
    port: 3000,
  },
});
