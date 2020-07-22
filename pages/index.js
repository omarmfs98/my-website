import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'

export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Omar Flórez - Frontend Developer</title>
        </Head>
        <Container>
          <Intro posts={allPosts} />
        </Container>
      </Layout>
    </>
  )
}
export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}