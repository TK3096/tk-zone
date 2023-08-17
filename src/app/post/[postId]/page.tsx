import PostContent from '@components/post/PostContent'

import { getPostContent } from '@utils/post'

import 'highlight.js/styles/github-dark.css'

type Props = {
  params: {
    postId: string
  }
}

const PostPage = async (props: Props) => {
  const {
    params: { postId },
  } = props

  const post = await getPostContent(`footballs/${postId}.mdx`)

  if (!post) {
    return <div>Not Found</div>
  }

  return <PostContent post={post} />
}

export default PostPage
