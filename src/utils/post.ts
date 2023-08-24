import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeHighlight from 'rehype-highlight'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'

const config: { token: string; api: string; rawContent: string } = JSON.parse(
  JSON.stringify(process.env.github),
)

const getRawContent = async (filename: string): Promise<string | undefined> => {
  const res = await fetch(`${config.rawContent}/${filename}`, {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${config.token}`,
      'X-GitHub-Api-Version': '2022-11-28',
    },
  })

  if (!res.ok) return undefined

  return await res.text()
}

const getRepoFiletree = async (): Promise<RepoFiletree | undefined> => {
  const res = await fetch(`${config.api}?recursive=1`, {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${config.token}`,
      'X-GitHub-Api-Version': '2022-11-28',
    },
  })

  if (!res.ok) return undefined

  return await res.json()
}

export const getPostContent = async (
  filename: string,
): Promise<Post | undefined> => {
  const rawMDX = await getRawContent(filename)

  if (!rawMDX || rawMDX === '404: Not Found') return undefined

  const { content, frontmatter } = await compileMDX<{
    title: string
    date: string
    description: string
    category: string
  }>({
    source: rawMDX,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          rehypeHighlight,
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: 'wrap',
            },
          ],
        ],
      },
    },
  })

  const temp = filename.split('/')

  const post: Post = {
    meta: {
      id: temp[1].split('.mdx')[0] || '',
      title: frontmatter.title,
      date: frontmatter.date,
      description: frontmatter.description,
      category: frontmatter.category,
    },
    content,
  }

  return post
}

export const getPosts = async (): Promise<Post[] | undefined> => {
  const repoFiletree = await getRepoFiletree()

  if (!repoFiletree) return undefined

  const files = repoFiletree.tree
    .map((f) => f.path)
    .filter((item) => item.endsWith('.mdx'))

  const posts: Post[] = []

  for (const file of files) {
    const post = await getPostContent(file)

    if (post) {
      posts.push(post)
    }
  }

  return posts
}
