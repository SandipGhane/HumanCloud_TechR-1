const {check, validationResult} = require('express-validator');

exports.createUser = [check('email').isEmail()];