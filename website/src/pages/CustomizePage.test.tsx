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

  it('enables the JSON Content Editor (Epic 13 implemented), but not the others', () => {
    // vitest runs with import.meta.env.DEV === true, so this specifically
    // proves the *unimplemented* tools stay disabled even in a dev build —
    // not just "disabled because not running locally".
    renderPage()
    expect(screen.getByRole('link', { name: 'Open' })).toHaveAttribute('href', '/dev/content')

    const disabledButtons = screen.getAllByRole('button')
    expect(disabledButtons).toHaveLength(2) // Blog Post Editor + More tools
    for (const button of disabledButtons) {
      expect(button).toBeDisabled()
    }
  })
})
