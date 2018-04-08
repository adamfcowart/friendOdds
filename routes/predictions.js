var express = require('express');
var app=express()
var bodyParser = require('body-parser');
var predictions=require('../models/predictions');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();

// add a prediction
router.post('/',bodyParser.json({ type: 'application/json' }),function(req,res){
    

        predictions.addPredictions(req.body,function(err,rows){

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