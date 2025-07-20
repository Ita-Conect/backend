import { FastifyRequest, FastifyReply } from 'fastify'
import { prisma } from '../../../lib/prisma'

export async function getTodosProdutos(request: FastifyRequest, reply: FastifyReply) {
  const produtos = await prisma.produto.findMany()
  return reply.send(produtos)
}