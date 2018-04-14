
const fetch = require("node-fetch");

window.addEventListener("load", afterLoad)

function afterLoad() {
// call our hosted API - maybe this should be localhost
console.log("making api call")
fetch('http://localhost:3000/reportGetPredictions')
    .then(function(res) {
        return res.json();
    }).then(function(json) {

        exjson = json

            // loop through each JSON record and add the line to the table
           for(var exKey in exjson) {
                console.log("for loop #" + exjson[exKey].prediction)
                
                var para = document.createElement("P");                       // Create a <p> element
                var t = document.createTextNode("Number of Selections = " + exjson[exKey].number + " / Pick = " + exjson[exKey].prediction);       // Create a text node
                para.appendChild(t); 
                document.getElementById("loadDiv").appendChild(para);      

        } 


    });
}

    