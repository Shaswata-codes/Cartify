# 🛒 NovaBasket

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Django-5-092E20?style=for-the-badge&logo=django&logoColor=white" />
  <img src="https://img.shields.io/badge/Django_REST_Framework-API-red?style=for-the-badge" />
  <img src="https://img.shields.io/badge/PostgreSQL-Database-336791?style=for-the-badge&logo=postgresql&logoColor=white" />
  <img src="https://img.shields.io/badge/JWT-Authentication-black?style=for-the-badge&logo=jsonwebtokens" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" />
</p>

<p align="center">
A modern full-stack e-commerce application built with <b>React</b> and <b>Django REST Framework</b>, featuring JWT authentication, persistent shopping carts, PostgreSQL, and automated welcome emails.
</p>

---

# 📖 Overview

**NovaBasket** is a modern full-stack e-commerce web application built using a **decoupled architecture**, where the frontend is a **React Single Page Application (SPA)** and the backend is powered by **Django REST Framework (DRF)**.

The application provides secure JWT authentication, a persistent shopping cart for both authenticated and guest users, a complete checkout workflow, and automated welcome emails for newly registered users.

---

# ✨ Features

## 👤 Authentication

* JWT-based user registration and login
* Secure JWT access & refresh tokens
* Protected API endpoints
* Automatic welcome email after successful signup

---

## 📦 Product Catalog

* 25 unique products
* 5 product categories:

  * 📚 Books
  * 📱 Phones
  * ⚽ Sports
  * 🍔 Food
  * 🛋 Furniture
* Product detail pages
* Prices displayed in **Indian Rupees (₹)**
* Local product image storage

---

## 🛒 Persistent Shopping Cart

### Authenticated Users

* Database-synchronized cart
* Cart persists across login sessions

### Guest Users

* Client-side generated `X-Cart-ID`
* Add items without creating an account
* Persistent cart until checkout

---

## 💳 Checkout & Orders

* Shipping information form
* Cash on Delivery (COD)
* Online Payment option
* Order creation
* Dedicated Order Success page
* Displays a unique Order ID after purchase

---

## 📧 Welcome Email

Upon successful registration:

* Branded welcome email
* Gmail SMTP integration
* Powered by Django's native mail system (`django.core.mail`)

---

# 🏗 Project Architecture

```text
                React + Vite
                     │
                     │ REST API
                     ▼
         Django REST Framework
                     │
        ┌────────────┼────────────┐
        │            │            │
        ▼            ▼            ▼
 PostgreSQL      Local Media    Gmail SMTP
   Database       (/media/)      Welcome Mail
```

---

# 🛠 Tech Stack

## Frontend

* React.js
* Vite
* Tailwind CSS v4
* React Router DOM

## Backend

* Python
* Django
* Django REST Framework
* SimpleJWT

## Database

* PostgreSQL

## Authentication

* JSON Web Tokens (JWT)

## Email

* Gmail SMTP
* Django Native Mail (`django.core.mail`)

---

# 📁 Project Structure

```text
NovaBasket/

├── backend/
│   ├── api/
│   ├── media/
│   │   └── products/
│   ├── manage.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# 🚀 API Documentation

## Authentication & Users

| Method | Endpoint              | Description                                  |
| ------ | --------------------- | -------------------------------------------- |
| POST   | `/api/register/`      | Register a new user and send a welcome email |
| GET    | `/api/users/`         | Retrieve all registered users                |
| POST   | `/api/token/`         | Obtain JWT access & refresh tokens           |
| POST   | `/api/token/refresh/` | Refresh JWT access token                     |

---

## Products

| Method | Endpoint                  |
| ------ | ------------------------- |
| GET    | `/api/products/`          |
| GET    | `/api/products/<int:id>/` |
| GET    | `/api/categories/`        |

---

## Shopping Cart

| Method | Endpoint            |
| ------ | ------------------- |
| GET    | `/api/cart/`        |
| POST   | `/api/cart/add/`    |
| POST   | `/api/cart/remove/` |
| POST   | `/api/cart/update/` |
| POST   | `/api/cart/clear/`  |

---

## Orders

| Method | Endpoint              |
| ------ | --------------------- |
| POST   | `/api/orders/create/` |

---

# 🚀 Installation

## 1. Clone the Repository

```bash
git clone https://github.com/yourusername/NovaBasket.git

cd NovaBasket
```

---

## 2. Backend Setup

Create a virtual environment:

```bash
python -m venv venv
```

Activate it.

**Windows**

```bash
venv\Scripts\activate
```

**Linux/macOS**

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Apply migrations:

```bash
python manage.py migrate
```

Run the backend server:

```bash
python manage.py runserver
```

Backend runs at:

```text
http://127.0.0.1:8000
```

---

## 3. Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

---

# 🔐 JWT Authentication Example

### Login Request

```http
POST /api/token/
```

Request Body

```json
{
  "username": "john",
  "password": "password123"
}
```

Response

```json
{
  "access": "eyJhbGc...",
  "refresh": "eyJhbGc..."
}
```

Authenticated requests require:

```http
Authorization: Bearer <access_token>
```

---

# 🛒 Guest Cart Example

Guest users receive a generated cart identifier.

Example request header:

```http
X-Cart-ID: 82fa9ef4-68db-48dc-9e0f-52ef5f2baf9f
```

This allows shopping without authentication while preserving cart contents.

---

# 📧 Welcome Email Flow

```text
Register
     │
     ▼
Create User
     │
     ▼
Send Welcome Email
     │
     ▼
User Inbox
```

---

# 🖼 Local Media Storage

Product images are stored in:

```text
media/products/
```

Images are served directly by the Django backend during development.

---

# 🌟 Highlights

* Full-stack React + Django architecture
* JWT Authentication
* Django REST Framework API
* PostgreSQL Database
* Persistent Shopping Cart
* Guest Cart Support
* Automated Welcome Emails
* Local Media Storage
* Responsive User Interface
* Checkout & Order Management
* Clean RESTful API Design

---

# 🔮 Future Improvements

* Razorpay Integration
* Stripe Integration
* Wishlist
* Product Reviews & Ratings
* Product Search & Filtering
* Coupon & Discount System
* Admin Dashboard
* Inventory Management
* Order Tracking
* Email Verification
* Password Reset
* Docker Support

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature/new-feature
```

3. Commit your changes.

```bash
git commit -m "Add new feature"
```

4. Push to your branch.

```bash
git push origin feature/new-feature
```

5. Open a Pull Request.

---

# 📄 License

This project is licensed under the **MIT License**.

---

# 👨‍💻 Author

**Shaswata Sarkar**

If you found this project helpful, consider giving it a ⭐ on GitHub!
