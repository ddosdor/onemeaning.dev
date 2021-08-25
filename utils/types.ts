export type SocialLinksType = {
  [key: string]: string
  github: string
  linkedin: string
  twitter: string
}

export type PostAuthor = {
  avatar: string
  name: string
}

export type BlogPostType = {
  [key: string]: string | string[] | undefined | PostAuthor | boolean
  title: string
  thumbnail: string
  date: string,
  excerpt: string
  description: string
  tags?: string[]
  path: string
  author: PostAuthor
  isDraft: boolean
}

export type NpmPackageParams = {
  link?: string
  package?: string
}

export type GithubRepositoryParams = {
  link?: string
  username?: string
  reponame?: string
}

export type ProjectPostType = {
  [key: string]: string | number | undefined | GithubRepositoryParams | NpmPackageParams
  title: string
  date: string
  priority: number
  npm?: NpmPackageParams
  github: GithubRepositoryParams
  description: string
}
