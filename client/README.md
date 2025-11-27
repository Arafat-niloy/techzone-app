# TechZone - Next.js E-commerce Application

## Project Description
TechZone is a modern, responsive e-commerce web application designed for selling tech gadgets. Built with **Next.js (App Router)** for the frontend and a simple **Express.js** server for the backend. It features a polished UI using **Tailwind CSS** and **DaisyUI**, secure authentication with **NextAuth.js**, and a protected dashboard for product management.

## 🚀 Live Demo
- **Live Site:** [[https://techzone-app.vercel.app](https://techzone-app.vercel.app/)]
- **Backend API:** [[https://techzone-server-xsy8.onrender.com](https://techzone-server-xsy8.onrender.com)]

## 🛠 Technologies Used
- **Frontend:** Next.js 14/15 (App Router), React, Tailwind CSS, DaisyUI
- **Backend:** Express.js, Node.js, CORS
- **Authentication:** NextAuth.js
- **Icons:** React Icons
- **Notifications:** React Hot Toast

## ✨ Features
- **Responsive Design:** Fully adaptive layout for Mobile, Tablet, and Desktop.
- **Authentication:** Credentials login (Admin) & Google Auth integration.
- **Product Management (Protected):**
  - Add new products.
  - View and Delete existing products.
- **Public Pages:** Home (Landing), Shop, Product Details, About, Contact.
- **Optimized Images:** Used Next.js `<Image />` component for better performance.

---
## 🔑 Demo Credentials
You can use the following credentials to log in and access the dashboard:

Username: admin

Password: admin

## 📝 Submission Details
GitHub Repository: [[https://github.com/Arafat-niloy/techzone-app](https://github.com/Arafat-niloy/techzone-app)]

Developed by: [Arafat-Niloy]


## ⚙️ Setup & Installation Instructions

Follow these steps to run the project locally on your machine.

### 1. Clone the Repository
```bash
git clone <https://github.com/Arafat-niloy/techzone-app>
cd techzone-app
```

### 2. Setup Backend (Server)Open a terminal and navigate to the server folder:Bashcd server
```bash
npm install
node index.js
```
The server will run on http://localhost:50003. 
### 3. Setup Frontend (Client)Open a new terminal (keep the server terminal running) and navigate to the client folder:
```Bash
cd client
npm install
```
### 4. Configure Environment VariablesCreate a file named .env.local inside the client folder and add the following variables:
```bash
# Base URL for NextAuth
NEXTAUTH_URL=http://localhost:3000

# Generate a random secret key (You can use any string)
NEXTAUTH_SECRET=my_super_secret_key_123

# API URL (Use localhost for local dev, or Render URL for production)
NEXT_PUBLIC_API_URL=http://localhost:5000

# Optional: Google Auth (If you want to enable Google Login)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```
### 5. Run the Application
```Bash
npm run dev
```
The frontend will start on http://localhost:3000
## 📂 Route Summary

| Route | Type | Description |
|-------|------|-------------|
| `/` | Public | Landing page with Hero, Features, Trending items. |
| `/products` | Public | Product listing page with Search functionality. |
| `/products/[id]` | Public | Dynamic product details page. |
| `/about` | Public | Company mission and team info. |
| `/contact` | Public | Contact form and location details. |
| `/auth/signin` | Public | Login page for authentication. |
| `/dashboard/add-product` | Protected | Form to add new products (Requires Login). |
| `/dashboard/manage-products` | Protected | Dashboard table to manage inventory (Requires Login). |
