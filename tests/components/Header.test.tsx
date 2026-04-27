import { describe, it, expect, beforeAll } from 'vitest'
import Header from '../../src/components/Header'
import { render } from '../helpers/render'

describe('Header component', () => {
  let html: string

  beforeAll(async () => {
    html = await render(<Header />)
  })

  it('renders a <header> element', () => {
    expect(html).toContain('<header>')
  })

  it('displays the site name "AgentClinic"', () => {
    expect(html).toContain('AgentClinic')
  })

  it('renders a <nav> element', () => {
    expect(html).toContain('<nav>')
  })

  it('includes a link to the home route', () => {
    expect(html).toContain('href="/"')
  })

  it('wraps content in a header-inner div', () => {
    expect(html).toContain('class="header-inner"')
  })
})
