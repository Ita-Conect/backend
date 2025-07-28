import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../../lib/prisma'

export async function getProdutoById(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({
    id: z.coerce.number()
  })

  const { id } = paramsSchema.parse(request.params)

  const produto = await prisma.produto.findUnique({
    where: { id },
    include: {
      loja: {
        select: {
          nome: true,
          telefone: true,
          email: true,
        }
      }
    }
  })

  return reply.send(produto)
}
