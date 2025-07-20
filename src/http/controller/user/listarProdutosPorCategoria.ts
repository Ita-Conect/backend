import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../../lib/prisma'

export async function listarProdutosPorCategoria(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({ nome: z.string() })
  const { nome } = paramsSchema.parse(request.params)

  const produtos = await prisma.produto.findMany({ where: { categoria: nome } })
  return reply.send(produtos)
}