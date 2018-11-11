var db=require('../dbconnection'); //reference of dbconnection.js
 
var reportGetPredictions={
 
    reportGetAllPredictions:function(callback){ 
        return db.query("select username, prediction from predictions order by prediction",callback);
    }

};
 module.exports=reportGetPredictions;