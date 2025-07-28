import { FastifyRequest, FastifyReply } from 'fastify'
import { prisma } from '../../../lib/prisma'

export async function getTodosProdutos(request: FastifyRequest, reply: FastifyReply) {
  const produtos = await prisma.produto.findMany({
    include: {
      loja: {
        select: {
          nome: true
        }
      }
    }
  })
  return reply.send(produtos)
}