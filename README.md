# Book Management System

## Project Overview

The **Book Management System** is a full-stack web application designed to manage book records efficiently. It allows users to perform CRUD operations on books, including adding, updating, viewing, and deleting book information. The system is divided into **frontend** and **backend** for better scalability and maintainability.

---

## Project Structure

```
Book Management/
│
├── backend/              # Backend server files
│   ├── demo.py           # Main backend application
│   ├── requirements.txt  # Python dependencies (if any)
│   └── ...               # Other backend-related files
│
├── frontend/             # Frontend React application
│   ├── src/              # React source code
│   ├── public/           # Public assets
│   ├── package.json      # Frontend dependencies
│   └── ...               # Other frontend files
│
├── .gitignore            # Files/folders to ignore in git
├── README.md             # Project documentation
└── package-lock.json     # Auto-generated package lock file
```

---

## Features

* Add new books with details (title, author, ISBN, etc.)
* View all books in a structured format
* Update book information
* Delete books from the system
* User-friendly interface with React frontend
* RESTful API backend with Python Flask

---

## Installation

### Backend

1. Navigate to the backend folder:

   ```bash
   cd backend
   ```
2. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```
3. Run the backend server:

   ```bash
   python demo.py
   ```

### Frontend

1. Navigate to the frontend folder:

   ```bash
   cd frontend
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Run the frontend server:

   ```bash
   npm start
   ```

---

## Usage

* Open your browser and go to `http://localhost:3000` to access the frontend.
* Perform CRUD operations on the books using the UI. The frontend communicates with the backend API to manage data.

---

## .gitignore

Ensure the following is included in your `.gitignore` at the root:

```
node_modules/
build/
__pycache__/
*.pyc
.env
.DS_Store
```

---

## Tech Stack

* **Frontend:** React, JavaScript, HTML, CSS
* **Backend:** Python, Flask
* **Database:** (Specify if using SQLite, MongoDB, etc.)
* **Version Control:** Git & GitHub

---

## Live Website

Check out the live project here:

<img width="1919" height="820" alt="image" src="https://github.com/user-attachments/assets/c0a9fbe5-5d43-4c21-aa60-e834043cb244" />

---
## Contributing

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit your changes:

   ```bash
   git commit -m "Add your message"
   ```
4. Push to your branch:

   ```bash
   git push origin feature/YourFeature
   ```
5. Create a Pull Request.

---

## Author

**Varshitha A T**

---
