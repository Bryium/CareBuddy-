# CareBuddy-
CareBuddy is a full-stack web application designed to bridge the gap between patients and healthcare providers through virtual consultations and efficient appointment management. Built using React for the frontend and Django REST Framework for the backend, CareBuddy provides a seamless and secure healthcare experience.

## 🩺 Key Features
User Authentication & Role Management
Secure registration and login for both patients and doctors, with role-based access and profile management.

Doctor Management
Admins can add, update, and manage doctors and their schedules. Doctors can update their availability and consult virtually.

Appointment Booking
Patients can book, reschedule, or cancel appointments based on doctors’ real-time availability.

Location-Based Services
Integrated with Google Maps to help users locate nearby health centers.

Virtual Consultations
Secure virtual appointments and consultations between doctors and patients.

Responsive User Interface
Clean, modern, and mobile-friendly design for a smooth user experience across all devices.

Security & Compliance
Uses JWT authentication, HTTPS, and follows best practices for handling sensitive user data.

🛠 Tech Stack
Frontend: React, Vite, Axios, Tailwind CSS

Backend: Django, Django REST Framework, PostgreSQL

Deployment: Vercel (Frontend), Render/Railway (Backend)

Other Tools: Google Maps API, JWT, CORS, Gunicorn

📁 Folder Structure
bash
Copy
Edit
carebuddy/
├── frontend/    # React (Vercel)
├── backend/     # Django (Render or Railway)
├── README.md
└── .gitignore
