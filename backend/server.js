
require("dotenv").config()
const express = require("express")
const path = require("path")
const connectDB = require("./config/db")
const authRoutes = require("./routes/authRoutes")
const incomeRoutes = require("./routes/incomeRoutes")
const expenseRoutes = require("./routes/expenseRoutes")
const dashboardRoutes = require("./routes/dashboardRoutes")
const app = express()
const cors = require('cors');

const allowedOrigins = [
    'http://localhost:5173',          // Local development
    'https://www.eshanbhuse-expense-tracker.online'             // Production frontend URL (set in .env or Vercel)
];

app.use(cors({
    origin: function(origin, callback) {
        // Allow requests with no origin (like Postman or server-to-server)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true); // Allowed
        } else {
            callback(new Error('Not allowed by CORS')); // Blocked
        }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));

app.use(express.json());

// app.use(
//     cors({
//         origin:process.env.CLIENT_URL || "*",
//         methods:["GET","POST","PUT","DELETE"],
//         allowedHeaders:["Content-Type","Authorization"],
//     })
// );
// app.use(express.json())

connectDB()


// app.use((req, res, next) => {
//     if(!isConnected) {
//         connectDB();
//     }
//     next();
// })

app.use("/api/v1/auth",authRoutes)
app.use("/api/v1/income",incomeRoutes)
app.use("/api/v1/expense",expenseRoutes)
app.use("/api/v1/dashboard",dashboardRoutes)

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// const PORT = process.env.PORT || 5000
// app.listen(PORT,()=>
//     console.log(`Server is running on port ${PORT}`));

// Serve React frontend
const frontendPath = path.join(__dirname, "\build"); // Make sure build folder exists
app.use(express.static(frontendPath));

// Catch-all route to handle React routing (fixes 404 on refresh)
app.get("*", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
});

module.exports = app;