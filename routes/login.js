var express = require('express');
var app=express()
var bodyParser = require('body-parser');
var login=require('../models/login');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();

// login
router.post('/',bodyParser.json({ type: 'application/json' }),function(req,res){
    
        login.login(req.body,function(err,rows){


        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }

    })
});
    
module.exports=router;