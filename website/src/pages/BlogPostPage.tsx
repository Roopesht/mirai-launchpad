import { useParams } from 'react-router-dom'
import { PageTransition } from '@/components/motion/PageTransition'

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <PageTransition>
      <h1>Post: {slug}</h1>
    </PageTransition>
  )
}
