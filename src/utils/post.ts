import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeHighlight from 'rehype-highlight'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'

const config: { token: string; api: string; rawContent: string } = JSON.parse(
  JSON.stringify(process.env.github),
)
