import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../../lib/prisma'

export async function authenticate(request: FastifyRequest, reply: FastifyReply) {
    const loginBodySchema = z.object({
    email: z.string().email(),
    senha: z.string().min(4),
  })

  const { email, senha } = loginBodySchema.parse(request.body)

  const user = await prisma.usuario.findUnique({
    where: { email },
  })

  if (!user) {
    return reply.status(404).send({ error: 'Usuário não encontrado.' })
  }

  if (user.senha !== senha) {
    return reply.status(401).send({ error: 'Credenciais inválidas.' })
  }

  return reply.send({
    message: 'Login realizado com sucesso!',
    user: {
      id: user.id,
      nome: user.nome,
      email: user.email,
    },
  })
}
