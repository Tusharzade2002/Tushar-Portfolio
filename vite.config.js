import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves the site from /<repo>/; Vercel and local dev serve from /
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES ? '/Tushar-Portfolio/' : '/',
})
