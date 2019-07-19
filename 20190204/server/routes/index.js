const express = require('express');

const router = express.Router();

router.get('/', (req, res) => res.send({ data: 'this is index.' }));

module.exports = router;
