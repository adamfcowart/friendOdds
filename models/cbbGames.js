var db=require('../dbconnection'); //reference of dbconnection.js
 
var games={
 
    getAllCbbGames:function(callback){ 
        return db.query("select * from games where sport = 'CBB'",callback);
    }

};
 module.exports=games;