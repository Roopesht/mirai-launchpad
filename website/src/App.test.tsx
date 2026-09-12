import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { personal } from '@/lib/content/personal'
import App from './App'

describe('App', () => {
  it('renders the home page at the root route', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: personal.name, level: 1 })).toBeInTheDocument()
  })

  it('renders header, main, and footer landmarks on every page (ST-040)', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
