const express = require('express');
const router = new express.Router();

router.get('/users-in-london', () =>{
    console.log('Welcome to api')

});


module.exports = router;