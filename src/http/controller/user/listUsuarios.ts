import { FastifyReply, FastifyRequest } from 'fastify'
import { prisma } from '../../../lib/prisma'

export async function listUsuarios(request: FastifyRequest, reply: FastifyReply) {
  try {
    const usuarios = await prisma.usuario.findMany({
      select: {
        id: true,
        nome: true,
        email: true,
      },
    })

    return reply.send(usuarios)
  } catch (error) {
    console.error(error)
    return reply.status(500).send({ error: 'Erro ao buscar usuários.' })
  }
}
