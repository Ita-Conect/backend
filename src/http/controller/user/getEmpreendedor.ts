import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../../lib/prisma'

export async function getEmpreendedor(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({ id: z.coerce.number() })
  const { id } = paramsSchema.parse(request.params)

  const empreendedor = await prisma.empreendedor.findUnique({ where: { id } })
  return reply.send(empreendedor)
}
