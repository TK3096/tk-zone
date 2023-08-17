import { FC } from 'react'
import Link from 'next/link'

import PostCard from './PostCard'

type Props = {
  posts: Post[]
}

const PostList: FC<Props> = (props: Props) => {
  const { posts } = props

  return (
    <ul className='flex flex-col gap-1 list-none pl-0'>
      {posts.map((post) => (
        <li key={post.meta.id} className='p-0'>
          <Link href={`/post/${post.meta.id}`}>
            <PostCard {...post.meta} />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default PostList
