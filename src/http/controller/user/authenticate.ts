// src/routes/auth/login.ts

import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../../lib/prisma'

export async function authenticate(request: FastifyRequest, reply: FastifyReply) {
  // 1. Define e valida schema de entrada
  const loginBodySchema = z.object({
    email: z.string().email(),
    senha: z.string().min(4),
  })

  const { email, senha } = loginBodySchema.parse(request.body)

  // 2. Busca usuário no banco
  const user = await prisma.usuario.findUnique({
    where: { email },
  })

  // 3. Valida existência
  if (!user) {
    return reply.status(404).send({ error: 'Usuário não encontrado.' })
  }

  // 4. Verifica senha (atenção: em produção use hash + bcrypt!)
  if (user.senha !== senha) {
    return reply.status(401).send({ error: 'Credenciais inválidas.' })
  }

  // 5. Retorna sucesso (aqui você pode gerar um JWT, por exemplo)
  return reply.send({
    message: 'Login realizado com sucesso!',
    user: {
      id: user.id,
      nome: user.nome,
      email: user.email,
    },
  })
}
