require('dotenv').config();
const express = require('express');
const sequelize = require('./database/db');
const cors = require('cors');
const path = require('path');
const exphbs = require('express-handlebars');

// Settings
const app = express();
const PORT = process.env.PORT || 8080;
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) => {
    res.render('home', { title: "Backend - www.renovarcarnet.com" });
});
app.use(express.static(path.join(__dirname, 'public')));
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