import { describe, it, expect } from 'vitest'
import app from '../src/app'

describe('GET /', () => {
  let res: Response
  let body: string

  // Fetch once; individual tests inspect the shared result.
  async function getRoot() {
    if (!res) {
      res = await app.request('/')
      body = await res.text()
    }
    return { res, body }
  }

  it('returns HTTP 200', async () => {
    const { res } = await getRoot()
    expect(res.status).toBe(200)
  })

  it('returns text/html content-type', async () => {
    const { res } = await getRoot()
    expect(res.headers.get('content-type')).toContain('text/html')
  })

  describe('document structure', () => {
    it('opens with an <html> tag', async () => {
      const { body } = await getRoot()
      expect(body).toMatch(/<html[^>]*>/)
    })

    it('includes a <head> section', async () => {
      const { body } = await getRoot()
      expect(body).toContain('<head>')
    })

    it('includes a <body> section', async () => {
      const { body } = await getRoot()
      expect(body).toContain('<body>')
    })

    it('sets the page title to AgentClinic', async () => {
      const { body } = await getRoot()
      expect(body).toContain('<title>AgentClinic</title>')
    })

    it('links the main stylesheet', async () => {
      const { body } = await getRoot()
      expect(body).toContain('href="/styles/main.css"')
    })

    it('includes a viewport meta tag', async () => {
      const { body } = await getRoot()
      expect(body).toContain('name="viewport"')
    })
  })

  describe('header', () => {
    it('contains a <header> element', async () => {
      const { body } = await getRoot()
      expect(body).toContain('<header>')
    })

    it('displays the site name', async () => {
      const { body } = await getRoot()
      expect(body).toContain('AgentClinic')
    })

    it('includes a home navigation link', async () => {
      const { body } = await getRoot()
      expect(body).toContain('href="/"')
    })
  })

  describe('main content', () => {
    it('contains a <main> element', async () => {
      const { body } = await getRoot()
      expect(body).toContain('<main>')
    })

    it('renders the h1 heading', async () => {
      const { body } = await getRoot()
      expect(body).toContain('<h1>AgentClinic is open for business</h1>')
    })

    it('includes the wellness platform description', async () => {
      const { body } = await getRoot()
      expect(body).toContain('wellness platform for AI agents')
    })

    it('includes the humorous closing line', async () => {
      const { body } = await getRoot()
      expect(body).toContain("AI agents have feelings too")
    })
  })

  describe('footer', () => {
    it('contains a <footer> element', async () => {
      const { body } = await getRoot()
      expect(body).toContain('<footer>')
    })

    it('displays the current year in the copyright notice', async () => {
      const { body } = await getRoot()
      expect(body).toContain(String(new Date().getFullYear()))
    })

    it('includes AgentClinic in the copyright notice', async () => {
      const { body } = await getRoot()
      expect(body).toContain('AgentClinic. All rights reserved.')
    })
  })
})
