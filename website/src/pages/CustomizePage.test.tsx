import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { CustomizePage } from './CustomizePage'

function renderPage() {
  return render(
    <MemoryRouter>
      <CustomizePage />
    </MemoryRouter>,
  )
}

describe('CustomizePage (ST-111)', () => {
  it('lists every dev tool, including a placeholder for future ones', () => {
    renderPage()
    expect(screen.getByText('JSON Content Editor')).toBeInTheDocument()
    expect(screen.getByText('Blog Post Editor')).toBeInTheDocument()
    expect(screen.getByText('More tools')).toBeInTheDocument()
  })

  it('shows a prominent, always-visible localhost-only notice', () => {
    renderPage()
    expect(screen.getByRole('alert')).toHaveTextContent(/npm run dev/i)
  })

  it('disables every tool button until its route is actually implemented', () => {
    // vitest runs with import.meta.env.DEV === true, so this specifically
    // proves the *unimplemented* tools stay disabled even in a dev build —
    // not just "disabled because not running locally".
    renderPage()
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(3)
    for (const button of buttons) {
      expect(button).toBeDisabled()
    }
    expect(screen.queryByRole('link', { name: 'Open' })).not.toBeInTheDocument()
  })
})
