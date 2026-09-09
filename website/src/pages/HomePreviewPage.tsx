import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { PageTransition } from '@/components/motion/PageTransition'
import { DynamicIcon } from '@/lib/icons'
import { personal } from '@/lib/content/personal'
import { skills } from '@/lib/content/skills'
import { projects } from '@/lib/content/projects'
import { testimonials } from '@/lib/content/testimonials'
import { socials } from '@/lib/content/socials'

function ProficiencyBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between text-sm">
        <span className="text-foreground">{label}</span>
        <span className="text-muted-foreground">{value}/5</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-primary"
          style={{ width: `${(value / 5) * 100}%` }}
        />
      </div>
    </div>
  )
}

/**
 * Real-world validation page (not part of the site IA) — a composite
 * Hero/About/Skills/Projects/Testimonials/Contact rendering of the ACTUAL
 * content from src/data/*.json through the theme system, end to end. This
 * previews the direction for Epic 5's real Home page; it isn't that page.
 */
export function HomePreviewPage() {
  return (
    <PageTransition>
      <div className="mx-auto flex max-w-4xl flex-col gap-16 px-4 py-12">
        {/* Hero */}
        <section className="flex flex-col items-center gap-6 text-center">
          <img
            src={personal.avatarUrl}
            alt={personal.name}
            width={128}
            height={128}
            className="rounded-full border border-border"
            loading="lazy"
          />
          <div className="flex flex-col gap-2">
            <h1 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">
              {personal.name}
            </h1>
            <p className="text-lg text-muted-foreground">{personal.title}</p>
            <p className="text-foreground">{personal.tagline}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild>
              <Link to="/resume">View Resume</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link to="/projects">See Projects</Link>
            </Button>
            <Button variant="outline" asChild>
              <a href={`mailto:${personal.email}`}>Let's talk</a>
            </Button>
          </div>
        </section>

        {/* About */}
        <section className="flex flex-col gap-4">
          <h2 className="font-heading text-2xl font-semibold text-foreground">About</h2>
          <div className="flex flex-col gap-4 text-foreground [&_strong]:font-semibold">
            <ReactMarkdown>{personal.bio}</ReactMarkdown>
          </div>
        </section>

        {/* Skills */}
        <section className="flex flex-col gap-6">
          <h2 className="font-heading text-2xl font-semibold text-foreground">Skills</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {skills.map((category) => (
              <div key={category.category} className="flex flex-col gap-3">
                <h3 className="font-heading text-lg font-medium text-foreground">
                  {category.category}
                </h3>
                {category.items.map((item) => (
                  <ProficiencyBar key={item.name} label={item.name} value={item.proficiency} />
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Projects preview */}
        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-2xl font-semibold text-foreground">Projects</h2>
            <Link to="/projects" className="text-sm text-primary hover:underline">
              View all
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.slice(0, 3).map((project) => (
              <Card key={project.id} className="overflow-hidden">
                {project.imageUrl && (
                  <img
                    src={project.imageUrl}
                    alt=""
                    className="aspect-video w-full object-cover"
                    loading="lazy"
                  />
                )}
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2 border-t-0 bg-transparent p-0 px-6 pb-6">
                  {project.repoUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                        Code
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button variant="secondary" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        Live
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="flex flex-col gap-6">
          <h2 className="font-heading text-2xl font-semibold text-foreground">Testimonials</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id}>
                <CardContent className="flex flex-col gap-3 pt-6">
                  <p className="text-sm text-foreground">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar}
                      alt=""
                      width={32}
                      height={32}
                      className="rounded-full"
                      loading="lazy"
                    />
                    <div className="text-xs">
                      <div className="font-medium text-foreground">{testimonial.name}</div>
                      <div className="text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-heading text-2xl font-semibold text-foreground">Get in touch</h2>
          <a href={`mailto:${personal.email}`} className="text-primary hover:underline">
            {personal.email}
          </a>
          <div className="flex gap-4">
            {socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.platform}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <DynamicIcon name={social.icon} className="size-5" />
              </a>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
