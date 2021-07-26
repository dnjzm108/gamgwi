const express = require('express');
const router = express.Router();
const controller = require('./controller')


router.get('/view',controller.view)

module.exports = router;