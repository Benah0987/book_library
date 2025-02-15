📚 Book Lending Library (Rails 8 & React)
A full-stack book lending library built with Ruby on Rails 8 (backend) and React (frontend). This application allows users to browse books, borrow available books, return books, and manage their profile. The backend uses Rails 8’s default authentication system, while the frontend is built with React.

🚀 Features
🔐 Authentication & User Management
User registration and login using Rails 8’s default authentication
Secure password encryption and session handling
📖 Book Management
Users can browse books (title, author, ISBN, and availability status)
Book details page with borrow/return functionality
Validations ensure title, author, and unique ISBN presence
📑 Borrowing System
A user can borrow a book only if it is available
Borrowing record is created, linking the book to the user
Due date set to 2 weeks from borrowing date
Users can view books they have borrowed
Books cannot be borrowed if already checked out
Return system allows users to return books and update availability
🏠 User Dashboard & Profile
Users can view their borrowed books and due dates
Profile page lists all borrowed books
⚠️ Validations & Error Handling
Users cannot borrow an already borrowed book
Ensures valid email format during signup
Displays SweetAlert notifications for feedback
🛠 Testing & Quality Assurance
Model, controller, and view tests using Rails’ built-in testing framework
High test coverage to ensure reliability
🛠 Installation & Setup
1️⃣ Clone the repository
sh
Copy
Edit
git clone <your-github-repository-url>
cd book-lending-library
2️⃣ Backend (Rails 8) Setup
Install dependencies
sh
Copy
Edit
bundle install
Setup the database
sh
Copy
Edit
rails db:create db:migrate db:seed
Note: db:seed adds sample books to the database.

Start the Rails server
sh
Copy
Edit
rails server
Backend runs on http://localhost:3000

3️⃣ Frontend (React) Setup
Navigate to the frontend folder
sh
Copy
Edit
cd frontend
Install dependencies
sh
Copy
Edit
npm install
Start the React development server
sh
Copy
Edit
npm start
Frontend runs on http://localhost:5173

📌 How to Use
🔑 User Registration & Login
Signup at http://localhost:5173/signup
Login at http://localhost:5173/login
📚 Browse Books
Visit http://localhost:5173/books to see the list of available books
Click on a book for detailed information
📖 Borrow a Book
If the book is available, a "Borrow" button will appear
Click it to borrow the book (SweetAlert notification confirms success)
🔄 Return a Book
Go to Profile (http://localhost:5173/profile)
Click "Return" to mark the book as returned
🧪 Running Tests
Backend (Rails)
sh
Copy
Edit
rails test
Frontend (React - Jest & Testing Library)
sh
Copy
Edit
npm test
🔗 Project Structure
bash
Copy
Edit
book-lending-library/
│── backend/        # Ruby on Rails 8 backend
│   ├── app/        # Controllers, Models, Views, Helpers
│   ├── config/     # Routes & Configurations
│   ├── db/         # Migrations & Seeds
│── frontend/       # React frontend
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   ├── pages/         # Pages (Login, Signup, Books, Profile)
│   │   ├── context/       # AuthContext for authentication
│   │   ├── api/           # API calls to Rails backend
│── README.md      # Documentation
🛠 Technologies Used
🔧 Backend (Ruby on Rails 8)
Rails 8 (API Mode)
PostgreSQL / SQLite3
Active Record for ORM
Devise (for authentication)
RSpec (for testing)
🎨 Frontend (React + Vite)
React (SPA)
React Router
Context API for global state
Axios for API requests
SweetAlert for notifications
Jest & React Testing Library (for unit tests)
🎯 Future Improvements
✅ Add email notifications for due date reminders
✅ Implement admin dashboard for book management
✅ Enhance UI with Tailwind CSS

📜 License
This project is open-source under the MIT License.

🔗 GitHub Repository
GitHub Repo URL
