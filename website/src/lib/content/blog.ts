import matter from 'gray-matter'
import { z } from 'zod'
import { validateData } from '@/lib/validate-data'

const frontmatterSchema = z.object({
  title: z.string(),
  date: z.string(),
  tags: z.array(z.string()),
  excerpt: z.string(),
})

export interface BlogPost {
  slug: string
  title: string
  date: string
  tags: string[]
  excerpt: string
  content: string
}

const postFiles = import.meta.glob('/content/blog/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

function fileToSlug(path: string): string {
  const filename = path.split('/').pop() ?? path
  return filename.replace(/\.md$/, '')
}

const posts: BlogPost[] = Object.entries(postFiles).map(([path, raw]) => {
  const slug = fileToSlug(path)
  const { data, content } = matter(raw)
  const frontmatter = validateData(frontmatterSchema, data, `content/blog/${slug}.md`)

  return { slug, ...frontmatter, content }
})

// Newest first (ST-054).
export const blogPosts: BlogPost[] = [...posts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
)

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}
