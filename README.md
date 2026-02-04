# React Runner Circle

## Descrição do Projeto

O **React Runner Circle** é uma aplicação web desenvolvida em React que permite aos usuários interagir com uma comunidade de corredores. Os usuários podem criar perfis, compartilhar suas experiências de corrida, e visualizar postagens de outros corredores. A aplicação utiliza GraphQL para gerenciar as interações com o banco de dados, proporcionando uma experiência fluida e eficiente.

## Funcionalidades

- **Cadastro de Usuário**: Os usuários podem se registrar na plataforma, criando um perfil com informações pessoais.
- **Login**: Usuários registrados podem fazer login para acessar suas contas.
- **Feed de Postagens**: Os usuários podem visualizar um feed com postagens de outros corredores, incluindo fotos e descrições.
- **Criação de Postagens**: Os usuários podem criar novas postagens para compartilhar suas experiências.
- **Edição de Perfil**: Os usuários podem editar suas informações pessoais a qualquer momento.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **GraphQL**: Linguagem de consulta para APIs, utilizada para gerenciar as interações com o banco de dados.
- **Vite**: Ferramenta de construção para desenvolvimento rápido de aplicações web.
- **Tailwind CSS**: Framework CSS para estilização da aplicação.

## Estrutura do Projeto

```
├── database/
│   ├── graphql/
│   │   ├── mutations/
│   │   └── query/
│   ├── json-graphql-server.js
│   └── json-server.json
├── public/
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── assets/
│   ├── components/
│   │   ├── forms/
│   │   ├── layout/
│   │   └── ui/
│   └── pages/
├── eslint.config.js
├── index.html
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd react-runner-circle
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor GraphQL (em um terminal separado):

   ```bash
   npm run server:json-graphql
   ```

   O servidor GraphQL estará disponível em [http://localhost:3001](http://localhost:3001)

4. Em outro terminal, inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
5. Acesse a aplicação em seu navegador: [http://localhost:5173](http://localhost:5173)
