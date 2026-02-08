# 🚀 Node.js + TypeScript + Express Starter
![License: PolyForm Noncommercial](https://img.shields.io/badge/license-PolyForm%20Noncommercial-blue)

Modern backend starter using **Express 5**, **TypeScript**, **MongoDB (Mongoose)** and **ES Modules**.

---

## ✨ Features

- TypeScript (strict mode)
- Express 5
- MongoDB with Mongoose
- EJS templating
- Hot reload with Nodemon
- ES Modules support
- Layered architecture

---

## 📦 Tech Stack

- Node.js
- TypeScript
- Express
- MongoDB + Mongoose
- dotenv
- EJS

---

## 📁 Project Structure

```bash
.
├── public          # Static files + EJS views
├── src
│   ├── config      # App configuration
│   ├── controllers # HTTP logic
│   ├── middleware  # Express middleware
│   ├── models      # Mongoose schemas
│   ├── routers     # Route definitions
│   ├── services    # Business logic
│   ├── app.ts      # Express app setup
│   └── server.ts   # Server bootstrap
├── tests
└── tsconfig.json
```

---

## ⚙️ Installation

```bash
npm install
```

---

## 🧪 Development

```bash
npm run dev
```

---

## 🏗️ Production

```bash
npm run build
npm start
```

---

## 🌍 Environment Variables

Create `.env`:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/mydb
```

---

## ⚠️ Important Notes

### ES Modules
Always include file extensions:

```ts
import router from "./routers/index.router.js";
```

---

### Do Not Edit `dist`
Compiled output only.

---

### Express JSON Parsing
Use:

```ts
app.use(express.json());
```

---

### Mongoose Hot Reload Fix

```ts
export default mongoose.models.User || mongoose.model("User", schema);
```

---

## ❤️ Contribution

PRs are welcome.

---

## 📜 License
This project is licensed under the PolyForm Noncommercial License 1.0.0.

Commercial use is not permitted.
