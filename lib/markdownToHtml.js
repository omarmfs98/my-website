import { bundleMDX } from 'mdx-bundler'
import remarkGfm from 'remark-gfm'

const markdownToHtml = async (markdown) => {
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