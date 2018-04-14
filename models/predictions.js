var db=require('../dbconnection'); //reference of dbconnection.js
 
var predictions={
    
    addPredictions:function(Prediction,callback){
        return db.query("start transaction;insert into predictions values (id,?,?,NULL);commit;",[Prediction.Username,Prediction.Prediction],callback);
    }
 
};
 module.exports=predictions;