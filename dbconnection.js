var mysql=require('mysql');
 var connection=mysql.createConnection({
 
 host:'104.238.124.110',
 user:'adamcowa_acowart',
 password:'Cffa109@',
 database:'adamcowa_friendOdds',
 multipleStatements: true
 
});
 module.exports=connection;