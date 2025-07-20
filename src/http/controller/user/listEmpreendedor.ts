import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../../lib/prisma'

export async function listEmpreendedor(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({
    id: z.coerce.number(),
  })

  const { id } = paramsSchema.parse(request.params)

  const empreendedor = await prisma.empreendedor.findUnique({
    where: { id },
    select: {
      id: true,
      nome: true,
      email: true,
      telefone: true,
    },
  })

  if (!empreendedor) {
    return reply.status(404).send({ error: 'Empreendedor não encontrado.' })
  }

  return reply.send(empreendedor)
}
