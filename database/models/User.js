const Sequelize = require('sequelize');
const sequelize = require('../db');
const Model = Sequelize.Model;

class User extends Model { }

User.init({
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING
}, {
    sequelize,
    modelName: "users",
    underscored: true
});

module.exports = User;