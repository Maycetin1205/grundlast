import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import { viteSingleFile } from 'vite-plugin-singlefile'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    {
      enforce: 'pre',
      ...mdx({
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug],
        providerImportSource: '@mdx-js/react',
      }),
    },
    react(),
    tailwindcss(),
    // Single-File-Build nur für `npm run build:single` – normaler Build bleibt mehrteilig.
    ...(mode === 'single' ? [viteSingleFile()] : []),
  ],
}))
