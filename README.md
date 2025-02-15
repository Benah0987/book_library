### 📚 Book Lending Library (Rails 8 & React)
A full-stack book lending library built with Ruby on Rails 8 (backend) and React (frontend). This application allows users to browse books, borrow available books, return books, and manage their profile. The backend uses Rails 8’s default authentication system, while the frontend is built with React.

### 🚀 Features
## 🔐 Authentication & User Management
- User registration and login using Rails 8’s default authentication
- Secure password encryption and session handling
## 📖 Book Management
- Users can browse books (title, author, ISBN, and availability status)
- Book details page with borrow/return functionality
- Validations ensure title, author, and unique ISBN presence
## 📑 Borrowing System
- A user can borrow a book only if it is available
- Borrowing record is created, linking the book to the user
- Due date set to 2 weeks from borrowing date
- Users can view books they have borrowed
- Books cannot be borrowed if already checked out
- Return system allows users to return books and update availability
## 🏠 User Dashboard & Profile
- Users can view their borrowed books and due dates
- Profile page lists all borrowed books
## ⚠️ Validations & Error Handling
- Users cannot borrow an already borrowed book
- Ensures valid email format during signup
- Displays SweetAlert notifications for feedback


## 🛠 Testing & Quality Assurance
- Model, controller, and view tests using Rails’ built-in testing framework
- High test coverage to ensure reliability

## 🛠 Installation & Setup
1️⃣ Clone the repository

 - git clone https://github.com/Benah0987/book_library
- cd book_library

## Backend (Rails 8) Setup
# 📌 Navigate to the backend folder

cd backend
# 📌 Install dependencies

bundle install
# 📌 Setup the database

rails db:create db:migrate db:seed
Note: db:seed adds sample books to the database.

# 📌 Start the Rails server

rails server -p 8000
Backend runs on http://localhost:8000

### Frontend (React) Setup
## 📌 Navigate to the frontend folder


cd ../frontend
# 📌 Install dependencies

npm install
# 📌 Start the React development server

npm start
Frontend runs on http://localhost:3000

### 📌 H0W TO USE
# 🔑 User Registration & Login
Signup at http://localhost:3000/signup
Login at http://localhost:3000/login
# 📚 Browse Books
- Visit http://localhost:3000/books to see the list of available books
- Click on a book for detailed information
# 📖 Borrow a Book
- If the book is available, a "Borrow" button will appear
- Click it to borrow the book (SweetAlert notification confirms success)
# 🔄 Return a Book
Go to Profile (http://localhost:3000/profile)
Click "Return" to mark the book as returned


## 🧪 Running Tests
## Backend (Rails)
# 📌 Run tests for the backend

rails test
Frontend (React - Jest & Testing Library)
# 📌 Run tests for the frontend

npm test

## 🛠 Technologies Used
## 🔧 Backend (Ruby on Rails 8)
- Rails 8 (API Mode)
- PostgreSQL 
- JWT (for authentication)

## 🎨 Frontend (React + Vite)
- React (SPA)
-React Router
- Context API for global state
- SweetAlert for notifications


## 🎯 Future Improvements
✅ Add email notifications for due date reminders
✅ Implement admin dashboard for book management
✅ Enhance UI with Tailwind CSS

## 📜 License
This project is open-source under the MIT License.

## 🔗 GitHub Repository
GitHub Repo URL: https://github.com/Benah0987/book_library
