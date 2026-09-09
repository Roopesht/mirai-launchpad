import { z } from 'zod'
import { validateData } from '@/lib/validate-data'
import raw from '@/data/hobbies.json'

const hobbySchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  icon: z.string(),
})

export type Hobby = z.infer<typeof hobbySchema>

export const hobbies: Hobby[] = validateData(z.array(hobbySchema), raw, 'src/data/hobbies.json')
