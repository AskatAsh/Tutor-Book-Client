# <img width="32px" src="https://i.ibb.co/7SdPwvB/icons8-training-96.png"/> **TutorBook:** An Online Tutor Booking Platform

This project is an Online Tutor Booking Platform, designed to connect users with tutors across various languages and subjects. It simplifies the process of finding, reviewing, and booking tutors through an interactive and user-friendly interface. The platform is essential for promoting accessible learning opportunities globally and streamlining the tutor hiring process. Users can browse categories, view detailed tutor profiles, and book sessions securely. Features like adding tutorials, managing bookings, and reviewing tutors enhance user engagement.

![Project Screenshot](https://i.ibb.co/kKzTCLm/download.png)  
*A representative screenshot of the project.*

---

## 🌐 **Live Link**

Check out the live version of the project:
[Live Demo](https://tutor-books.web.app)




## 💡 **Key Features**
- **Responsive Design:** Fully responsive across mobile, tablet, and desktop.
- **Authentication System:** Email/password login, Google login, account recovery, and protected routes.
- **Tutor Management:** Add, update, delete, and view tutors.
- **Tutor Search & Filters:** Search tutors by language and filter by tutor language.
- **Add Tutorials:** Tutors can add their details and tutorials.
- **My Tutorials:** Tutors can view their added tutorials with update and delete actions.
- **My Books Tutors:** Students can see their booked tutors, add review.
- **Error Handling:** User-friendly error messages and loading indicators.
- **Session Management:** Secure session management with JWT tokens.

---

## 🖌️ **Application Pages**

### Public Pages
- **Home Page (/):** Displays banner and language categories for tutors with essential information and link to find tutors page.

- **Find Tutors (/findTutors):** View all Tutors, search, filter, and sort by language.
  
### Protected Pages
- **Tutor Details (/tutor/:details):** Detailed Tutor information and Book Tutor option.
- **Add Tutorials (/addTutorials):** Form for adding tutorials with tutor details.
- **Book a Tutor (/tutor/:id):** A Book Tutor button in tutor details page to book that tutor
- **My Booked Tutors (/myBookedTutor):** View and review booked tutors.
- **My Tutorials (/myTutorials):** Manage posted Tutorials with update and delete actions.
- **Find Tutors (/findTutors/:category):** Find one or more tutors by language category.
- **Update Tutorial (/updateTutorial/:id):** Update a posted Tutorial information.

---

## 📂 **Architecture**
- **Navbar:** Includes company logo, navigation links, user info, and authentication controls.
- **Footer:** Displays company information, policies, and social links.
- **Dynamic Routing:** Main section renders pages based on routes.

---

## 🛠️ **Technologies Used**
- **Frontend:** React.js, Tailwind CSS, DaisyUI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Firebase Auth, Google Authentication
- **Deployment:** [Platform Name]
- **Version Control:** GitHub

---

## 🧩 **Dependencies**
- "axios": "^1.7.9",
- "date-fns": "^4.1.0",
- "firebase": "^11.1.0",
- "lottie-react": "^2.4.0",
- "motion": "^11.15.0",
- "react": "^18.3.1",
- "react-dom": "^18.3.1",
- "react-helmet-async": "^2.0.5",
- "react-hot-toast": "^2.4.1",
- "react-icons": "^5.4.0",
- "react-router-dom": "^7.1.1",
- "sweetalert2": "^11.15.3",
- "swiper": "^11.1.15"

---
## 📁 **Run in Local Machine**
1. Clone the repository:
   ```bash
   git clone https://github.com/AskatAsh/Tutor-Book-client.git

2. Navigate to the project directory:
   ```bash
   cd yourproject

3. Install the dependencies:
   ```bash
   npm install

4. Run the project:
   ```bash
   npm run dev

---
## 📜 **Best Practices Followed**

### 🧹 **Code Quality**
- **Modular Code:** Code is divided into reusable components and modules for better maintainability.
- **Clean and Readable:** Proper indentation, meaningful variable names, and comments for clarity.
- **DRY Principle:** Reused logic to avoid redundancy and ensure maintainability.
- **Consistent Naming Conventions:** Followed camelCase for variables and functions, and also for components.

### 🚦 **Error Handling**
- **Frontend Errors:** Clear and user-friendly error messages are displayed for invalid inputs, failed requests, or other issues.
- **Backend Errors:** Properly structured error responses with HTTP status codes.
- **Boundary Testing:** Validations to handle edge cases and ensure application stability.

### 🔒 **Security**
- **JWT Authentication:** Used secure JSON Web Tokens to protect API endpoints and user sessions.
- **Input Validation:** Sanitized and validated user inputs to prevent security vulnerabilities like XSS and SQL injection.
- **Protected Routes:** Ensured sensitive pages and APIs are accessible only to authenticated users.

### 🖌️ **Responsive Design**
- **Mobile-First Approach:** Designed the UI to adapt seamlessly to various screen sizes.
- **Scalable Layouts:** Used flexible grid systems (Tailwind CSS) to ensure cross-device compatibility.
- **Accessible UI:** Followed web accessibility standards to enhance usability for all users.

### 📂 **Project Organization**
- **Folder Structure:** Followed a clear folder structure separating components, pages, services, and assets.
- **Meaningful Commits:** Used descriptive commit messages to track changes effectively.
- **README Documentation:** Added detailed instructions for setting up, running, and understanding the project.

### ⚡ **Performance Optimization**
- **Lazy Loading:** Dynamically loaded components to improve initial page load speed.
- **Efficient State Management:** Used local state and React Query to manage data efficiently.
- **Reduced Re-renders:** Optimized components to prevent unnecessary re-renders for better performance.

### 🌐 **Deployment**
- **Error-Free Hosting:** Ensured the deployed application is free of runtime errors.
- **Live Updates:** Automatically updates changes on the live application through CI/CD pipelines.
- **Environment Variables:** Secured sensitive data using `.env` files.

### ✅ **Testing**
- **Manual Testing:** Tested all user flows to ensure the app functions as intended.
- **Error Scenarios:** Simulated errors to verify the robustness of error-handling mechanisms.

These practices ensure that the project is scalable, maintainable, and user-friendly. 🚀
## 📜 **License**

This project is licensed under the **MIT License**.  
You are free to use, modify, and distribute this project under the terms of the license.

### 📄 **MIT License**