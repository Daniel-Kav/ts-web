import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',
  base: '/ts-web/', // Replace with your repository name
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
});