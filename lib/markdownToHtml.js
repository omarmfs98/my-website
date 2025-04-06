import { bundleMDX } from 'mdx-bundler'
import remarkGfm from 'remark-gfm'

const markdownToHtml = async (markdown) => {
  process.env.ESBUILD_BINARY_PATH = require.resolve('esbuild/bin/esbuild') // para Apple Silicon

  const result = await bundleMDX({
    source: markdown,
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm]
      return options
    },
    esbuildOptions(options) {
      options.platform = 'node'
      return options
    },
    useDynamicImport: true,
  })

  return {
    code: result.code,
    frontmatter: result.frontmatter,
  }
}

export default markdownToHtml