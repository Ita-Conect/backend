import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../../lib/prisma'

export async function register(request: FastifyRequest, reply: FastifyReply) {
    const registerBodySchema = z.object({
        nome: z.string(),
        email: z.string().email(),
        senha: z.string().min(4),
    })

   const { email, nome, senha } = registerBodySchema.parse(request.body)

   const user = await prisma.usuario.create({
        data: {
            email,
            nome,
            senha,
        }
    })

    return reply.status(201).send({
        user
    })
}