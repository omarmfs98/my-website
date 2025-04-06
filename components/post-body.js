import { getMDXComponent } from 'mdx-bundler/client'
import { useMemo } from 'react'

export default function PostBody({ code }) {
  const Component = useMemo(() => getMDXComponent(code), [code])

  return (
    <div className="max-w-2xl mx-auto prose prose-custom">
      <Component />
    </div>
  )
}