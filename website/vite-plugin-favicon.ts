import fs from 'node:fs'
import path from 'node:path'
import type { Plugin } from 'vite'

const MIME_TYPES: Record<string, string> = {
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
}

/**
 * Injects the `<link rel="icon">` href/type from `site.config.json.favicon`
 * (ST-098), so forkers only need to change the config value, not index.html.
 */
export function faviconFromConfig(): Plugin {
  return {
    name: 'favicon-from-config',
    transformIndexHtml(html) {
      const configPath = path.resolve(import.meta.dirname, 'src/data/site.config.json')
      const config = JSON.parse(fs.readFileSync(configPath, 'utf-8')) as { favicon: string }
      const ext = path.extname(config.favicon).toLowerCase()
      const type = MIME_TYPES[ext] ?? 'image/svg+xml'

      return html.replace(
        /<link rel="icon"[^>]*\/?>/,
        `<link rel="icon" type="${type}" href="${config.favicon}" />`,
      )
    },
  }
}
