import { defineConfig } from 'vite'
import mkcert from 'vite-plugin-mkcert'
import svgrPlugin from 'vite-plugin-svgr'
import viteTsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    mkcert(),
    viteTsconfigPaths(),
    svgrPlugin(),
  ],
  build: {
    outDir: 'build',
  },
  server: {
    open: true,
    port: 4000,
    https: true,
  },
})
