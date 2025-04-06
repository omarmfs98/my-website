import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import MoreStories from '../../components/more-stories'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'

export default function Post({ post, allPosts, preview }) {
  const router = useRouter()

  const morePosts = allPosts.slice(1)

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
            <>
              <article className="mb-32">
                <Head>
                  <title>
                    {post.title}
                  </title>
                  <meta property="og:image" content={post.ogImage.url} />
                </Head>
                <PostHeader
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                />
                <PostBody code={post.code} />

                {morePosts.length > 0 && <MoreStories posts={morePosts} />}
              </article>
            </>
          )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])

  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  const { code } = await markdownToHtml(post.content)

  return {
    props: {
      post: {
        ...post,
        code,
      },
      allPosts,
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
