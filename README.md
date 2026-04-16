# 🚀 MERN User Management System

A full-stack **User Management System** built using the MERN stack (MongoDB, Express.js, Vue.js, Node.js) with secure authentication, role-based access control (RBAC), and a modern SaaS-inspired UI.

This project demonstrates real-world full-stack development skills, including backend API design, secure authentication, frontend state management, and deployment to production environments.

---

## 🌟 Project Overview

The MERN User Management System is designed to manage users with different roles and permissions in a secure and scalable way. It provides a complete solution for:

* User authentication (JWT-based)
* Role-based authorization (Admin, Manager, User)
* User lifecycle management (Create, Read, Update, Delete)
* Secure API handling
* Modern frontend UI with responsive design
* Deployment-ready architecture

This project simulates a real-world SaaS admin panel similar to platforms like Amazon Admin, Stripe Dashboard, or internal enterprise tools.

---

## ✨ Features

### 🔐 Authentication & Security

* JWT-based authentication system
* Secure password hashing using bcrypt
* Protected API routes
* Token-based session handling
* Prevention of unauthorized access

---

### 🛡️ Role-Based Access Control (RBAC)

The system supports three roles:

#### 👑 Admin

* Full control over all users
* Create new users
* Assign roles (Admin, Manager, User)
* Update any user
* Deactivate users

#### 🧑‍💼 Manager

* View users
* Update non-admin users

#### 👤 User

* View own profile
* Update personal details
* Cannot access other users

---

### 👥 User Management

* Create users with roles and status
* Update user information
* Soft delete (deactivate users)
* Search users by name
* Pagination support
* View user details

---

### 🎨 Frontend (Modern UI)

* Built with Vue 3 + Vite
* Styled using Tailwind CSS
* Responsive and clean UI
* Dashboard layout with sidebar and navbar
* Role-based UI rendering
* Toast notifications for user feedback
* Loading states and smooth transitions

---

### 🔍 Advanced Features

* Search functionality
* Pagination system
* Status indicators (Active/Inactive)
* Audit fields (createdAt, updatedAt)
* API error handling
* Clean UI interactions

---

## 🛠️ Tech Stack

### 💻 Frontend

* Vue.js 3
* Vite
* Tailwind CSS
* Axios
* Vue Router
* Vue Toastification

---

### ⚙️ Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT (jsonwebtoken)
* bcryptjs
* cookie-parser
* dotenv

---

### ☁️ Deployment

* Frontend: Vercel
* Backend: Render
* Database: MongoDB Atlas

---

## 📁 Project Structure

```
mern-user-management-system/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── router/
│   │   ├── store/
│   │   ├── views/
│   │   ├── App.vue
│   │   └── main.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 🔧 Backend Setup

```bash
cd backend
npm install
npm run dev
```

---

### 🌐 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file inside the `backend` folder:

```
PORT=5000
MONGO_URI=your_mongodb_co
JWT_SECRET=your_secret_key
JWT_EXPIRE=1d
```

---

## 🌍 Live Demo

🔗 Frontend:
https://mern-user-management-system-rust.vercel.app

🔗 Backend:
https://mern-user-management-system-7ppm.onrender.com

---


## 🔐 API Endpoints

### Authentication

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/login    | User login    |
| POST   | /api/auth/register | Register user |

---

### Users

| Method | Endpoint       | Description         |
| ------ | -------------- | ------------------- |
| GET    | /api/users     | Get all users       |
| POST   | /api/users     | Create user (Admin) |
| PUT    | /api/users/:id | Update user         |
| DELETE | /api/users/:id | Deactivate user     |

---

## 🔒 Security Features

* Password hashing with bcrypt
* JWT authentication
* Protected routes middleware
* Role-based authorization
* Input validation
* Environment variable protection

---

## 🚀 Deployment Details

### Backend (Render)

* Configured with environment variables
* Root directory set to `/backend`
* Connected to MongoDB Atlas

### Frontend (Vercel)

* Built using Vite
* Connected to deployed backend API
* Optimized for production

---

## 📈 Future Enhancements

* Modal-based user editing (instead of prompt)
* Dark mode UI
* Charts and analytics dashboard
* Refresh token authentication
* Email verification system
* Advanced role permissions

---

## 🧠 Learnings & Highlights

This project demonstrates:

* Full-stack development workflow
* REST API design and security
* Authentication and authorization patterns
* State management in frontend applications
* Deployment and DevOps basics
* Real-world project structuring

---

## 👨‍💻 Author

**Sarla Bharath Chandra**

* GitHub: https://github.com/sarlabharath552
* LinkedIn: https://www.linkedin.com/in/sarla-bharath-chandra-4903492b6/

---

## 📜 License

This project is open-source and available under the MIT License.

---

## 🙌 Acknowledgements

* MongoDB Atlas
* Render
* Vercel
* Open-source community

---

# ⭐ Final Note

This project reflects practical experience in building and deploying a full-stack web application with modern technologies. It is designed to demonstrate both technical skills and the ability to deliver production-ready solutions.

If you found this project useful, feel free to ⭐ the repository.
