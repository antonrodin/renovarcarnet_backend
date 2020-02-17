const express = require('express');
const router = express.Router();
const User = require('../../database/models/User');
const Provincia = require('../../database/models/Provincia');


// Show all users
router.get('/provincias', (req, res) => {
    Provincia.findAll({ include: { all: true } })
        .then(provincias => res.json(provincias))
        .catch(err => res.json(err));
});

module.exports = router;