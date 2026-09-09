import { siteConfig } from '@/lib/content/site-config'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'

/**
 * Minimal header shell (ST-030's "control present in header on every page").
 * Full nav, scroll-shrink behavior, and the mobile bottom tab bar are built
 * out in Epic 4 — this just gives the theme switcher a real, permanent home.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <span className="font-heading text-lg font-semibold text-foreground">
          {siteConfig.siteTitle}
        </span>
        <ThemeSwitcher />
      </div>
    </header>
  )
}
