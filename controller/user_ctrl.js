
var User = require('../model/user.model');

exports.save_data=function(req,res){
    var seed=req.query.seed;
    var pw=req.query.pw;
    var address=req.query.address;

    User.create({seed:seed,pwd:pw,address:address},function(err){
        if(err){
            console.log(err);
            return;
        }
        console.log("User added");
    });
    res.send({param1:seed,param2:pw});
}

exports.login=function(req,res){
    var seed=req.query.seed;
    var pw=req.query.pw;
    var address="0";
    User.findOne({seed:seed,pwd:pw},function(err,user){
        if(err){
            console.log("error");
            return;
        }
        if(user==null){
            console.log('not found.');
            res.send({param1:seed,param2:pw,address:address});
        } else{
            console.log(user);
            address=user.address;
            res.send({param1:seed,param2:pw,address:address});
        }
    });
}