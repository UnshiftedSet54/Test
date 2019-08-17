const fs = require('fs');
const express = require('express');
const router = express.Router();

router.use('/', express.static('/Users/SamuelRosales/Documents/Universidad/WEB/General/Proyectos/BootstrapTest/public/resources'));

router.get('/', (req, res) => {
    res.status(200);
    const readStream = fs.createReadStream('./public/views/About/about.html');
    readStream.pipe(res);
});

module.exports = router;