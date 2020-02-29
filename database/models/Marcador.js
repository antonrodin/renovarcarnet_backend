const Sequelize = require('sequelize');
const sequelize = require('../db');
const Model = Sequelize.Model;

class Marcador extends Model { }

Marcador.init({
    nombre: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true,
            len: [3,255]
        }
    },
    slug: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true,
            isLowercase: true,
            len: [3,50]
        }
    },
    otros: {
        type: Sequelize.TEXT,
        validate: {
            notEmpty: true,
            len: [160, 10000]
        }
    },
    correo: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true, 
        }
    },
    url: {
        type: Sequelize.STRING,
        validate: {
            isUrl: true, 
        }
    },
    cp: Sequelize.STRING,
    direccion: Sequelize.STRING,
    lat: Sequelize.FLOAT,
    lng: Sequelize.FLOAT,
    
    // 1 - DGT
    // 2 - CRC
    tipo: {
        type: Sequelize.TINYINT,
        defaultValue: 0,
    },

    // 0 valid and 1 invalid
    valido: {
        type: Sequelize.TINYINT,
        defaultValue: 0,
    },

    // Duplicado value by default is no, but otherwise
    // it may be url to redirect
    duplicado: {
        type: Sequelize.STRING,
        defaultValue: "no",
    }
}, {
    sequelize,
    freezeTableName: true,
    tableName: "marcador",
    underscored: true,
});

module.exports = Marcador;