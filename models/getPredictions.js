var db=require('../dbconnection'); //reference of dbconnection.js
 
var getPredictions={
 
    getAllPredictions:function(callback){ 
        return db.query("select id, count(*) as 'number',  prediction from predictions group by prediction order by count(*) desc",callback);
    }

};
 module.exports=getPredictions;