const auth = require('../middleware/authenticator');
//const pg = require('pg');
const express = require('express');
const router = express.Router();

router.use(auth);

router.post('/', (req, res) => {

});

module.exports = router;