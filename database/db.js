const Sequelize = require('sequelize');
const { database } = require('../config');

const sequelize = new Sequelize(
    database.database,
    database.username,
    database.password, {
        host: database.host,
        dialect: 'mysql'
    }
);

module.exports = sequelize;

// Models
const User = require('./models/User');
const Provincia = require('./models/Provincia');
const Municipio = require('./models/Municipio');

// Relationship
Municipio.belongsTo(Provincia, {
    foreignKey: "provincia_id"
});
Provincia.hasMany(Municipio, {
    foreignKey: "provincia_id"
});