const Sequelize = require('sequelize');
const sequelize = require('../db');
const Model = Sequelize.Model;

class Provincia extends Model { }

Provincia.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre: Sequelize.STRING,
    descripcion: Sequelize.TEXT,
    slug: Sequelize.STRING,
    lat: Sequelize.FLOAT,
    lng: Sequelize.FLOAT
}, {
    sequelize,
    modelName: "provincia",
    underscored: true,
    timestamps: false
});

module.exports = Provincia;