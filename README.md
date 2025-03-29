
# Overview

This project is a frontend React-based web application that fetches and displays a paginated list of users from an API. It supports search and filtering functionalities, user editing, and deletion.

---

## Features

- Fetches user data from an API.
- Fetches user data from an API.
- Implements pagination for navigating through users.
- Provides client-side search and filtering.
- Allows users to edit and save details.
- Supports user deletion.

## Prerequisites

1. **Node.js**: Ensure Node.js installed.
2. **NPM**: Ensure npm is installed with Node.js.

---

## Project Setup

### 1. Clone the Repository

```bash
git https://github.com/hkumar1729/EmployWise-Admin
cd EmployWise-Admin
```

---

### 2. Install Dependencies

**Run**:
```bash
npm install
```

### 3. Start the Project

**Create an .env file in the root directory and add the following:**:
```bash
VITE_BACKEND_URL=https://reqres.in
```

**Start the Website**:
```bash
npm run dev
```
- Now open your browser and visit http://localhost:5173.

- Website is deployed on vercel, visit https://employ-wise-admin.vercel.app/login
- Use credentials to login: email: eve.holt@reqres.in and password: cityslicka

### 4. Consideration
- The "Edit User" feature is implemented inside the user card instead of a separate page for a more easy editing experience allows users to quickly modify details without navigating away.

### Conclusion
 - This project provides a streamlined and interactive way to manage users through a React-based frontend. It incorporates essential        functionalities such as authentication, pagination, search, filtering, and user management (edit and delete). The decision to integrate the "Edit User" feature within the user card enhances usability by allowing quick modifications without navigating away from the main interface. The application is designed to be scalable, easily extendable, and user-friendly, ensuring a smooth experience for both developers and end-users.

