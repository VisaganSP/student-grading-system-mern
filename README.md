
---

# Visagan's Student Grading System

A complete MERN stack application to manage student grading. This application allows users to add, edit, delete, and view student records along with their marks, totals, averages, and grades.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Frontend Functionality](#frontend-functionality)
- [Screenshots](#screenshots)
- [Contact](#contact)

## Features

- Add new students with their marks.
- Edit existing student details and marks.
- Delete students from the record.
- View all students with their total marks, average, and grade.
- Dynamic calculation of total marks, average, and grade.

## Technologies Used

### Frontend

- HTML
- CSS
- JavaScript (Vanilla)
- React (for a modularized approach)

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv (for environment variables)

## Folder Structure

```
project-root/
├── backend/
│   ├── config/
│   │   └── db.mjs
│   ├── controllers/
│   │   └── studentController.mjs
│   ├── models/
│   │   └── studentModel.mjs
│   ├── routes/
│   │   └── studentRoutes.mjs
│   ├── .env
│   ├── server.mjs
│   └── package.json
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    |   |
    |   |──assets/styles
    |   |  └── styles.css
    │   ├── components/
    │   │   ├── AddStudentForm.jsx
    │   │   ├── StudentTable.jsx
    │   │   └── EditStudentForm.jsx
    │   ├── App.jsx
    │   └── index.jsx
    │   
    ├── package.json
    └── README.md
```

## Installation

### Prerequisites

- Node.js
- MongoDB (Ensure MongoDB is running on your local machine or provide a MongoDB Atlas URI in the `.env` file)
- npm or yarn (package managers)

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/VisaganSP/student-grading-system-mern.git
   cd student-grading-system-mern/backend
   ```

2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add the following:
   ```plaintext
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/studentDB
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```bash
   cd ../frontend
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Start the frontend application:
   ```bash
   npm run dev
   ```

## Running the Application

After completing the installation steps, you can run the application with the following steps:

1. Start the backend server:
   ```bash
   cd backend
   npm run dev
   ```

2. Start the frontend application:
   ```bash
   cd frontend
   npm run dev
   ```

Open your browser and navigate to `http://localhost:5173` to see the application in action.

## API Endpoints

### Base URL

`http://localhost:3000/api/students`

### Endpoints

- **GET /**: Fetch all students
- **POST /**: Add a new student
- **DELETE /:id**: Delete a student by ID
- **PUT /:id**: Update a student by ID

## Frontend Functionality

- **Add Student**: Use the form to add a new student. Enter the name, roll number, and marks for 5 subjects.
- **Edit Student**: Click the "Edit" button next to a student's record to update their information.
- **Delete Student**: Click the "Delete" button next to a student's record to remove them from the database.
- **View Students**: See a table listing all students along with their total marks, average marks, and grade.

## Screenshots

![Add Student Form](screenshots/add-student-form.png)
![Student Table](screenshots/student-table.png)
![Edit Student Form](screenshots/edit-student-form.png)

## Contact

For any questions or suggestions, please reach out to [visagansvvg@gmail.com](mailto:visagansvvg@gmail.com).

---