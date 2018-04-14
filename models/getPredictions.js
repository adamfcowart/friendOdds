var db=require('../dbconnection'); //reference of dbconnection.js
 
var getPredictions={
 
    getAllPredictions:function(Prediction,callback){ 
        return db.query("select * from predictions where username = ? group by prediction order by count(*) desc",[Prediction],callback);
    }

};
 module.exports=getPredictions;