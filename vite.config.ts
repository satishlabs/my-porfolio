import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Exclude api/ (Vercel serverless) from the frontend bundle so Vite never resolves @vercel/kv
    {
      name: 'exclude-api-from-bundle',
      resolveId(id) {
        const n = id.replace(/\\/g, '/')
        if (id === '@vercel/kv' || id === '@vercel/node') return '\0vercel-server-stub'
        if (n.includes('api/engagement') || n.includes('api\\engagement')) return '\0api-engagement-stub'
        return null
      },
      load(id) {
        if (id === '\0vercel-server-stub') return 'export const kv = {}; export default { kv };'
        if (id === '\0api-engagement-stub') return 'export default function handler() {}'
        return null
      },
    },
  ],
  optimizeDeps: {
    exclude: ['@vercel/kv', '@vercel/node'],
  },
})
