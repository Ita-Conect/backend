import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../../lib/prisma'

export async function deleteProduto(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({ id: z.coerce.number() })
  const { id } = paramsSchema.parse(request.params)

  await prisma.produto.delete({ where: { id } })
  return reply.send({ message: 'Produto deletado com sucesso.' })
}