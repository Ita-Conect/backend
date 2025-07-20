import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../../lib/prisma'

export async function authenticateEmpreendedor(request: FastifyRequest, reply: FastifyReply) {
  const loginBodySchema = z.object({
    email: z.string().email(),
    senha: z.string().min(8),
  })

  const { email, senha } = loginBodySchema.parse(request.body)

  const empreendedor = await prisma.empreendedor.findUnique({
    where: { email },
  })

  if (!empreendedor) {
    return reply.status(404).send({ error: 'Empreendedor não encontrado.' })
  }

  if (empreendedor.senha !== senha) {
    return reply.status(401).send({ error: 'Credenciais inválidas.' })
  }

  return reply.send({
    message: 'Login do empreendedor realizado com sucesso!',
    empreendedor: {
      id: empreendedor.id,
      nome: empreendedor.nome,
      email: empreendedor.email,
    },
  })
}
