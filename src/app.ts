import fastify from 'fastify'
import cors from '@fastify/cors'
import { routes } from './http/routes'

const app = fastify()

app.register(cors, {
  origin: 'http://localhost:5173',
})

app.register(routes)

app.listen({ port: 3333 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Servidor rodando em ${address}`)
})

export { app }
