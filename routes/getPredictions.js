var express = require('express');
var app=express()
var bodyParser = require('body-parser');
var getPredictions=require('../models/getPredictions');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();

// return all predictions for a user
router.get('/',function(req,res,next){

    getPredictions.getAllPredictions(req.query.username,function(err,rows){

        if(err)
        {
            res.json(err);
            console.log("err");
        }
        else
        {
            res.json(rows);
            console.log("noerr")
        }
    
    })
});


module.exports=router;