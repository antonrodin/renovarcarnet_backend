const express = require('express');
const router = express.Router();
const Marcador = require('../../database/models/Marcador');
const Municipio = require('../../database/models/Municipio');
const Provincia = require('../../database/models/Provincia');

/**
 * Get marcadores with pagination
 */
router.get('/', (req, res) => {

    let pageSize = (!isNaN(parseInt(req.query.pageSize))) ? parseInt(req.query.pageSize) : 20;
    
    let offset = 0;
    if(!isNaN(parseInt(req.query.pageIndex))) {
        offset = parseInt(req.query.pageIndex) * pageSize;
    };

    Marcador.findAndCountAll({
        limit: pageSize,
        offset: offset,
        order: [
            ['id', 'desc']
        ],
        include: [ Municipio, Provincia ]
    }).then(result => {
        res.json({
            pageIndex: parseInt(req.query.pageIndex),
            pageSize: pageSize,
            resultsLength: result.count, 
            marcadores: result.rows 
        });
    })
});

/**
 * Get one marcador
 * @param id Id del marcador
 */
router.get('/:id', (req, res) => {
    Marcador.findOne({
        where: {
            id: req.params.id
        }
    }).then(marcador => {
        res.json(marcador);
    }).catch(err => {
        res.json({ err: err });
    })
});

/**
 * Update marcador
 */
router.put('/', (req, res) => {
    
    Marcador.update(req.body, { where: { id: req.body.id } })
    .then(result => {
        res.json(result);
    })
    .catch(err => {
        res.json({ err: err });
    });

});

module.exports = router;