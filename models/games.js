var db=require('../dbconnection'); //reference of dbconnection.js
 
var games={
 
    getAllGames:function(callback){ 
        return db.query("select * from games",callback);
    }

};
 module.exports=games;