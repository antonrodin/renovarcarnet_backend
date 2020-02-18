const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const jwt  = require('jwt-simple');
const moment = require('moment');
const User = require('../../database/models/User');

// Auth
// Login function
router.post('/login', (req, res) => {
    
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        
        if(user == null) {
            res.json({ err: "Usuario no encontrado" });
        } else {

            let hash = user.password.replace('$2y$', '$2b$');
        
            bcrypt.compare(req.body.password, hash, function(err, result) {

                // If Password is feten
                if(result) {
                    res.json({ token: createToken(user) })
                } else {
                    res.json({ error: "La contraseña es invalida" });
                }

            });
        }
        
    }).catch(err => {
        res.json({ error: err });
    });
    
});

// Create JWT Tocken
function createToken(user) {
    
    const payload = {
        userId: user.id,
        createdAt: moment().unix(),
        expiresAt: moment().add(process.env.TOKEN_EXPIRES, 'seconds').unix()
    }

    return jwt.encode(payload, process.env.SECRET_KEY);
}

module.exports = router;