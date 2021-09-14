const express = require('express');
const usersController = require('../controllers/usersController');

const router = new express.Router();

router.get('/people-living-in-london-or-within-50-miles', usersController.getUsers);


module.exports = router;