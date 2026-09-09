import { useParams } from 'react-router-dom'
import { PageTransition } from '@/components/motion/PageTransition'

export function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>()

  return (
    <PageTransition>
      <h1>Project: {projectId}</h1>
    </PageTransition>
  )
}
