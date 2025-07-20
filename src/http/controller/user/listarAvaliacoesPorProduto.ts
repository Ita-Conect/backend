import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../../lib/prisma'

export async function listarAvaliacoesPorProduto(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({
    produtoId: z.coerce.number(),
  })

  const { produtoId } = paramsSchema.parse(request.params)

  const avaliacoes = await prisma.avaliacao.findMany({
    where: { produtoId },
    include: {
      usuario: {
        select: {
          id: true,
          nome: true,
        },
      },
    },
  })

  return reply.send({
    produtoId,
    totalAvaliacoes: avaliacoes.length,
    avaliacoes,
  })
}
