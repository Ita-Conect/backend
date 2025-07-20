import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../../lib/prisma'

export async function criarAvaliacaoProduto(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({
    produtoId: z.coerce.number(),
  })

  const bodySchema = z.object({
    usuarioId: z.number(),
    nota: z.number().min(1).max(5),
    comentario: z.string(),
  })

  const { produtoId } = paramsSchema.parse(request.params)
  const { usuarioId, nota, comentario } = bodySchema.parse(request.body)

  const avaliacao = await prisma.avaliacao.create({
    data: {
      produtoId,
      usuarioId,
      nota,
      comentario,
    },
  })

  return reply.status(201).send({
    message: 'Avaliação criada com sucesso.',
    avaliacao,
  })
}
