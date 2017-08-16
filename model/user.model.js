/**
 * Created by han on 7/17/2017.
 */
var mongoose = require('mongoose');
var assert=require('assert');
var Schema=mongoose.Schema;

var userSchema = new Schema({
    seed: {
        type:String,
        require:true
    },
    pwd:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    }
});

var User= mongoose.model('User', userSchema);
module.exports=User;