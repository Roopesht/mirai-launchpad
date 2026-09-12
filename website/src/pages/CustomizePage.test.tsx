import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CustomizePage } from './CustomizePage'

describe('CustomizePage (ST-095)', () => {
  it('covers all six customization topics', () => {
    render(<CustomizePage />)

    // Topic titles render via shadcn's CardTitle, which is a styled <div>,
    // not a semantic heading element — so this checks text, not role.
    expect(screen.getByText(/edit your content/i)).toBeInTheDocument()
    expect(screen.getByText(/add a blog post/i)).toBeInTheDocument()
    expect(screen.getByText(/add a theme/i)).toBeInTheDocument()
    expect(screen.getByText(/toggle sections/i)).toBeInTheDocument()
    expect(screen.getByText(/run the setup script/i)).toBeInTheDocument()
    expect(screen.getByText(/configure analytics/i)).toBeInTheDocument()
  })

  it('mentions the specific config keys a forker needs to edit', () => {
    render(<CustomizePage />)
    expect(screen.getByText('site.config.json.availableThemes')).toBeInTheDocument()
    expect(screen.getAllByText('npm run setup').length).toBeGreaterThan(0)
    expect(screen.getAllByText(/G-XXXXXXXXXX/).length).toBeGreaterThan(0)
  })
})
