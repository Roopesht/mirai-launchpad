import { z } from 'zod'
import { validateData } from '@/lib/validate-data'
import raw from '@/data/experience.json'

const experienceEntrySchema = z.object({
  id: z.string(),
  company: z.string(),
  role: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  highlights: z.array(z.string()),
})

export type ExperienceEntry = z.infer<typeof experienceEntrySchema>

export const experience: ExperienceEntry[] = validateData(
  z.array(experienceEntrySchema),
  raw,
  'src/data/experience.json',
)
