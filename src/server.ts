import { app } from "../src/app"

app.listen({ port: 3333, host: '0.0.0.0' })
  .then(() => {
    console.log('🚀 Servidor rodando em http://localhost:3333')
  })