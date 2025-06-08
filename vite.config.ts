import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set the base path for GitHub Pages
  base: './',
  // Build directly to root for GitHub Pages
  build: {
    outDir: '.',
    emptyOutDir: false,
    assetsDir: 'assets',
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
