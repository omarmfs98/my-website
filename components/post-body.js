import { getMDXComponent } from 'mdx-bundler/client'
import { useMemo } from 'react'
import Giscus from '@giscus/react'


export default function PostBody({ code }) {
  const Component = useMemo(() => getMDXComponent(code), [code])

  return (
    <div className="max-w-2xl mx-auto prose prose-custom">
      <Component />
      <div className="mt-16">
        <Giscus
          repo="omarmfs98/my-website"
          repoId="MDEwOlJlcG9zaXRvcnkyODEwMjUyNTc="
          category="Ideas"
          categoryId="DIC_kwDOEMAa6c4Co1oP"
          mapping="pathname"
          strict="0"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="bottom"
          theme="light_tritanopia"
          lang="en"
          crossorigin="anonymous"
          loading="lazy"
        />
      </div>
    </div>
  )
}