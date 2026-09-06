import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({
      presets: [reactCompilerPreset({ compilationMode: 'annotation' })],
    }),
  ],
  build: {
    chunkSizeWarningLimit: 800,
    rolldownOptions: {
      output: {
        manualChunks: (id) => {
          if (!id.includes('node_modules')) return undefined
          if (id.includes('@mui') || id.includes('@emotion')) return 'mui'
          if (id.includes('motion') || id.includes('framer-motion')) return 'motion'
          if (id.includes('typewriter-effect')) return 'typewriter'
          return 'vendor'
        },
      },
    },
  },
})