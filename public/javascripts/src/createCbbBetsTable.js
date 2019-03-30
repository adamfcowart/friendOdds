
const fetch = require("node-fetch");

// tableajzing adds rows to the table
function tabelajzing(a){ 
    return [
        "<tr>\n<td>",
        a.map(function (e, i) {  
         return e.join("</td>\n<td>")
        }).join("</td></tr>\n<tr>\n<th>"),
        "</td>\n</tr>\n"
      ].join("")
    }

// call our hosted API - maybe this should be localhost
fetch('http://104.238.124.110:3000/cbbGames')
    .then(function(res) {
        return res.json();
    }).then(function(json) {

        exjson = json

            // loop through each JSON record and add the line to the table
           for(var exKey in exjson) {

            $('#tblData').find("tr:last").after(    
                tabelajzing([[
                    exjson[exKey].homeSpread + " (" + exjson[exKey].homeSpreadOdds + ")",
                    exjson[exKey].homeMoneyLineOdds,
                    exjson[exKey].over + " (" + exjson[exKey].overOdds + ")"
                ]])
            );

            $('#tblData').find("tr:last").after(    
                tabelajzing([[
                    exjson[exKey].awaySpread + " (" + exjson[exKey].awaySpreadOdds + ")",
                    exjson[exKey].awayMoneyLineOdds,
                    exjson[exKey].under + " (" + exjson[exKey].underOdds + ")"
                ]])
            );

            $('#tblData').find("tr:last").after(    
                tabelajzing([[
                    "",
                    exjson[exKey].drawOdds,
                    ""
                ]])
            );

        } 

    });
