import Link from 'next/link'
import { Fragment, FC } from 'react'

type Props = {
  post: Post
}

const PostContent: FC<Props> = (props: Props) => {
  const { post } = props

  return (
    <Fragment>
      <div>
        <h1 className='text-4xl font-bold tracking-wider text-amber-700'>
          {post.meta.title}
        </h1>
        <p className='text-sm text-amber-600 mt-2'>Date: {post.meta.date}</p>
      </div>

      <hr className='my-4 border-amber-900' />

      <article className='bg-amber-50 p-4 rounded-md'>{post.content}</article>

      <Link href='/'>
        <p className='underline text-md mt-3 text-amber-700 hover:text-amber-500 duration-200'>
          Back to home
        </p>
      </Link>
    </Fragment>
  )
}

export default PostContent
