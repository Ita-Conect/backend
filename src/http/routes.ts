import { FastifyInstance } from "fastify";
import { register } from "../http/controller/user/register";
import { createProduto } from "../http/controller/user/createProduto";
import { createLoja } from "../http/controller/user/createLoja";
import { registerempreendedor } from "../http/controller/user/registerempreendedor";
import { getProdutoById } from "../http/controller/user/getProdutoById";
import { getTodosProdutos } from "../http/controller/user/getTodosProdutos";
import { listarProdutosPorCategoria } from "../http/controller/user/listarProdutosPorCategoria";
import { login } from "../http/controller/user/login";
import { getLojaByEmpreendedor } from "../http/controller/user/getLojaByEmpreendedor";
import { getProdutosPorLoja } from "../http/controller/user/getProdutosPorLoja";

export async function routes(app: FastifyInstance) {
  app.post("/usuario", register);
  app.post("/produto", createProduto);
  app.post("/lojas", createLoja);
  app.post("/empreendedor", registerempreendedor);
  app.get("/produto/:id", getProdutoById);
  app.get("/produto", getTodosProdutos);
  app.get("/listarProdutosPorCategoria", listarProdutosPorCategoria);
  app.post('/login', login);
  app.get('/loja/empreendedor/:id', getLojaByEmpreendedor);
  app.get('/produto/loja/:lojaId', getProdutosPorLoja);
}
