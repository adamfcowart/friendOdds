var db=require('../dbconnection'); //reference of dbconnection.js
 
var login={
    
    login:function(login,callback){
        return db.query("SELECT userpassword from users where username = ?;",[login.Username],callback);
    }
 
};
 module.exports=login;