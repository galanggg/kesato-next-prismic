import Nav from '../components/Nav'
import BlogHome from '../components/BlogHome'
import CardList from '../components/CardList'

import { client } from '../prismic-configuration'
import Prismic from 'prismic-javascript'
import { useEffect, useState } from 'react'

const Home = (props) => {
  return (
    <div className="bg-gray-900 h-full">
      <Nav />
      <BlogHome props={props} />
      <CardList props={props} />
      <div
        id="footer"
        className="h-10 mb-auto text-white mt-5 text-center text-lg"
      >
        FOOTER
      </div>
    </div>
  )
}

// Home.getInitialProps = async (context) => {
//   const home = await client.getSingle('blog_home')
//   const posts = await client.query(
//     Prismic.Predicates.at('document.type', 'post'),
//     { orderings: '[my.post.date desc]' },
//   )

//   return { home, posts }
// }
export async function getStaticProps(context) {
  const home = await client.getSingle('blog_home')
  const posts = await client.query(
    Prismic.Predicates.at('document.type', 'post'),
    { orderings: '[my.post.date desc]' },
  )

  return {
    props: { home, posts },
  }
}

export default Home
