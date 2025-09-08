# 🛒 E-Shop — Progressive Web Application (PWA)

This is my **Internship Task 4** project — a **Progressive Web Application (PWA)** e-commerce demo built using **React.js**.  
It works **offline**, has a **shopping cart with persistence**, and supports **browser notifications**.  

---

## ✨ Features
- 📱 **Responsive Design** (mobile + desktop friendly)  
- 🛍️ **Product Catalog** (from `products.json`)  
- 🛒 **Shopping Cart** (saved in localStorage, persists after reload)  
- 🔔 **Notifications** (adds product alert after permission granted)  
- ⚡ **Offline Support** (via Service Workers & Cache API)  

---

## 📂 Project Structure
ecommerce-pwa/
│
├── public/
│ ├── index.html
│ ├── products.json
│ └── images/ (tee.jpg, shoes.jpg, headphones.jpg)
│
├── src/
│ ├── App.js
│ ├── index.css
│ ├── context/CartContext.js
│ └── components/
│ ├── ProductList.js
│ ├── ProductCard.js
│ └── Cart.js
│
└── README.md


---

## 🚀 Run Locally
1. Clone this repository:
   ```bash
   git clone https://github.com/chinmayy10/ecommerce-pwa.git
   cd ecommerce-pwa
Install dependencies:

npm install


Start development server:

npm start


App will open at http://localhost:3000
.

📦 Build for Production
npm run build
npx serve -s build


Then open the served URL (e.g. http://localhost:5000
).

📱 Test Offline

Open the production build in browser.

Open DevTools → Application → Service Workers.

Confirm SW is active, then set Network to Offline.

Reload — app should still load from cache.


Author

Chinmay Gowda

chinmaygowda65@gmail.com
