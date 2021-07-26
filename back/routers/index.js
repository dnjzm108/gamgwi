const express = require('express');
const router = express.Router();
const user = require('./user/index');
 const board = require('./board/index');
 const main = require('./main/index');

 router.use('/user',user);
 router.use('/board',board);
 router.use('/',main);

module.exports = router;