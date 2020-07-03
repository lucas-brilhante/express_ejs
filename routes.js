const express = require('express');
const router = express.Router();
const home = require('./control/home');
const users = require('./control/users');

router.get('/', home.getHome);

router.post('/users', users.addUser)
router.get('/users', users.getUsers)

module.exports = router;