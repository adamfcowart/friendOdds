var db=require('../dbconnection'); //reference of dbconnection.js
 
var reportGetResults={
 
    reportGetAllResults:function(callback){ 
        return db.query("select gameweek as 'gameweek', username as 'username', prediction as 'prediction',  result as 'result' from results order by gameweek, username, result asc",callback);
    }

};
 module.exports=reportGetResults;