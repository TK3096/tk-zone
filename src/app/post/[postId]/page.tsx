import PostContent from '@components/post/PostContent'

const mock: Post = {
  meta: {
    id: '123',
    title: 'Test Mock',
    date: '2023/08/15',
    description: '',
  },
  content: 'Hello',
}

const PostPage = () => {
  return <PostContent post={mock} />
}

export default PostPage
