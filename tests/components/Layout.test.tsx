import { describe, it, expect, beforeAll } from 'vitest'
import Layout from '../../src/components/Layout'
import { render } from '../helpers/render'

describe('Layout component', () => {
  let html: string

  beforeAll(async () => {
    html = await render(<Layout><p id="test-child">hello</p></Layout>)
  })

  describe('document shell', () => {
    it('renders an <html> tag with lang="en"', () => {
      expect(html).toMatch(/lang="en"/)
    })

    it('includes a UTF-8 charset meta tag', () => {
      expect(html).toMatch(/charset="UTF-8"/i)
    })

    it('includes a viewport meta tag', () => {
      expect(html).toContain('name="viewport"')
    })

    it('sets the page title to "AgentClinic"', () => {
      expect(html).toContain('<title>AgentClinic</title>')
    })

    it('links the main stylesheet', () => {
      expect(html).toContain('href="/styles/main.css"')
    })
  })

  describe('layout regions', () => {
    it('renders a <header>', () => {
      expect(html).toContain('<header>')
    })

    it('renders a <main>', () => {
      expect(html).toContain('<main>')
    })

    it('renders a <footer>', () => {
      expect(html).toContain('<footer>')
    })

    it('renders children inside <main>', () => {
      expect(html).toMatch(/<main[^>]*>[\s\S]*id="test-child"[\s\S]*<\/main>/)
    })
  })
})
