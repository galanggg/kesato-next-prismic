import { client } from '../../prismic-configuration'
import { RichText } from 'prismic-reactjs'
import Nav from '../../components/Nav'
import Prismic from 'prismic-javascript'

const Post = (props) => {
  console.log(props)
  return (
    <div>
      <Nav />
      <div className="bg-gray-900 h-screen text-white"></div>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const { uid } = params
  const post = await client.getByUID('post', uid)
  return { props: { post } }
}

export async function getStaticPaths() {
  const { results } = await client.query(
    Prismic.Predicates.at('document.type', 'post'),
  )

  const paths = results.map((post) => ({
    params: {
      uid: post.uid,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export default Post
