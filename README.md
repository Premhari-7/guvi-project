# GUVI Full Stack Project

## 📌 Project Overview
This is a full stack web application with:
- User Registration & Login (MySQL)
- Profile Management (MongoDB)
- Session Handling (localStorage + Redis)

---

##  Features

###  Authentication
- Users can register and login securely
- Only valid Gmail addresses are allowed

###  Profile Management
- Users can save:
  - Age
  - Date of Birth
  - Contact Number

---

##  Validations Implemented

###  Email Validation
- Only valid Gmail format allowed  
   Example: user@gmail.com  
   Invalid: user@gmail, user@, user123  

---

###  Login Validation
- Only registered users can login  
- Invalid credentials are rejected  

---

###  Age Validation
- Age must be greater than 0  
-  Negative or zero values are not allowed  

---

###  Contact Validation
- Must be exactly 10 digits  
-  Letters are not allowed  
-  Less or more than 10 digits not allowed  

---

###  Required Fields
- All fields must be filled  
- Empty inputs are not accepted  

---

##  Technologies Used

- HTML, CSS, JavaScript  
- Bootstrap (Responsive UI)  
- jQuery (DOM + AJAX)  
- PHP (Backend)  
- MySQL (User data)  
- MongoDB (Profile data)  
- Redis (Session storage)  

---

##  How to Run the Project

1. Start XAMPP (Apache & MySQL)
2. Place project inside:
   C:\xampp\htdocs\guvi-project
3. Open browser:
   http://localhost/guvi-project/

---

##  Notes for Reviewer

- This project uses AJAX (no form submission)
- MySQL uses Prepared Statements
- Session is handled using:
  - localStorage (frontend)
  - Redis (backend)

---

##  Author
PREM HARI S
