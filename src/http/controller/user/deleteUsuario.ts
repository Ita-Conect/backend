import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../../lib/prisma'

export async function deleteUsuario(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({
    id: z.coerce.number(),
  })

  const { id } = paramsSchema.parse(request.params)

  await prisma.usuario.delete({
    where: { id },
  })

  return reply.send({ message: 'Usuário deletado com sucesso.' })
}
