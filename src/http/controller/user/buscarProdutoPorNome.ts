import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../../lib/prisma'

export async function buscarProdutoPorNome(request: FastifyRequest, reply: FastifyReply) {
  const querySchema = z.object({ termo: z.string() })
  const { termo } = querySchema.parse(request.query)

  const produtos = await prisma.produto.findMany({ where: { nome: { contains: termo, mode: 'insensitive' } } })
  return reply.send(produtos)
}