import PostContent from '@components/post/PostContent'

import { getPostContent, getPosts } from '@utils/post'

import 'highlight.js/styles/github-dark.css'

type Props = {
  params: {
    postId: string
  }
}

export const generateStaticParams = async () => {
  const posts = await getPosts()

  if (!posts) return []

  const postIds = posts.map((item) => {
    return {
      postId: item.meta.id,
    }
  })

  return postIds
}

export const generateMetadata = async (props: Props) => {
  const {
    params: { postId },
  } = props

  const post = await getPostContent(`posts/${postId}.mdx`)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.meta.title} | TK Zone`,
  }
}

const PostPage = async (props: Props) => {
  const {
    params: { postId },
  } = props

  const post = await getPostContent(`posts/${postId}.mdx`)

  if (!post) {
    return <div>Not Found</div>
  }

  return <PostContent post={post} />
}

export default PostPage
