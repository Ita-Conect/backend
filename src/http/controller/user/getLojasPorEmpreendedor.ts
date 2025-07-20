import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../../lib/prisma'

export async function getLojasPorEmpreendedor(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({ id: z.coerce.number() })
  const { id } = paramsSchema.parse(request.params)

  const lojas = await prisma.loja.findMany({ where: { empreendedorId: id } })
  return reply.send(lojas)
}