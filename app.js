require('dotenv').config();
const express = require('express');

// Settings
const app = express();
const PORT = process.env.PORT | 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) => {
    res.json({"it": "Works"});
});

// Start Server
app.listen(PORT, () => {
    console.log(`The APP is running on http://localhost:${PORT}`);
});