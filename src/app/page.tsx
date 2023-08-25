import PostList from '@components/home/PostList'
import { getPosts } from '@utils/post'

export const revalidate = process.env.revalidate

const HomePage = async () => {
  const posts = await getPosts()

  if (!posts) {
    return <div>Not Found</div>
  }

  return (
    <main className='bg-amber-200 rounded-md p-4 drop-shadow-sm'>
      <PostList posts={posts} />
    </main>
  )
}

export default HomePage
