import { z } from 'zod'
import { validateData } from '@/lib/validate-data'
import raw from '@/data/site.config.json'

export const themeIdSchema = z.enum([
  'modern-minimal',
  'dark-tech',
  'vibrant-creative',
  'blue-professional',
])
export type ThemeId = z.infer<typeof themeIdSchema>

const navItemSchema = z.object({
  id: z.string(),
  label: z.string(),
  enabled: z.boolean(),
  order: z.number(),
})

const siteConfigSchema = z.object({
  siteTitle: z.string(),
  tagline: z.string(),
  basePath: z.string(),
  defaultTheme: themeIdSchema,
  availableThemes: z.array(themeIdSchema),
  favicon: z.string(),
  seo: z.object({
    description: z.string(),
    ogImage: z.string(),
  }),
  navigation: z.array(navItemSchema),
  contactForm: z
    .object({
      provider: z.literal('formspree'),
      endpoint: z.string().url(),
    })
    .optional(),
  analytics: z
    .object({
      provider: z.literal('ga4'),
      measurementId: z.string(),
    })
    .optional(),
  showCustomizeGuide: z.boolean(),
})

export type SiteConfig = z.infer<typeof siteConfigSchema>

export const siteConfig: SiteConfig = validateData(
  siteConfigSchema,
  raw,
  'src/data/site.config.json',
)
