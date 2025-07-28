import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../../lib/prisma'

export async function createLoja(request: FastifyRequest, reply: FastifyReply) {
  const bodySchema = z.object({
    nome: z.string(),
    email: z.string().email(),
    telefone: z.string(),
    descricao: z.string(),
    endereco: z.string(),
    categoria: z.string(),
    empreendedorId: z.number(),
  })

  const {
    nome,
    email,
    telefone,
    descricao,
    endereco,
    categoria,
    empreendedorId,
  } = bodySchema.parse(request.body)

  const loja = await prisma.loja.create({
    data: {
      nome,
      email,
      telefone,
      descricao,
      endereco,
      categoria,
      empreendedor: {
        connect: { id: empreendedorId },
      },
    },
  })

  return reply.status(201).send({ message: 'Loja criada com sucesso.', loja })
}
