
var express = require('express');
var app=express()
var bodyParser = require('body-parser');
var reportGetPredictions=require('../models/reportGetPredictions');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();

// return all predictions in the database
router.get('/',function(req,res,next){

    reportGetPredictions.reportGetAllPredictions(function(err,rows){

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