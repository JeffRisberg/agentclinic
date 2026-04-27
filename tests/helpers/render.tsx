import { Hono } from 'hono'
import { jsxRenderer } from 'hono/jsx-renderer'

/**
 * Renders a JSX element through the Hono JSX renderer and returns the full
 * HTML string. Uses the same rendering pipeline as the production app.
 */
export async function render(element: JSX.Element): Promise<string> {
  const app = new Hono()
  app.use('*', jsxRenderer())
  app.get('/', (c) => c.render(element))
  const res = await app.request('/')
  return res.text()
}
