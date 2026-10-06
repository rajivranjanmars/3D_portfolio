import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  build: {
    outDir: 'dist',
    sourcemap: false,
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            { name: 'vendor', test: /\/node_modules\/(react|react-dom)\// },
            { name: 'three', test: /\/node_modules\/(three|@react-three\/fiber|@react-three\/drei)\// },
          ],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
})
