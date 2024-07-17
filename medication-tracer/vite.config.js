import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteExternalsPlugin } from 'vite-plugin-externals';

export default defineConfig({
  plugins: [
    react(),
    viteExternalsPlugin({
      react: 'React',
      'react-dom': 'ReactDOM',
      axios: 'axios',
    }),
  ],
  server: {
    host: true,
    port: 3000, // Adjust the port as needed
  },
});
