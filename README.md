# ITA-CONNECT
O projeto tem por finalidade promover uma maior visibilidade para pequenos empreendedores e pessoas que ofertam serviços no município de Itapajé. Para isso, a equipe pensou na construção de uma aplicação web que fosse destinada para agrupar essas pessoas e elas cadastrarem seus produtos e serviços.
## Membros da equipe e Orientador
- Carlos Anderson - 564853 - ADS 
- Guilherme - 569662 - ADS 
- Pedro Willy - 564678 - ADS 
- Samilly - 571167 - ADS
- Prof. Orientador: Anderson Uchôa
## Papéis ou tipos de usuário da aplicação
- Empreendedores: são as pessoas que possuem um meio de venda e trabalho remunerado, ou seja, proprietários de pequenas lojas, sejam físicas ou não, e que buscam aumentar as suas vendas através de uma plataforma que se responsabilize por divulgar os seus produtos.
- Pessoas que ofertam serviços: são aqueles que não possuem um empreendimento, porém trabalham com "bicos" como cuidador de bebês ou idosos, reforço escolar, encanador, entre outros. Assim sendo, também procuram lucrar mais através dos seus serviços para a comunidade e região.
- Usuários comuns do sistema: são as pessoas que podem buscar os produtos e/ou serviços, para que as necessidades sejam atendidas ou até mesmo ficar informado sobre as novidades do seu município. Para isso, terá a opção de criar ou não uma conta, para avaliar os produtos/serviços e ter acesso a funcionalidades do site.
## Entidades ou tabelas do sistema
Por se tratar de um sistema de pequeno porte, as entidades do sistema não possuem muitas associações, sendo apenas 5 a quantidade de entidades registradas no banco de dados. São elas:
- Usuário
- Empreendedor
- Loja
- Produto
- Avaliação
## Principais funcionalidades da aplicação
As principais funcionalidades escolhidas do sistema buscam principalmente trazer acessibiidade para os tipos de usuários presentes na aplicação, das quais estão presentes:
- Criar conta do usuário: para as pessoas que desejam ter mais vantagens no sistema, será possível criar uma conta e salvar seus produto favoritos, fazer avaliações e visualizar informações sobre sua conta.
- Criar conta do empreendedor: para aqueles que proprietários, é possível criar uma conta no sistema para gerenciar a sua loja virtual e colocar informações importantes como: cadastrar um produto, adicionar sua descrição, informações de contato e etc.
  
**Para aqueles que estão logados no sistema:**
- Realizar login no sistema: caso a pessoa tenha feito um cadastro, será possível fazer o acesso a sua conta com as credenciais e assim ver sua informações.
- Cadastrar um produto:  é restrita para empreendedores. Para que as pessoas vejam seus produtos, é necessário criar um novo produto dentro da sua loja e preencher as informações essenciais, depois da confirmação este produto estará disponível para visualização normalmente.
- Avaliar produtos e serviços: é restrito para usuários cadastrados e logados no site. Com sua conta, serão feitas avaliações acerca dos produtos/serviços que ele desejar opinar. Assim, o feedback é útil para pessoas que não conhecem a loja ou serviço.
- Campo de busca: restrito para usuários. Para facilitar e agilizar as buscas, será implementado uma barra de pesquisa, onde por meio dela serão apresentados os produtos que o usuário digitar.
- Categorias: para cada produto adicionado no sistema exisitirá uma categoria correspondente a ele. Exemplos: alimentos, cosméticos, brinquedos e etc.
## Tecnologias e frameworks utilizados
**Frontend:**

React, Vite, Tailwind CSS, TypeScript, React Router DOM

**Backend:**

Prisma ORM, PostgreSQL, Fastify, Node.js, Typescript, Zod, Dotenv

## Operações implementadas para cada entidade da aplicação

|   Entidade   | Criação | Leitura | Atualização | Remoção |
|--------------|---------|---------|-------------|---------|
|   Usuario    |    X    |    X    |             |         |
| Empreendedor |    X    |    X    |             |         |
|     Loja     |    X    |    X    |             |         |
|    Produto   |    X    |    X    |             |         |
|   Avaliacao  |         |         |             |         |

## Rotas da API REST utilizadas

| Método HTTP |           URL            |
|-------------|--------------------------|
|     POST    |   /usuario               |
|     POST    |   /empreendedor          |
|     POST    |   /login                 |
|     POST    |   /produto               |
|     GET     |   /produto               |
|     GET     |   /produto/:id           |
|     POST    |   /lojas                 |
|     GET     |   /loja/empreendedor/:id |
|     GET     |   /produto/loja/:lojaId  |
