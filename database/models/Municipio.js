const Sequelize = require('sequelize');
const sequelize = require('../db');
const Model = Sequelize.Model;

class Municipio extends Model { }

Municipio.init({
    name: Sequelize.STRING,
    email: Sequelize.STRING,
}, {
    sequelize,
    modelName: "municipios",
    underscored: true
});

module.exports = Municipio;