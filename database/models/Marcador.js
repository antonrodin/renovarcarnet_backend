const Sequelize = require('sequelize');
const sequelize = require('../db');
const Model = Sequelize.Model;

class Marcador extends Model { }

Marcador.init({
    nombre: Sequelize.STRING,
    slug: Sequelize.STRING,
    lat: Sequelize.FLOAT,
    lng: Sequelize.FLOAT,
    user_id: Sequelize.INTEGER
}, {
    sequelize,
    freezeTableName: true,
    tableName: "marcador",
    underscored: true,
});

module.exports = Marcador;