require('dotenv').config();
const express = require('express');
const sequelize = require('./database/db');

// Settings
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) => {
    res.json({"it": "Works"});
});

app.use('/api', require('./routes/api/api'));

// Start Server
app.listen(PORT, () => {
    console.log(`The APP is running on http://localhost:${PORT}`);

    // Connect sequelize DB
    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
});