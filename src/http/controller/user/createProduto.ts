import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../../lib/prisma'

export async function createProduto(request: FastifyRequest, reply: FastifyReply) {
  const bodySchema = z.object({
    nome: z.string(),
    descricao: z.string(),
    preco: z.coerce.number(),
    imagem: z.string(),
    categoria: z.string(),
    lojaId: z.number(),
  })

  const data = bodySchema.parse(request.body)

  const produto = await prisma.produto.create({
    data,
  })

  return reply.status(201).send({ message: 'Produto criado com sucesso.', produto })
}
