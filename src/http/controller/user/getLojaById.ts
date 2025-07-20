import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../../lib/prisma'

export async function getLojaById(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({ id: z.coerce.number() })
  const { id } = paramsSchema.parse(request.params)

  const loja = await prisma.loja.findUnique({ where: { id } })
  return reply.send(loja)
}
