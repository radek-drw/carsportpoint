import path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    // Define import path aliases to simplify imports across the project
    alias: {
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@common': path.resolve(__dirname, 'src/components/common'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@shared': path.resolve(__dirname, '../shared'),
    },
  },
});
