var db=require('../dbconnection'); //reference of dbconnection.js
 
var predictions={
    
    addPredictions:function(Prediction,callback){
        return db.query("insert into predictions values (id,?,?,NULL);",[Prediction.Username,Prediction.Prediction],callback);
    }
 
};
 module.exports=predictions;