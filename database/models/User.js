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
    freezeTableName: true,
    tableName: "users",
    underscored: true,
    name: {
        singular: "user",
        plural: "users"
    }
});

module.exports = User;