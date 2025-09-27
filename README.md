# EDS

A full-stack web application built with **React (Vite)** on the frontend and **Node.js + Prisma** on the backend.
This project is designed to provide a scalable architecture with clean separation between client and server code.

---

## 🚀 Features

* **Frontend**: Modern UI built with React, Vite, and modular components.
* **Backend**: Node.js API powered by Express and Prisma ORM.
* **Database**: Prisma for schema management and migrations.
* **Environment Config**: `.env` for environment-specific settings.
* **Scalable Structure**: Separate `frontend` and `Backend` directories for clarity.

---

## 🛠️ Tech Stack

**Frontend**

* React
* Vite
* JavaScript / TypeScript (if enabled)

**Backend**

* Node.js
* Express.js
* Prisma ORM
* PostgreSQL / MySQL / SQLite (depending on `.env` configuration)

---

## 📂 Project Structure

```
EDS/
├── Backend/           # Backend (API + Database)
│   ├── config/        # Configuration files
│   ├── prisma/        # Prisma schema and migrations
│   ├── index.js       # Server entry point
│   └── package.json   # Backend dependencies
│
└── frontend/          # Frontend (React + Vite)
    ├── public/        # Static assets
    ├── src/           # React components & pages
    ├── index.html     # Root HTML
    └── package.json   # Frontend dependencies
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/EDS.git
cd EDS
```

### 2️⃣ Backend Setup

```bash
cd Backend
npm install
```

* Create a `.env` file in the `Backend` directory:

```env
DATABASE_URL="your_database_url"
PORT=5000
```

* Run database migrations:

```bash
npx prisma migrate dev
```

* Start backend server:

```bash
npm start
```

### 3️⃣ Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

Frontend will run by default on [http://localhost:5173](http://localhost:5173).
Backend will run on [http://localhost:5000](http://localhost:5000).

---



## 👨‍💻 Author

Developed by **Abhinav Ganesh Salokhe** ✨
