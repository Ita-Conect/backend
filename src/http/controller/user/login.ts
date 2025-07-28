import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { prisma } from '../../../lib/prisma';

export async function login(request: FastifyRequest, reply: FastifyReply) {
  const bodySchema = z.object({
    email: z.string().email(),
    senha: z.string()
  });

  const { email, senha } = bodySchema.parse(request.body);

  const usuario = await prisma.usuario.findUnique({
    where: { email, senha }
  });

  if (usuario) {
    return reply.send({ tipo: 'usuario', dados: usuario });
  }

  const empreendedor = await prisma.empreendedor.findUnique({
    where: { email, senha }
  });

  if (empreendedor) {
    return reply.send({ tipo: 'empreendedor', dados: empreendedor });
  }

  return reply.status(401).send({ erro: 'Email ou senha inválidos' });
}
