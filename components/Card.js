import React from 'react'
import { RichText, Date } from 'prismic-reactjs'
import { generate } from '../utils/generate'
import { client, linkResolver, hrefResolver } from '../prismic-configuration'
import Link from 'next/link'

const Card = ({ post }) => {
  var _subString = post.data.post_body[0].text
  var pecah = _subString.split(' ')
  var hasil = generate(pecah, 10)
  return (
    <div className="sm:max-w-md lg:max-w-xl md:max-w-lg rounded overflow-hidden shadow-lg text-white border-solid border-2 border-teal-200 mt-4">
      <img
        className="w-full"
        src={post.data.image.url}
        alt="Sunset in the mountains"
      ></img>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {RichText.asText(post.data.title)}
        </div>
        <p className="text-white-700 text-base">{hasil}</p>
        <Link href={hrefResolver(post)} as={linkResolver(post)} passHref>
          <button className="mt-4 bg-transparent hover:bg-blue-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded">
            Read
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Card
