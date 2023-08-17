import Link from 'next/link'

import PostCard from './PostCard'

const PostList = () => {
  return (
    <ul className='flex flex-col gap-4'>
      {[1, 2, 3, 4].map((post) => (
        <li key={post}>
          <Link href={`/post/${post}`}>
            <PostCard />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default PostList
