# Backend Static Pages Server

A simple backend project that serves multiple static HTML pages with a shared CSS stylesheet.  
The server delivers **Index**, **About**, and **Contact** pages, styled using a single `style.css` file.

---

## 📁 Project Structure

```
Task 2/
│
├── public/
│   ├── index.html
│   ├── about.html
│   ├── contact.html
│   └── style.css
│
├── server.js
├── package.json
└── README.md
```

---

## 🚀 Features

- Serves multiple static HTML pages
- Centralized CSS styling using `style.css`
- Clean and simple routing
- Lightweight backend setup
- Easy to extend with more pages or APIs

---

## 🛠️ Technologies Used

- Node.js
- HTML5
- CSS3

---

## ⚙️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd project-root
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the server**

   ```bash
   node server.js
   ```

4. **Open in your browser**
   ```
   http://localhost:3000
   ```

---

## 🌐 Available Routes

| Route      | Description       |
| ---------- | ----------------- |
| `/`        | Home (Index page) |
| `/about`   | About page        |
| `/contact` | Contact page      |

---

## 🎨 Styling

All pages share a common stylesheet located at:

```
/public/style.css
```

This ensures consistent layout, typography, and color usage across the entire site.

---

## 📌 Notes

- This project focuses on backend routing and static file serving.
- Ideal for learning Express fundamentals or as a starter template.
- Can be extended with templates, APIs, or database integration.

---

## 📄 License

This project is open-source and available for educational and personal use.

Author - Abbey
