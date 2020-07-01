import Card from './Card'
import { RichText, Date } from 'prismic-reactjs'

const CardList = ({ props }) => {
  return (
    <div className="container m-auto">
      <div className="mt-5">
        <div className="grid md:grid-cols-3 xl:grid-cols-3 sm:grid-cols-1 gap-3 ">
          {props.posts.results.map((post) => (
            <Card post={post} key={post.uid} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardList
