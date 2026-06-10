<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# React Authentication App

## Overview

This project is a simple React Authentication Application built using React, React Router, and MDB React UI Kit. It allows users to create an account, log in, and store user information in the browser's localStorage.

## Features

* User Registration (Sign Up)
* User Login
* Form Validation
* Password Confirmation Check
* Terms & Conditions Acceptance
* Duplicate Email Detection
* Local Storage Data Persistence
* Protected Authentication Status
* Responsive UI using MDB React UI Kit

## Development Approach

This project was developed using modern web development practices with React, React Router, and MDB React UI Kit. During development, AI-assisted coding tools such as Cursor AI were used to improve productivity, understand concepts, debug issues, and accelerate the development workflow.

### Tools Used

* React
* React Router
* MDB React UI Kit
* JavaScript (ES6+)
* Local Storage
* Cursor AI
* Git & GitHub

### Benefits of AI-Assisted Development

* Faster development process
* Improved code quality
* Quick debugging and error resolution
* Better understanding of React concepts
* Enhanced developer productivity

## Project Structure

```text
src/
├── components/
├── pages/
│   ├── Login.jsx
│   └── Sign.jsx
├── App.jsx
└── main.jsx
```

## How It Works

### Sign Up

1. User enters:

   * Name
   * Email
   * Password
   * Confirm Password

2. Validation checks:

   * All fields are filled
   * Passwords match
   * Terms are accepted
   * Email is not already registered

3. User data is saved to localStorage.

### Login

1. User enters email and password.
2. Application checks localStorage for matching credentials.
3. If credentials are correct:

   * Authentication status is saved.
   * User is redirected to the dashboard/home page.

## Local Storage Structure

### Users

```json
[
  {
    "name": "Abdullah",
    "email": "abdullah@gmail.com",
    "password": "123456"
  }
]
```

### Authentication Status

```json
true
```

## Installation

```bash
npm install
```

## Run Project

```bash
npm run d
```

## Future Improvements

* Firebase Authentication
* Password Hashing
* User Profile Page
* Backend Database Integration
* JWT Authentication
* Forgot Password Functionality

## Author

Sir Ahmed 
Abdullah Ansari
SMIT Student
Badge 18
>>>>>>> 50d0f7e49093a6e3cc7392672ee8e85061ec4a00
