const express = require('express');
const router = express.Router();
const Municipio = require('../../database/models/Municipio');
const Provincia = require('../../database/models/Provincia');

router.get('/:id', (req, res) => {
    Municipio.findOne({
        where: {
            id: req.params.id
        },
        include: {
            model: Provincia
        }
    }).then(municipio => {
    
        
        res.json(municipio);
    })
})

module.exports = router;