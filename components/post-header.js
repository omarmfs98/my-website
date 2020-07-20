import Avatar from '../components/avatar'
import DateFormater from '../components/date-formater'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="flex items-center justify-between">
        <div className="mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-md font-bold">
          <DateFormater dateString={date} />
        </div>
      </div>
      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
    </>
  )
}
