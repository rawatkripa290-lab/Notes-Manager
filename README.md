# 📝 Notes Manager

A simple and lightweight Notes Manager web application built using **Node.js, Express.js, and EJS**. The application allows users to create notes, view their saved notes, and read individual notes through a clean and minimal interface.

This project demonstrates server-side rendering with EJS, file handling using Node.js, and routing with Express.

## 🚀 Features

- Create and save notes
- View all saved notes
- Read individual notes
- Store notes as `.txt` files
- Navigate between the home page and individual notes
- Server-side rendering using EJS
- Responsive UI with Tailwind CSS

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | Backend runtime |
| Express.js | Server and routing |
| EJS | Server-side templating |
| Tailwind CSS | Styling and UI |
| File System (`fs`) | Creating, reading, and storing notes |
| HTML | Web page structure |

## 📂 Project Structure

```text
notes-manager/
│
├── files/                  # Stores notes as text files
│
├── public/
│   ├── stylesheets/
│   │   └── style.css
│   └── javascripts/
│       └── script.js
│
├── views/
│   ├── index.ejs           # Home page and notes list
│   └── show.ejs            # Individual note view
│
├── app.js                  # Express application
├── package.json
├── package-lock.json
└── .gitignore
```

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/notes-manager.git
```

### 2. Navigate to the Project

```bash
cd notes-manager
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Server

```bash
node app.js
```

Or, if you have configured Nodemon:

```bash
npx nodemon app.js
```

### 5. Open in Browser

Visit:

```text
http://localhost:3000
```

## 📌 How It Works

1. Users enter a note title and description.
2. Express receives the submitted form data.
3. Node.js File System creates a text file inside the `files` directory.
4. The home page displays the available notes.
5. Users can click **Read More** to view the contents of an individual note.
6. EJS dynamically renders the filename and note content on the page.

## 🎯 Project Objective

The objective of this project is to understand the fundamentals of backend development using Node.js and Express.js, along with server-side rendering using EJS.

It demonstrates:

- Express routing
- GET and POST requests
- EJS template rendering
- Form handling
- Dynamic URL parameters
- File system operations
- Static file serving

## 👨‍💻 Author

**Kripa Rawat**

GitHub: [Your GitHub Profile](https://github.com/rawatkripa290-lab)

---

⭐ If you find this project useful, consider giving it a star!
