# 📊 EduMetrics – Student Analytics Dashboard

## 🚀 Live Demo

**Frontend:**
https://student-analytics-dashboard-smoky.vercel.app

**Backend API:**
https://student-analytics-dashboard-fi0m.onrender.com

---

## 📌 Project Overview

EduMetrics is a full-stack Student Analytics Dashboard designed to help institutions monitor student performance, manage records, and generate academic insights through interactive visualizations.

The application provides a centralized platform to add, update, delete, search, and analyze student data while presenting performance metrics through a modern dashboard interface.

---

## ✨ Features

### Student Management

* Add Student Records
* Edit Student Information
* Delete Student Records
* Search Students
* Department-wise Filtering

### Analytics Dashboard

* Total Students
* Average Marks
* Highest Score
* Pass Percentage
* Department Count
* Top Performer Identification
* Student Rankings
* Department Insights
* Performance Analytics Chart

### Additional Features

* Export Student Data to CSV
* Loading States
* Empty State Handling
* Delete Confirmation Dialog
* Responsive Design
* Modern Dark Theme UI

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Axios
* Recharts
* CSS3

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

## 📂 Project Structure

student-analytics-dashboard/

├── client/

│ ├── src/

│ ├── components/

│ ├── pages/

│ └── api.js

│

├── server/

│ ├── controllers/

│ ├── models/

│ ├── routes/

│ ├── server.js

│ └── package.json

│

└── README.md

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Tanmay2024/student-analytics-dashboard.git
```

### Backend Setup

```bash
cd server
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Run Backend:

```bash
npm run dev
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## 🔌 API Endpoints

### Students

| Method | Endpoint          |
| ------ | ----------------- |
| GET    | /api/students     |
| POST   | /api/students     |
| PUT    | /api/students/:id |
| DELETE | /api/students/:id |

---

## 🎯 Future Enhancements

* Authentication & Authorization
* User Roles (Admin/Faculty)
* Student Profile Pages
* Advanced Analytics
* PDF Report Generation
* Email Notifications
* Attendance Tracking
* Theme Switching (Dark/Light)

---

## 👨‍💻 Developed By

**Tanmay Guruvugari**

Full Stack Web Development Intern Project

2026
