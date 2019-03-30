var clickedCells = new Array;
var requestify = require('requestify'); 
var toastr = require('toastr')

console.log("before document ready")

$(document).ready(function() {
  
  console.log("before calling getPredictions")
  var fetchUrl = "http://104.238.124.110:3000/getPredictions?username=" + localStorage.getItem("authenticatedUsername")
  console.log("after calling getPredictions")

  fetch(fetchUrl)
  .then(function(res) {
      return res.json();
  }).then(function(json) {
    
    predictionsJson = json
    jLen = predictionsJson.length
    
  
    for (i = 0; i < jLen; i++) {
      if(predictionsJson[i].prediction != ""){
      clickedCells.push(predictionsJson[i].prediction)  
      
      highlightCell = jQuery("td:contains(" + predictionsJson[i].prediction + ")");
      highlightCell.addClass("highlight");
      }
    
    }
  
  });  

  $("#tblData").mouseover(function(e) {
    $(this).css("cursor", "pointer");
  });
  
  $("#tblData").click(function(e) {
    var clickedCell = $(e.target).closest("td");  
  
    fLen = clickedCells.length;
    
    //determine if clicked cell is currently selected
    for (i = 0; i < fLen; i++) {
      var found = 0
      
      if (clickedCells[i] == clickedCell.text()) {
        found = 1
        break;
      }

      else{        
        found = 0
      }   
    }

    //if clicked cell is currently selected, unhiglight and remove from array
    //if clicked cell is not currently select, highlight and add to array
    if (found == 1) { 
      
      var popindex = clickedCells.indexOf(clickedCell.text())
      clickedCells.splice(popindex, 1)
      clickedCell.removeClass("highlight");

      found = 0

    }

    else {

      clickedCells.push(clickedCell.text())
      clickedCell.addClass("highlight");
      
    }

  });
})

// handle the submit action
document.getElementById("submitButton").addEventListener("click", handleTheClick)

function handleTheClick() {
  
  var inputUsername = localStorage.getItem("authenticatedUsername")
  numSelected = clickedCells.length;

  if (inputUsername == ""){
    toastr.error('You must enter a username to save')
  }
  else if(clickedCells.length == 0){
    toastr.error('You must make a selection to save')
  }
  else{

      requestify.request('http://104.238.124.110:3000/deletePredictions', {
      method: 'POST',
      body: {
        Username: localStorage.getItem("authenticatedUsername"),
        Prediction: "irrelevant"
      },
      dataType: 'json'		
      })
      .then(function(response) {
        // get the response body
        response.getBody();
      
        // get the response headers
        response.getHeaders();
      
        // get specific response header
        response.getHeader('Accept');
      
        // get the code
        response.getCode();
        
        // get the raw response body
        response.body;

        
      })

    
    for (i = 0; i < numSelected; i++) {
    

      requestify.request('http://104.238.124.110:3000/predictions', {
      method: 'POST',
      body: {
        Username: inputUsername,
        Prediction: clickedCells[i]
      },
      dataType: 'json'		
      })
      .then(function(response) {
        // get the response body
        response.getBody();
        console.log("success" + [i])
      
        // get the response headers
        response.getHeaders();
      
        // get specific response header
        response.getHeader('Accept');
      
        // get the code
        response.getCode();
        
        // get the raw response body
        response.body;
      })
  

    }
    
    
    toastr.success('Save successful')
  }
}
  

