import unified from 'unified'
import highlight from 'remark-highlight.js'
import parse from 'remark-parse'
import html from 'remark-html'

export default async function markdownToHtml(markdown) {
  const result = await unified().use(parse).use(highlight).use(html).process(markdown)
  return result.toString()
}
