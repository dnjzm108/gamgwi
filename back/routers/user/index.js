const express = require('express');
const router = express.Router();
const controller = require('./controller')


router.get('/info/modify',conroller.info_modify)
router.get('/info',controller.info)
router.get('/login',controller.login)
router.get('/join',controller.join)

module.exports = router;