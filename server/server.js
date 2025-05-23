const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const booksRoutes = require("./routes/books");
const reviewsRoutes = require("./routes/reviews");

const app = express();

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/books", booksRoutes);
app.use("/api/reviews", reviewsRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
