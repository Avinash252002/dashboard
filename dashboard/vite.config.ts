// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'build', // Change output directory from 'dist' to 'build'
    sourcemap: true, // Enable source maps
    rollupOptions: {
      // Customize the output
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Split vendor code
        },
      },
    },
  },
});
