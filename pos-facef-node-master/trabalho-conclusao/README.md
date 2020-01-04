# Conclusão de módulo

- [Requisitos](#requisitos)
- [Prazo de entrega](#prazo-de-entrega)
- [Problema](#problema)
- [Contrato](#contrato)
- [Dicas](#Dicas)

## Requisitos

- Grupos de no máximo 5 pessoas
- README explicando como rodar o projeto
- Validações de negócio
- Documentação mínima de como consumir a API. Uma collection do postman resolve fácil isso pra nós =)
- Testes automatizados (opcional)

## Prazo de entrega

O trabalho deverá ser entregue até o dia 02/01, via e-mail (matheus.oliveira@luizalabs.com). No corpo do e-mail a lista de alunos do grupo e link do repositório.

## Problema

Lídia Maria, uma nova cliente em potencial de Raimundo (nossa persona desenvolvedor), o procura para o desenvolvimento de uma nova plataforma de vendas. Lídia Maria necessita de uma plataforma menos sofistacada, e que atenda as necessidades para com os seus clientes, com um simples cadastro de clientes/usuários, produtos com categoria, e fechamento de pedido.
Raimundo, logo mapeou a necessidade de Lídia Maria e logo apresentou sobre camada de serviços e integrações via API, e as vantagens de escala para seu negócio que essa abordagem oferece. Raimundo enviou o seguite contrato para Lídia Maria.

## Contrato

### Cadastro de clientes / usuários

**rotas**

| Rota | Pública |
| - | - |
| Lista   | Não |
| Detalhe | Não |
| Novo    | Sim |
| Editar  | Não |
| Excluir | Não |
| Login   | Sim |

**Campos**

| Campo | Obrigatório | Validação |
| - | - | - |
| Nome        | Sim | min 3 caracteres |
| CPF ou CNPJ | Sim | cpf ou cnpj, unique |
| E-mail      | Sim | email, unique |
| Senha       | Sim | min 6 caracteres |

### Cadastro de categorias

**Campos**

| Campo | Obrigatório | Validação |
| - | - | - |
| Descrição | Sim | min 3 caracteres |

**Rotas**

| Rota | Pública | Filtros |
| - | - | - |
| Lista   | Não | |
| Detalhe | Não | |
| Novo    | Não | |
| Editar  | Não | |
| Excluir | Não | |

### Cadastro de produtos

**Rotas**

| Rota | Pública | Filtros |
| - | - | - |
| Lista   | Sim | Descrição do produto, ID categoria |
| Detalhe | Sim | |
| Novo    | Não | |
| Editar  | Não | |
| Excluir | Não | |

**Campos**

| Campo | Obrigatório | Validação |
| - | - | - |
| Descrição  | Sim | min 3 caracteres |
| Quantidade | Sim | numérico |
| Valor      | Sim | numérico |
| Categoria  | Sim | |

### Pedidos

**Rotas**

| Rota | Pública | Filtros |
| - | - | - |
| Lista   | Não | ID usuário |
| Detalhe | Não | |
| Novo    | Não | |
| Editar  | Não | |
| Excluir | Não | |

**Campos**

| Campo | Obrigatório | Validação |
| - | - | - |
| Cliente  | Sim | |
| Valor    | Calculado pela API no momento da criação do pedido | Totalizador de produtos |
| Produtos | Sim | Vaidar quantidade de produtos disponíveis |

*Obs.:* Cadastro de produtos é um relacionamento n-n com pedido.

## Dicas

**hapi-boom** possibilita mensagens customizadas. Basta passar a mensagem como argumento e.g. `Boom.badRequest('Product quantity unavailable.')`.

**Bibliotecas**

| Lib | Descrição | Link |
| - | - | - |
| @brazilian-utils/* | Lib com utilitários de validações brasileiras | https://github.com/brazilian-utils/brazilian-utils |

**Camada de negócio**

Caso queira separar as responsabilidades de validações de negócio, uma camada `*.business.js` poderá ser criada nos módulos da api. Essa camada concentra as validações e regras de negócio do módulo, por exemplo, validação de quantidade de produto, totalizadores do produtos, etc. Essa camada faz a interface entre a DAO e controller, ou seja, a controller passa a se comunicar com a business - logo a business com a dao, e todas as validações, preparação de payload, ficam por conta da business.

```
src/api
└── posts
    ├── posts.business.js
    ├── posts.controllers.js
    ├── posts.dao.js
    ├── posts.models.js
    ├── posts.routes.js
    └── posts.schemas.js
```
