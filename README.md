# 🔐 Auth API — Secure Authentication Service

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)


Uma API de autenticação moderna e segura desenvolvida com Node.js e Express.  O foco principal deste projeto é a implementação de práticas rigorosas de segurança, utilizando Argon2 para hashing de senhas e JWT (JSON Web Token)  para persistência de sessão, tudo isso integrado ao banco de dados serverless Neon.

---

## 🏗️ Arquitetura do Sistema

A aplicação segue o padrão de arquitetura em camadas, utilizando o Sequelize ORM para abstração e gerenciamento do banco de dados PostgreSQL.

### Fluxo de Segurança
- **Hashing Progressivo:** Utiliza o Argon2, vencedor da Password Hashing Competition, oferecendo resistência superior contra ataques de força bruta e dicionário.
- **Token-Based Auth:** Implementação de JWT para stateless authentication, permitindo que o servidor valide a identidade do usuário sem armazenar sessões em memória.
- **Cloud Database:** ntegração nativa com Neon, aproveitando a escalabilidade do PostgreSQL na nuvem.

---

## 🛠️ Tecnologias Utilizadas

- **Runtime:** Node.js
- **Linguagem:** TypeScript
- **Framework:** Express.js
- **Banco de Dados:** PostgreSQL (Sequelize ORM)
- **Criptografia:** Argon2
---

## ⚙️ Como Executar

### Pré-requisitos
- Node.js instalado.
- Uma conta no Neon.tech (ou instância local do Postgres).

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   https://github.com/miguel2004silva/project-auth-services
   cd project-auth-services
   ```

2. **Instale as dependências:**
   ```
   npm install
   ```

3. **Configure as Variáveis de Ambiente:**
    - Crie um arquivo .env na raiz:
   ```bash
   PORT=3000
    DATABASE_URL=postgres://user:password@endpoint.neon.tech/dbname
    JWT_SECRET=sua_chave_secreta_aqui
   ```

Inicie o servidor: npm run dev
A API estará disponível em `http://localhost`.

---

## 🛣️ Principais Endpoints

| Serviço | Endpoint | Método | Descrição |
|---|---|---|---|
| **Auth** | `/auth/login` | POST | Autenticação e retorno de Token JWT |
| **Register** | `/auth/register` | POST | Criação de novo usuário com hash Argon2 |

---

## 👨‍💻 Autor

**Miguel Silva**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/miguel2004silva)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/miguel-de-sa-silva)

---
*Este projeto foi desenvolvido com fins educacionais para explorar.*
