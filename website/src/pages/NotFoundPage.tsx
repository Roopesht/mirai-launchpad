import { Link } from 'react-router-dom'
import { PageTransition } from '@/components/motion/PageTransition'

export function NotFoundPage() {
  return (
    <PageTransition>
      <h1>Page not found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">Back home</Link>
    </PageTransition>
  )
}
