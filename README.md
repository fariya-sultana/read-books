# 📚 ReadBooks – Library Management System

ReadBooks is a full-stack library management web application designed for a school environment. It allows users to browse books by category, borrow and return books, and manage the library collection through an intuitive interface. Built with React, Node.js, Express, MongoDB, and Firebase authentication, it ensures seamless functionality with a clean and responsive design.

---

## 🌍 Live Site

🔗 **Live Site URL**: [https://readbooks-app.netlify.app]()  
🔗 **Client GitHub Repo**: [github.com/yourusername/readbooks-client](https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-fariya-sultana)  
🔗 **Server GitHub Repo**: [github.com/yourusername/readbooks-server](https://github.com/Programming-Hero-Web-Course4/b11a11-server-side-fariya-sultana)

---

## 🎯 Project Purpose

To create a responsive, secure, and user-friendly Library Management System that allows:
- Easy book browsing and categorization
- Book borrowing and returning functionality
- Admin functionality to add/update books
- Real-time database sync and authentication

---

## 🚀 Key Features

- 🔐 **Protected Routes** using Firebase Authentication + JWT
- 📚 **Book CRUD Operations** (Add, Update, View, Borrow, Return)
- ⭐ **Rating System** using `react-rating-stars-component`
- 📊 **Card/Table Toggle View** on All Books page
- 🔎 **Filter Available Books** functionality
- ⛔ **Prevent Multiple Borrowing** and limit to 3 books
- 🧾 **Borrowed Books Tracking** with Return Date
- ✅ **Form Validation** with React Hook Form
- 📦 **Responsive UI** for mobile, tablet, and desktop
- 🎡 **Swiper Slider** on Home Page
- ✨ **Framer Motion Animations**
- 🔄 **Dynamic Document Titles** per route
- ⚠️ **404 Page** and Global Loading Spinners
- 📬 **Email + Google Auth** support
- ✅ **Secure Environment Config** using `.env` for Firebase & MongoDB
- 🔐 **JWT Authorization** with token verification

---

## 🧰 Technologies & NPM Packages Used

### Client Side:
- `react`
- `react-router`
- `firebase`
- `react-toastify`
- `react-rating-stars-component`
- `swiper`
- `react-hook-form`
- `framer-motion`
- `axios`
- `axios-auth-refresh` (for interceptors)
- `dotenv`

### Server Side:
- `express`
- `cors`
- `mongoose`
- `jsonwebtoken`
- `dotenv`
- `cookie-parser`

---

## 📁 Folder Structure (Client)

src/
├── components/
│ ├── Navbar.jsx
│ ├── Footer.jsx
│ └── BannerSlider.jsx
├── pages/
│ ├── Home.jsx
│ ├── AllBooks.jsx
│ ├── BookDetails.jsx
│ ├── AddBook.jsx
│ ├── UpdateBook.jsx
│ ├── BorrowedBooks.jsx
│ ├── Login.jsx
│ ├── Register.jsx
│ └── NotFound.jsx
├── routes/
│ ├── PrivateRoute.jsx
├── context/
│ ├── AuthProvider.jsx
├── utils/
│ ├── axiosSecure.js
│ ├── setTitle.js
├── App.jsx
└── main.jsx


---

## 🧪 Backend Endpoints (Node.js/Express)

- `POST /api/books` → Add Book
- `PUT /api/books/:id` → Update Book
- `GET /api/books` → All Books (with filters)
- `GET /api/books/:id` → Book Details
- `PATCH /api/books/borrow/:id` → Borrow Book (`$inc: { quantity: -1 }`)
- `PATCH /api/books/return/:id` → Return Book (`$inc: { quantity: +1 }`)
- `POST /api/borrowed` → Track borrowed books
- `GET /api/borrowed/:email` → Get borrowed books by user
- `DELETE /api/borrowed/:id` → Return a book (remove record)
- `POST /api/jwt` → Create JWT Token

---

👨‍💻 Author
Name: [Fariya Sultana]
Email: fariyasultana802@gmail.com

---
