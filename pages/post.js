// import React from 'react'
// import { RichText, Date } from 'prismic-reactjs'
// import { client } from '../prismic-configuration'
// import Link from 'next/link'
// import Nav from '../components/Nav'

// const Post = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <Nav />
//       <div className="bg-gray-900 h-screen text-white"></div>
//     </div>
//   )
// }

// Post.getInitialProps = async (context) => {
//   const { uid } = context.query
//   const post = await client.getByUID('post', uid)
//   return { post }
// }
// // export async function getStaticProps(context) {
// //   const { uid } = context.query
// //   const post = await client.getByUID('post', uid)
// //   return {
// //     props: { post },
// //   }
// // }

// export default Post
