const express = require('express');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 5000

const toursRoute = require("./routes/v1/tours.routes")

const app = express()
dotenv.config()
app.use(express.json())

// Database Connect
require('./config/dbConnect')

// Routes
app.use("/api/v1", toursRoute)

// Helath Check
app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(PORT, () => {
    console.log(`Server is listing on PORT:${PORT}`);
})