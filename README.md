## 🧩 backMedia5Full - Backend

API REST construída com Express e Prisma (SQLite).

🚀 Funcionalidades:
- GET /profiles → lista todos os perfis
- GET /profiles/:id → retorna um perfil específico
- POST /profiles → cria novo perfil
- PUT /profiles/:id → atualiza perfil existente
- DELETE /profiles/:id → remove perfil

🧱 Stack:
- Node.js + Express
- Prisma ORM
- SQLite (banco local)

⚙️ Rodar o projeto:
npm install
npx prisma migrate dev --name init
node server.js

✔️ Server:
http://localhost:3000/
