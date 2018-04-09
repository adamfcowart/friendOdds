var express = require('express');
var app=express()
var bodyParser = require('body-parser');
var getPredictions=require('../models/getPredictions');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();

// return all predictions in the database
router.get('/',function(req,res,next){

    getPredictions.getAllPredictions(function(err,rows){

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