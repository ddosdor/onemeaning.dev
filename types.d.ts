export type BlogPost = {
  [key: string]: string | string[] | undefined
  title: string
  date: string,
  excerpt: string
  tags?: string[]
  path: string[]
};
