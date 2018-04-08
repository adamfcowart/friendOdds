var mysql=require('mysql');
 var connection=mysql.createPool({
 
host:'23.229.221.100',
 user:'acowart',
 password:'Cffa109@',
 database:'friendodds'
 
});
 module.exports=connection;