var express = require('express');
var app=express()
var bodyParser = require('body-parser');
var games=require('../models/games');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();

// return all games in the database
router.get('/',function(req,res,next){

    games.getAllGames(function(err,rows){

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