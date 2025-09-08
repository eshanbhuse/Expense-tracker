# Expense Tracker
A simple web application to help you keep track of your expenses and income. It lets you add, view, and delete records so you can see where your money goes.

Features

Add income and expense entries with category, amount, and date.

View a list of all entries.

Delete entries you no longer need.

Basic summary of total income, total expense, and balance.

User authentication (login/signup).

Tech Stack

Frontend: React

Backend: Node.js + Express

Database: MongoDB

API requests handled with Axios

Installation

Clone the repo:

git clone https://github.com/yourusername/Expense-tracker.git


Install dependencies:

cd Expense-tracker
npm install


Set up environment variables:

Create a .env file in the root and add your MongoDB URI and any secret keys:

MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret


Start the server:

npm run dev


Start the frontend (in a separate terminal):

cd client
npm install
npm start


The app should now be running at http://localhost:3000.

Usage

Sign up or log in.

Add your income or expenses.

Check your balance and transaction history.

Delete entries if needed.

Future Improvements

Add charts for better visualization.

Categorize expenses more specifically.

Add recurring expenses and notifications.

Contributing

If you want to contribute, feel free to fork the repo, make changes, and create a pull request.

License

This project is open for personal and educational use.
