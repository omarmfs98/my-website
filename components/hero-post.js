import DateFormater from '../components/date-formater'
import CoverImage from '../components/cover-image'
import Link from 'next/link'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <div className="mb-4">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div>
        <h3 className="mb-2 text-md lg:text-xl leading-tight">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a className="hover:underline font-bold">{title}</a>
          </Link>
        </h3>
        <div className="text-sm">
          <DateFormater dateString={date} />
        </div>
      </div>
    </section>
  )
}
