import { FastifyInstance } from "fastify";
import { register } from "../http/controller/user/register";
import { authenticate } from "../http/controller/user/authenticate";
import { listUsuarios } from "../http/controller/user/listUsuarios";
import { deleteUsuario } from "../http/controller/user/deleteUsuario";
import { updateUsuario } from "../http/controller/user/updateUsuario";
import { createProduto } from "../http/controller/user/createProduto";
import { createLoja } from "../http/controller/user/createLoja";
import { registerempreendedor } from "../http/controller/user/registerempreendedor";
import { deleteempreendedor } from "../http/controller/user/deleteempreendedor";

export async function routes(app: FastifyInstance) {
  app.post("/register", register);
  app.post("/authenticate", authenticate);
  app.get("/listUsuarios", listUsuarios);
  app.delete("/deleteUsuario", deleteUsuario);
  app.put("/updateUsuario", updateUsuario);
  app.post("/createProduto", createProduto);
  app.post("/createLoja", createLoja);
  app.post("/registerempreendedor", registerempreendedor)
  app.delete("/deleteempreendedor", deleteempreendedor);
  
}

