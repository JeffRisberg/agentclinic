import { describe, it, expect, beforeAll } from 'vitest'
import Footer from '../../src/components/Footer'
import { render } from '../helpers/render'

describe('Footer component', () => {
  let html: string

  beforeAll(async () => {
    html = await render(<Footer />)
  })

  it('renders a <footer> element', () => {
    expect(html).toContain('<footer>')
  })

  it('displays the current year', () => {
    expect(html).toContain(String(new Date().getFullYear()))
  })

  it('includes "AgentClinic" in the copyright notice', () => {
    expect(html).toContain('AgentClinic')
  })

  it('includes "All rights reserved"', () => {
    expect(html).toContain('All rights reserved.')
  })
})
