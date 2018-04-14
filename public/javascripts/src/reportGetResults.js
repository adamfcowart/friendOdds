
const fetch = require("node-fetch");

window.addEventListener("load", afterLoad)

function afterLoad() {
// call our hosted API - maybe this should be localhost
console.log("making api call")
fetch('http://104.238.124.110:3000/reportGetResults')
    .then(function(res) {
        return res.json();
    }).then(function(json) {

        exjson = json

            // loop through each JSON record and add the line to the table
           for(var exKey in exjson) {
                console.log("for loop #" + exjson[exKey].prediction)
                
                var para = document.createElement("P");                       // Create a <p> element
                var t = document.createTextNode("Gameweek = " + exjson[exKey].gameweek + " / User = " + exjson[exKey].username + " / Pick = " + exjson[exKey].prediction + " / Result = " + exjson[exKey].result);       // Create a text node
                para.appendChild(t); 
                document.getElementById("loadDiv").appendChild(para);      

        } 


    });
}

    