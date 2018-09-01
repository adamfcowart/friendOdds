var db=require('../dbconnection'); //reference of dbconnection.js
 
var reportGetResults={
 
    reportGetAllResults:function(callback){ 
        return db.query("select username as 'username', result as 'result', count(*) as 'count' from results group by username, result order by username, result asc",callback);
    }

};
 module.exports=reportGetResults;