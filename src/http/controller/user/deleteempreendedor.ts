import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../../lib/prisma'

export async function deleteempreendedor(request: FastifyRequest, reply: FastifyReply) {
    const deleteBodySchema = z.object({
        email: z.string().email(),
        senha: z.string().min(8),
    })

  const { email, senha } = deleteBodySchema.parse(request.body)

  const user = await prisma.empreendedor.findUnique({
    where: { email },
  })

  if (!user) {
    return reply.status(404).send({ error: 'Usuário não encontrado.' })
  }

  if (user.senha !== senha) {
    return reply.status(401).send({ error: 'Credenciais inválidas.' })
  }

  await prisma.empreendedor.delete({
        where: { email },
    })

  return reply.send({
    message: 'Usuário deletado!',
    user: {
      id: user.id,
      email: user.email,
    },
  })
}