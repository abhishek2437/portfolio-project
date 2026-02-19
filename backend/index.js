console.log("NEW FILE RUNNING");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./db");
const Contact = require("./models/Contact");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Serve frontend from public folder
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));


// Contact route
app.post("/api/contact", async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        await newContact.save();
        res.json({ message: "Message saved successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to save message" });
    }
});

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
