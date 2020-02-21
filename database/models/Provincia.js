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
    freezeTableName: true,
    tableName: "provincia",
    underscored: true,
    timestamps: false,
    name: {
        singular: "provincia",
        plural: "provincias"
    }
});

module.exports = Provincia;