import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../../lib/prisma'

export async function updateProduto(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({ id: z.coerce.number() })
  const bodySchema = z.object({ nome: z.string().optional(), preco: z.number().optional(), descricao: z.string().optional(), categoria: z.string().optional() })
  const { id } = paramsSchema.parse(request.params)
  const data = bodySchema.parse(request.body)

  const produtoAtualizado = await prisma.produto.update({ where: { id }, data })
  return reply.send({ message: 'Produto atualizado com sucesso.', produto: produtoAtualizado })
}