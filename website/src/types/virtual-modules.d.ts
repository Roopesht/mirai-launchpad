declare module 'virtual:blog-posts' {
  interface RawBlogPost {
    slug: string
    data: Record<string, unknown>
    content: string
  }

  const posts: RawBlogPost[]
  export default posts
}
