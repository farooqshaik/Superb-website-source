var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index.html', { title: 'Benefits' });
});

router.get('/random_data', function(req, res, next) {
    res.render('progress.html', { title: 'Benefits' });
});

router.get('/show_seed',function (req,res,next) {
   res.render('create_seed.html',{extraEntropy:"1234"});
});

router.post('/myaccount',function (req,res,next) {
    var seed=req.body.seed;
    var pw=req.body.password;
    var address=req.body.address;
    var save_flag=req.body.save_flag;
    console.log(address);
    res.render('account.html',{seed:seed,password:pw,address:address,save_flag:save_flag});
});


module.exports = router;
