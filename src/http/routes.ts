import { FastifyInstance } from "fastify";
import { register } from "../http/controller/user/register";
import { authenticate } from "../http/controller/user/authenticate";

export async function routes(app: FastifyInstance) {
  app.post("/register", register);
  app.post("/authenticate", authenticate);
  
}

