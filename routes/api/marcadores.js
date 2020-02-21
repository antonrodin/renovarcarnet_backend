const express = require('express');
const router = express.Router();
const Marcador = require('../../database/models/Marcador');

/**
 * Get marcadores with pagination
 */
router.get('/', (req, res) => {

    let limit = (!isNaN(parseInt(req.query.limit))) ? parseInt(req.query.limit) : 20;
    let offset = (!isNaN(parseInt(req.query.offset))) ? parseInt(req.query.offset) : 0;

    Marcador.findAndCountAll({
        limit: limit,
        offset: offset,
        order: [
            ['id', 'desc']
        ]
    }).then(result => {
        res.json({ total: result.count, marcadores: result.rows });
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
    })
});

module.exports = router;