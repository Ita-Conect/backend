import { FastifyRequest, FastifyReply } from 'fastify'
import { prisma } from '../../../lib/prisma'
import { z } from 'zod'

export async function getProdutosPorLoja(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({
    lojaId: z.string(),
  })

  const { lojaId } = paramsSchema.parse(request.params)

  const produtos = await prisma.produto.findMany({
    where: {
      lojaId: Number(lojaId),
    },
  })

  return reply.send(produtos)
}
