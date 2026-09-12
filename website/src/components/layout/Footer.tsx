import { personal } from '@/lib/content/personal'
import { socials } from '@/lib/content/socials'
import { DynamicIcon } from '@/lib/icons'

/**
 * Global footer (ST-039): social links + copyright. Every page renders
 * this, plus a fixed MobileTabBar below `sm` — bottom padding on <main>
 * (see App.tsx) keeps the tab bar from covering footer content there.
 *
 * Epic 11 adds the OjasaMirai attribution badge directly in this file
 * (hardcoded, not data-driven — ST-090) — insert it below the copyright
 * line, inside <footer>, when that epic starts.
 */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-8 text-sm text-muted-foreground">
        <div className="flex gap-4">
          {socials.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.platform}
              className="transition-colors hover:text-foreground"
            >
              <DynamicIcon name={social.icon} className="size-5" />
            </a>
          ))}
        </div>
        <p>
          &copy; {year} {personal.name}
        </p>
      </div>
    </footer>
  )
}
