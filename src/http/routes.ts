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
import { authenticateEmpreendedor } from "../http/controller/user/authenticateEmpreendedor";
import { getUsuario } from "../http/controller/user/getUsuario";
import { listEmpreendedor } from "../http/controller/user/listEmpreendedor";
import { buscarProdutoPorNome } from "../http/controller/user/buscarProdutoPorNome";
import { criarAvaliacaoProduto } from "../http/controller/user/criarAvaliacaoProduto";
import { deleteProduto } from "../http/controller/user/deleteProduto";
import { getLojaById } from "../http/controller/user/getLojaById";
import { getLojasPorEmpreendedor } from "../http/controller/user/getLojasPorEmpreendedor";
import { getProdutoById } from "../http/controller/user/getProdutoById";
import { getTodosProdutos } from "../http/controller/user/getTodosProdutos";
import { listarAvaliacoesPorProduto } from "../http/controller/user/listarAvaliacoesPorProduto";
import { listarProdutosPorCategoria } from "../http/controller/user/listarProdutosPorCategoria";
import { getEmpreendedor } from "../http/controller/user/getEmpreendedor";
import { updateEmpreendedor } from "../http/controller/user/updateEmpreendedor";
import { updateProduto } from "../http/controller/user/updateProduto";

export async function routes(app: FastifyInstance) {
  app.post("/register", register);
  app.post("/authenticate", authenticate);
  app.get("/listUsuarios", listUsuarios);
  app.delete("/deleteUsuario/:id", deleteUsuario);
  app.put("/updateUsuario/:id", updateUsuario);
  app.post("/createProduto", createProduto);
  app.post("/createLoja", createLoja);
  app.post("/registerempreendedor", registerempreendedor)
  app.delete("/deleteempreendedor/:id", deleteempreendedor);
  app.post("/authenticateEmpreendedor", authenticateEmpreendedor);
  app.get("/getUsuario/:id", getUsuario);
  app.get("/getEmpreendedor/:id", listEmpreendedor);
  app.post("/buscarProdutoPorNome", buscarProdutoPorNome);
  app.post("/criarAvaliacaoProduto/:produtoId", criarAvaliacaoProduto);
  app.delete("/deleteProduto/:id", deleteProduto);
  app.get("/getLojaById/:id", getLojaById);
  app.get("/getLojasPorEmpreendedor/:empreendedorId", getLojasPorEmpreendedor);
  app.get("/getProdutoById/:id", getProdutoById);
  app.get("/getTodosProdutos", getTodosProdutos);
  app.get("/listarAvaliacoesPorProduto/:produtoId", listarAvaliacoesPorProduto);
  app.get("/listarProdutosPorCategoria", listarProdutosPorCategoria);
  app.get("/getEmpreendedor/:id", getEmpreendedor);
  app.put("/updateEmpreendedor/:id", updateEmpreendedor);
  app.put("/update/:id", updateProduto);
  
}

