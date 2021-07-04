export { IContentDocument } from '@nuxt/content/types/content.d';
export interface BlogPost {
  title: string
  date: string,
  excerpt: string
  tags?: string[]
}
