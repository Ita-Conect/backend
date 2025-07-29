import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../../lib/prisma'

export async function updateUsuario(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({
    id: z.coerce.number(),
  })

  const bodySchema = z.object({
    nome: z.string().optional(),
    email: z.string().email().optional(),
    senha: z.string().min(8).optional(),
  })

  const { id } = paramsSchema.parse(request.params)
  const data = bodySchema.parse(request.body)

  const usuarioAtualizado = await prisma.usuario.update({
    where: { id },
    data,
  })

  return reply.send({
    message: 'Usuário atualizado com sucesso.',
    usuario: usuarioAtualizado,
  })
}
