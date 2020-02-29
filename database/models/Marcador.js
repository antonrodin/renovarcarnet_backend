const Sequelize = require('sequelize');
const sequelize = require('../db');
const Model = Sequelize.Model;

class Marcador extends Model { }

Marcador.init({
    nombre: Sequelize.STRING,
    slug: Sequelize.STRING,
    otros: Sequelize.TEXT,
    cp: Sequelize.STRING,
    direccion: Sequelize.STRING,
    lat: Sequelize.FLOAT,
    lng: Sequelize.FLOAT
}, {
    sequelize,
    freezeTableName: true,
    tableName: "marcador",
    underscored: true,
});

module.exports = Marcador;