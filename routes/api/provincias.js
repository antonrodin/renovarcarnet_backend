const express = require('express');
const router = express.Router();
const Provincia = require('../../database/models/Provincia');
const Municipio = require('../../database/models/Municipio');

router.get('/', (req, res) => {
    Provincia.findAll().then(provincias => {
        res.json(provincias);
    });
});

router.get('/:id', (req, res) => {
    Provincia.findOne({
        where: {
            id: req.params.id
        },
        include: Municipio
    }).then(provincias => {
        if(provincias != null) res.json(provincias);
        res.json({});
    });
})


module.exports = router;