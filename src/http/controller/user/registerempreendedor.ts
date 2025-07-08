import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../../lib/prisma'

export async function registerempreendedor(request: FastifyRequest, reply: FastifyReply) {
    const registerEmpreendedorBodySchema = z.object({
        nome: z.string(),
        email: z.string().email(),
        senha: z.string().min(8),
        telefone: z.string(),
    })

   const { email, nome, senha, telefone } = registerEmpreendedorBodySchema.parse(request.body)

   const user = await prisma.empreendedor.create({
        data: {
            email,
            nome,
            senha,
            telefone,
        }
    })

    return reply.status(201).send({
        user
    })
}