import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import { jsxRenderer } from 'hono/jsx-renderer'
import Home from './pages/Home'

const app = new Hono()

app.use('/styles/*', serveStatic({ root: './public' }))

app.use('*', jsxRenderer())

app.get('/', (c) => c.render(<Home />))

const port = Number(process.env.PORT ?? 3000)

serve({ fetch: app.fetch, port }, () => {
  console.log(`Listening on http://localhost:${port}`)
})
