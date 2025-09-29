# EDS - Employee Data Management System

A full-stack web application built with **React (Vite)** on the frontend and **Node.js + Express + Prisma** on the backend.  
This project follows a scalable architecture with clean separation between client and server code.

---

## 🚀 Features

- **Frontend**: Modern UI built with React, Vite, and modular components
- **Backend**: Node.js API with Express and Prisma ORM
- **Database**: PostgreSQL with Prisma schema management and migrations
- **Authentication**: Secure login system using JWT
- **Environment Config**: `.env` files for environment-specific settings
- **Scalable Structure**: Separate `frontend` and `Backend` directories

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- JavaScript

### Backend
- Node.js
- Express.js
- Prisma ORM
- PostgreSQL
- JWT Authentication

---
```
## 📂 Project Structure
EDS/
├── Backend/                 # Backend (API + Database)
│   ├── config/             # Database & Prisma setup
│   ├── middleware/         # Authentication middleware
│   ├── prisma/             # Prisma schema & migrations
│   ├── index.js            # Server entry point
│   ├── .env.example        # Example environment variables
│   └── package.json        # Backend dependencies
│
└── frontend/               # Frontend (React + Vite)
├── public/             # Static assets
├── src/                # React components & pages
├── index.html          # Root HTML file
└── package.json        # Frontend dependencies
```
---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- PostgreSQL database
- npm or yarn package manager

### 1️⃣ Clone the repository
```bash
git clone https://github.com/abhinav-salokhe/employee-data-managment.git
cd EDS
```
2️⃣ Backend Setup
```bash
cd Backend
npm install
Create a .env file inside Backend/ (you can copy from .env.example):
envDATABASE_URL="postgresql://username:password@localhost:5432/database_name"
JWT_SECRET="your_secret_key_here"
PORT=5000
Run database migrations:
npx prisma migrate dev
Start backend server:
npm run dev
Backend runs on: http://localhost:5000
```
3️⃣ Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
Frontend runs on: http://localhost:5173
```

🔒 Environment Variables
```bash
Backend .env
envDATABASE_URL="postgresql://username:password@localhost:5432/database_name"
JWT_SECRET="your_jwt_secret_key"
PORT=5000
```
🗄️ Database
This project uses PostgreSQL with Prisma ORM.
To view and manage your database:
cd Backend
npx prisma studio

🚢 Deployment
Backend Deployment

Set up PostgreSQL database on your hosting platform
Update DATABASE_URL in production environment
Run migrations: npx prisma migrate deploy
Start server: npm start

Frontend Deployment

Build the frontend: npm run build
Deploy the dist folder to your hosting service (Vercel, Netlify, etc.)



👨‍💻 Author
Abhinav Ganesh Salokhe

GitHub: @https://github.com/abhinav-salokhe
