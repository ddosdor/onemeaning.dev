export { IContentDocument } from '@nuxt/content/types/content.d';

export type SocialLinksType = {
  [key: string]: string
  github: string
  linkedin: string
  twitter: string
}

export type BlogPostType = {
  [key: string]: string | string[] | undefined
  title: string
  thumbnail: string
  date: string,
  excerpt: string
  tags?: string[]
  path: string
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
