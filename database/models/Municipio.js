const Sequelize = require('sequelize');
const sequelize = require('../db');
const Model = Sequelize.Model;

class Municipio extends Model { }

Municipio.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    municipio: Sequelize.STRING,
    slug: Sequelize.STRING,
    latitud: Sequelize.FLOAT,
    longitud: Sequelize.FLOAT
}, {
    sequelize,
    modelName: "municipios",
    underscored: true,
    timestamps: false
});

module.exports = Municipio;