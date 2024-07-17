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
        '@mui/icons-material/ArrowForwardIosSharp',
        '@mui/material/Accordion',
        '@mui/material/AccordionSummary',
        '@mui/material/AccordionDetails', // Add @mui/material/AccordionDetails here
      ],
    },
  },
  server: {
    host: true,
    port: 3000,
  },
});
