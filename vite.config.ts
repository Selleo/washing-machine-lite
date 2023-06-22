import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import viteTsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [viteTsconfigPaths(), checker({ typescript: true })],
  build: {
    outDir: 'build',
  },
  server: {
    port: 4000,
  },
})
