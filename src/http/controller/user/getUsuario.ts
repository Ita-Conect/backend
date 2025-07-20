import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../../lib/prisma'

export async function getUsuario(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({
    id: z.coerce.number(),
  })

  const { id } = paramsSchema.parse(request.params)

  const usuario = await prisma.usuario.findUnique({
    where: { id },
    select: {
      id: true,
      nome: true,
      email: true,
    },
  })

  if (!usuario) {
    return reply.status(404).send({ error: 'Usuário não encontrado.' })
  }

  return reply.send(usuario)
}
