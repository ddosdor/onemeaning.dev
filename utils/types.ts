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

export type ProjectPostType = {
  [key: string]: string | number
  title: string
  date: string
  priority: number
  npm: string
  github: string
  description: string
}
