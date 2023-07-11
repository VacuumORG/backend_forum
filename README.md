# Documentação
## Arquitetura
> O projeto será estruturado seguindo uma arquitetura baseada em Domain-Driven Design (DDD), com as camadas de infraestrutura, domínio e aplicação. Essa abordagem visa separar as responsabilidades e tornar a aplicação mais modular e fácil de manter.

- **Camada de infraestrutura**: Responsável por interagir com recursos externos, como o banco de dados, autenticação, envio de e-mails, etc. Nessa camada, também serão implementadas as migrations para gerenciar o esquema do banco de dados.

- **Camada de domínio**: Contém as entidades, agregados, objetos de valor e regras de negócio da aplicação. Aqui é onde a lógica central do sistema é implementada.

- **Camada de aplicação**: Faz a ponte entre a camada de infraestrutura e a de domínio. Ela realiza a conversão de dados, chamadas a serviços externos, etc. Os casos de uso da aplicação são implementados como serviços nessa camada, seguindo o princípio da responsabilidade única (SOLID).

## Configurações antes de iniciar o projeto.
- Iniciar um banco de dados PostgreSQL (Com docker ou outra ferramente que deseja)
- Criar uma conta no [Cloudinary](https://cloudinary.com) (para utilizar banco de imagens em cloud)

Para iniciar um container docker com Postgres utilize os seguintes comandos:
```zsh
$ docker pull postgres
```
```zsh
$ docker run --name meu-postgres -e POSTGRES_PASSWORD=minha-senha -p 5432:5432 -d postgres
```
- **"meu-postgres"**: Nome da imagem
- **"minha-senha"**: A password do banco de dados

## Como começar no projeto

- Clone o projeto para a sua máquina local:
```bash
$ git clone git@github.com:VacuumORG/backend_forum.git
```

- Instale as dependências do projeto.
> Dentro da pasta do projeto, utilize o seguinte comando:
```bash
$ yarn
```

- Configure o banco de dados no projeto.
> Com o arquivo .env.example, você irá trocar as informações contidas nelas de acordo com as suas credênciais, e em seguida, duplique o arquivo mudando o nome para
**".env"**.

```ts
DATABASE_URL="postgresql://postgres:password@localhost:5432/postgres?schema=public" // O usuário "postgres" é o padrão do banco de dados, assim como o banco de dados principal.
CLOUDINARY_API_NAME="cloudinaryname"
CLOUDINARY_API_KEY="apicloudinary"
CLOUDINARY_API_SECRET="cloudinarysecret"

```

- Iniciar a migration do PrismaORM
> Isso irá criar as tabelas no seu banco de dados (A imagem no docker deverá estar iniciada).
```bash
$ npx prisma migrate dev --name init
```

- Inicie o Projeto.
> Com as configurações feitas, inicie o projeto com o seguinte comando:
```bash
$ yarn start:dev
```

