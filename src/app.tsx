import { Hono } from 'hono'
import { serveStatic } from '@hono/node-server/serve-static'
import { jsxRenderer } from 'hono/jsx-renderer'
import Home from './pages/Home'

const app = new Hono()

app.use('/styles/*', serveStatic({ root: './public' }))
app.use('*', jsxRenderer())
app.get('/', (c) => c.render(<Home />))

export default app
