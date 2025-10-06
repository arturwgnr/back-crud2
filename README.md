## 🧩 backMedia5Full - Backend

REST API built with Express and Prisma (SQLite).

🚀 Endpoints:
- GET /profiles → list all profiles
- GET /profiles/:id → get a specific profile
- POST /profiles → create a new profile
- PUT /profiles/:id → update an existing profile
- DELETE /profiles/:id → delete a profile

🧱 Stack:
- Node.js + Express  
- Prisma ORM  
- SQLite (local database)

⚙️ Run the project:
npm install  
npx prisma migrate dev --name init  
node server.js  

✔️ Server:
http://localhost:3000/
