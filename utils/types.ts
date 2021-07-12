import { IContentDocument } from '@nuxt/content/types/content.d';

export type SocialLinksType = {
  [key: string]: string
  github: string
  linkedin: string
  twitter: string
}

export interface BlogPostType {
  title: string
  date: string,
  excerpt: string
  tags?: string[]
  path: string
}

export type ContentDocumentWithBlogPost = BlogPostType & IContentDocument
