import React from 'react'
import Prismic from 'prismic-javascript'
import { RichText, Date } from 'prismic-reactjs'

const BlogHome = ({ props }) => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-6 text-white">
        <h1 className="text-5xl">
          {RichText.asText(props.home.data.headline)}
        </h1>
        <p className="text-left font-bold">
          {RichText.asText(props.home.data.description)}
        </p>
      </div>
    </div>
  )
}

export default BlogHome
