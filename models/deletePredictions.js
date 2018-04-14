var db=require('../dbconnection'); //reference of dbconnection.js
 
var deletePredictions={
    
    deletePredictions:function(Prediction,callback){
        return db.query("start transaction; delete from predictions where username = ?;commit;",[Prediction.Username],callback);
        //return db.query("insert into predictions values (id,?,?,NULL);",[Prediction.Username,Prediction.Prediction],callback);
    }
 
};
 module.exports=deletePredictions;