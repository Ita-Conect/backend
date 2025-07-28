import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../../lib/prisma'

export async function getLojaByEmpreendedor(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({ id: z.coerce.number() })
  const { id } = paramsSchema.parse(request.params)

  const loja = await prisma.loja.findFirst({
    where: {
      empreendedorId: id,
    },
  })

  if (!loja) {
    return reply.status(404).send({ message: 'Loja não encontrada' })
  }

  return reply.send(loja)
}
