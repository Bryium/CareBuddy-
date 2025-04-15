# 💙 CareBuddy

**CareBuddy** is a full-stack web application that connects patients with healthcare providers through secure virtual consultations and appointment scheduling. Built with **React** and **Django REST Framework**, CareBuddy simplifies access to healthcare by providing a smooth and responsive user experience.

---

## 🩺 Key Features

### 🔐 User Authentication & Role Management
- Secure registration and login system
- Role-based access for **patients**, **doctors**, and **admins**
- Profile management for updating personal information and viewing appointment history

### 🩻 Doctor Management
- Admins can add, update, and manage doctor profiles and schedules
- Doctors can update their availability, specializations, and appointment slots

### 📆 Appointment Booking
- Patients can book, reschedule, or cancel appointments
- Real-time view of doctor availability
- Notifications for upcoming bookings

### 📍 Location-Based Services
- Integration with **Google Maps API**
- Locate nearby health centers based on current location or a searched area

### 💬 Virtual Consultations
- Secure video or chat-based consultations between patients and doctors

### 📱 Responsive User Interface
- Clean, modern, and mobile-friendly design
- Intuitive navigation across all devices

### 🔐 Security & Compliance
- **JWT authentication**, **HTTPS**, and **data encryption** for secure data handling
- Follows best practices for storing and managing healthcare data

---

## 🛠 Tech Stack

| Layer         | Technologies                                   |
|---------------|------------------------------------------------|
| **Frontend**  | React, Vite, Axios, Tailwind CSS               |
| **Backend**   | Django, Django REST Framework, PostgreSQL      |
| **Deployment**| Vercel (Frontend), Render/Railway (Backend)    |
| **Other Tools** | Google Maps API, JWT, CORS, Gunicorn         |

---

## 📁 Folder Structure
carebuddy/ ├── frontend/ # React application (deployed on Vercel) │ ├── public/ │ ├── src/ │ └── package.json │ ├── backend/ # Django application (deployed on Render/Railway) │ ├── carebuddy/ │ ├── api/ │ ├── manage.py │ └── requirements.txt │ ├── README.md └── .gitignore

## 🤝 Contributions

Contributions are welcome! Feel free to fork the repo and submit a pull request.


