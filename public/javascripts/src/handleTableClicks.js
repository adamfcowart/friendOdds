var clickedCells = new Array;
var requestify = require('requestify'); 
var toastr = require('toastr')

$(document).ready(function() {

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
  
  var inputUsername = document.getElementById("inputUsername").value
  numSelected = clickedCells.length;
  
  if (inputUsername == ""){
    toastr.error('You must enter a username to save')
  }
  else if(clickedCells.length == 0){
    toastr.error('You must make a selection to save')
  }
  else{

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
// handle the delete previous selections action
document.getElementById("deleteButton").addEventListener("click", handleTheDeleteClick)

function handleTheDeleteClick() {
  
  var inputUsername = document.getElementById("inputUsername").value
  
  if (inputUsername == ""){
    toastr.error('You must enter a username to delete')
  }
  
  else{
      console.log("calling delete")
      requestify.request('http://104.238.124.110:3000/deletePredictions', {
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
      
        // get the response headers
        response.getHeaders();
      
        // get specific response header
        response.getHeader('Accept');
      
        // get the code
        response.getCode();
        
        // get the raw response body
        response.body;
      })
  
    
    toastr.success('Delete successful')
  }
}
  

