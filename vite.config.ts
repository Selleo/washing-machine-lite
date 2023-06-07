import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import svgrPlugin from 'vite-plugin-svgr'
import viteTsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    viteTsconfigPaths(),
    svgrPlugin(),
    checker({ typescript: true })
  ],
  build: {
    outDir: 'build',
  },
  server: {
    port: 4000,
  },
})
