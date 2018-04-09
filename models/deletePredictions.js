var db=require('../dbconnection'); //reference of dbconnection.js
 
var deletePredictions={
    
    deletePredictions:function(Prediction,callback){
        return db.query("delete from predictions where username = 'coop';",[Prediction.Username],callback);
        //return db.query("insert into predictions values (id,?,?,NULL);",[Prediction.Username,Prediction.Prediction],callback);
    }
 
};
 module.exports=deletePredictions;