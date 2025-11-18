import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './index.html'
      },
      output: {
        manualChunks: {
          firebase: [
            'firebase/app',
            'firebase/firestore',
            'firebase/auth'
          ],
          jquery: ['jquery'],
          icons: ['@fortawesome/fontawesome-free/css/all.min.css']
        }
      }
    }
  }
})