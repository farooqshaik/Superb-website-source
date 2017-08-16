var express = require('express');
var router = express.Router();

var userctrl = require('../controller/user_ctrl');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/save_data',userctrl.save_data);
router.post('/login',userctrl.login);

module.exports = router;
