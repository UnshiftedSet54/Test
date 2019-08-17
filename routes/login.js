const auth = require('../middleware/authenticator');
const fs = require('fs');
const express = require('express');
const router = express.Router();

router.use(auth);
router.use('/', express.static('/Users/SamuelRosales/Documents/Universidad/WEB/General/Proyectos/BootstrapTest/public/resources'));

router.get('/', (req, res) => {
    console.log(req);
    res.status(200);
    const readStream = fs.createReadStream('./public/views/Login/login.html');
    readStream.pipe(res);
});

router.post('/', (req, res) => {
    //console.log('login');
    res.status(200).write('Hola desde LOGIN');
    res.end();
});

module.exports = router;