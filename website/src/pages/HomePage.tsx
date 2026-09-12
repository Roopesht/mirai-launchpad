import { PageTransition } from '@/components/motion/PageTransition'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Hobbies } from '@/components/sections/Hobbies'
import { ProjectsPreview } from '@/components/sections/ProjectsPreview'
import { Testimonials } from '@/components/sections/Testimonials'
import { Gallery } from '@/components/sections/Gallery'
import { Contact } from '@/components/sections/Contact'

/**
 * Home: a single scroll page (questionnaire A2) — Hero, then every other
 * section in a fixed order. Resume, the full Projects list, Blog, and
 * Customize are separate routes (see App.tsx), not part of this scroll.
 */
export function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <About />
      <Skills />
      <Hobbies />
      <ProjectsPreview />
      <Testimonials />
      <Gallery />
      <Contact />
    </PageTransition>
  )
}
