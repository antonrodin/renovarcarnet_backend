const express = require('express');
const router = express.Router();

const Provincia = require('../../database/models/Provincia');

router.use('/users', require('./users'));
router.use('/provincias', require('./provincias'));
router.use('/municipios', require('./municipios'));
router.use('/marcadores', require('./marcadores'));

// Show all provincias
router.get('/provincias', (req, res) => {
    Provincia.findAll({ include: { all: true } })
        .then(provincias => res.json(provincias))
        .catch(err => res.json(err));
});

module.exports = router;