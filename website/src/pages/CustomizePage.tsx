import type { ReactNode } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PageTransition } from '@/components/motion/PageTransition'

interface Topic {
  title: string
  body: ReactNode
}

const topics: Topic[] = [
  {
    title: '1. Edit your content',
    body: (
      <>
        <p>
          Every piece of content lives in <code>src/data/*.json</code> — one file per section, no
          database, no CMS. Edit a file, save, and the site updates.
        </p>
        <ul className="list-disc pl-5">
          <li>
            <code>site.config.json</code> — site title, tagline, theme, navigation, SEO
          </li>
          <li>
            <code>personal.json</code> — name, title, tagline, bio, contact info, avatar
          </li>
          <li>
            <code>experience.json</code>, <code>education.json</code> — resume history
          </li>
          <li>
            <code>skills.json</code> — categories and proficiency (1–5)
          </li>
          <li>
            <code>certifications.json</code>, <code>awards.json</code> — resume credentials
          </li>
          <li>
            <code>projects.json</code>, <code>hobbies.json</code>, <code>testimonials.json</code>,{' '}
            <code>socials.json</code>, <code>gallery.json</code> — the rest of the home page
          </li>
        </ul>
        <p>
          Every field is validated — if a file doesn&rsquo;t match the expected shape, you&rsquo;ll
          get a clear error naming the file and field instead of a blank page.
        </p>
      </>
    ),
  },
  {
    title: '2. Add a blog post',
    body: (
      <>
        <p>
          Create a new file under <code>content/blog/</code>, named{' '}
          <code>YYYY-MM-DD-your-slug.md</code>. The date in the filename doesn&rsquo;t have to match
          the frontmatter <code>date</code> field, but keeping them aligned makes the folder easier
          to scan.
        </p>
        <p>Required frontmatter fields:</p>
        <pre className="overflow-x-auto rounded-[var(--radius)] bg-muted p-4 text-sm">
          {`---
title: "Your post title"
date: "2026-03-01"
tags: ["tag-one", "tag-two"]
excerpt: "One or two sentences shown on the blog list page."
---`}
        </pre>
        <p>
          Write the body below the frontmatter in standard Markdown. Code blocks render as plain
          preformatted text (no syntax highlighting) — this template deliberately keeps that simple.
        </p>
      </>
    ),
  },
  {
    title: '3. Add a theme',
    body: (
      <>
        <p>
          Themes live under <code>src/themes/</code>, one file per theme, each exporting a
          `ThemeDefinition` — the same token shape (background, foreground, primary, accent, radius,
          fonts, etc.) every other theme uses.
        </p>
        <ol className="list-decimal pl-5">
          <li>
            Copy an existing file in <code>src/themes/</code> as a starting point.
          </li>
          <li>
            Register it in <code>src/themes/index.ts</code>&rsquo;s <code>themes</code> object.
          </li>
          <li>
            Add its id to <code>site.config.json.availableThemes</code> so it shows up in the theme
            switcher.
          </li>
        </ol>
        <p>
          No component code needs to change — the switcher and every page pick it up automatically.
        </p>
      </>
    ),
  },
  {
    title: '4. Toggle sections',
    body: (
      <>
        <p>
          <code>site.config.json.navigation</code> controls which top-level pages appear in the
          header/mobile nav, and in what order:
        </p>
        <pre className="overflow-x-auto rounded-[var(--radius)] bg-muted p-4 text-sm">
          {`{ "id": "blog", "label": "Blog", "enabled": true, "order": 4 }`}
        </pre>
        <p>
          Set <code>enabled</code> to <code>false</code> to remove an entry from navigation, or
          change <code>order</code> to reorder the nav.
        </p>
      </>
    ),
  },
  {
    title: '5. Run the setup script',
    body: (
      <>
        <p>
          <code>npm run setup</code> is an interactive CLI that asks for your site title,
          name/title/tagline, GitHub username, repo name, contact email, socials, and default theme
          — then writes the answers directly into <code>site.config.json</code>,{' '}
          <code>personal.json</code>, and <code>socials.json</code>, and updates{' '}
          <code>package.json</code>&rsquo;s <code>name</code>/<code>homepage</code> fields.
          It&rsquo;s safe to re-run if you want to change an earlier answer.
        </p>
      </>
    ),
  },
  {
    title: '6. Configure analytics (optional)',
    body: (
      <>
        <p>
          This template supports an optional, page-views-only Google Analytics 4 snippet — no other
          tracking. To enable it:
        </p>
        <ol className="list-decimal pl-5">
          <li>
            Create a GA4 property at{' '}
            <a
              href="https://analytics.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              analytics.google.com
            </a>{' '}
            and find its Measurement ID (looks like <code>G-XXXXXXXXXX</code>) under Admin → Data
            Streams → your web stream.
          </li>
          <li>
            Add it to <code>site.config.json</code>:
            <pre className="mt-2 overflow-x-auto rounded-[var(--radius)] bg-muted p-4 text-sm">
              {`"analytics": { "provider": "ga4", "measurementId": "G-XXXXXXXXXX" }`}
            </pre>
          </li>
        </ol>
        <p>
          Leave the <code>analytics</code> field out entirely to skip tracking — nothing loads
          unless a measurement ID is configured.
        </p>
      </>
    ),
  },
]

/**
 * In-app Customize guide (ST-094, ST-095) — visible via the main nav
 * whenever `showCustomizeGuide` is true (default). Mirrors the Maintainer
 * Guide (Epic 10) but lives inside the running app.
 */
export function CustomizePage() {
  return (
    <PageTransition>
      <div className="mx-auto flex max-w-3xl flex-col gap-8 px-4 py-16">
        <div className="flex flex-col gap-2">
          <h1 className="font-heading text-3xl font-bold text-foreground">Customize this site</h1>
          <p className="text-muted-foreground">
            This site is a fork of an open-source portfolio template. Here&rsquo;s how to make it
            yours.
          </p>
        </div>

        {topics.map((topic) => (
          <Card key={topic.title}>
            <CardHeader>
              <CardTitle className="text-lg">{topic.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 text-sm text-foreground [&_a]:break-words [&_code]:rounded [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-xs [&_li]:mb-1">
              {topic.body}
            </CardContent>
          </Card>
        ))}
      </div>
    </PageTransition>
  )
}
