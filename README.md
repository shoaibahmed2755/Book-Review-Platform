Book Review Platform
A full-stack book review platform built with React, Node.js, Express, and MongoDB. Users can browse books, read/write reviews, rate books, and manage their profiles. Includes authentication and a responsive UI.
Features

Browse and search books with pagination
View book details and reviews
Submit reviews with star ratings (1-5)
User authentication (JWT-based login/signup)
Responsive UI with Tailwind CSS
Admin role for adding books
Error handling and input validation

Setup Instructions

Clone the Repository
git clone <repository-url>


Backend Setup

Navigate to server/
Install dependencies: npm install
Ensure MongoDB is running locally (mongodb://localhost/book_reviews)
Start the server: npm start


Frontend Setup

Navigate to client/
Install dependencies: npm install
Start the React app: npm start


Access the App

Backend: http://localhost:5000
Frontend: http://localhost:3000



Additional Notes

The backend uses a simple admin check (email contains 'admin'). In a production app, use a proper role-based system.
The frontend is modularized for better organization.
To test admin features, register with an email containing 'admin' (e.g., admin@example.com).
Ensure MongoDB is installed and running locally.

Future Improvements

Add review upvoting
Implement search autocomplete
Add admin dashboard for book management
Add rate limiting to the API

