type RepoFiletree = {
  tree: { path: string }[]
}

type PostMeta = {
  id: string
  title: string
  date: string
  description: string
  category: string
}

type Post = {
  meta: PostMeta
  content: ReactElement<any, string | JSXElementConstructor<any>>
}
