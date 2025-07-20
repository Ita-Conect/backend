import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../../lib/prisma'

export async function updateEmpreendedor(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({ id: z.coerce.number() })
  const bodySchema = z.object({ nome: z.string().optional(), email: z.string().email().optional(), senha: z.string().min(8).optional() })
  const { id } = paramsSchema.parse(request.params)
  const data = bodySchema.parse(request.body)

  const empreendedorAtualizado = await prisma.empreendedor.update({ where: { id }, data })
  return reply.send({ message: 'Empreendedor atualizado com sucesso.', empreendedor: empreendedorAtualizado })
}
