var requestify = require('requestify'); 
var toastr = require('toastr')

// handle the login action
document.getElementById("loginButton").addEventListener("click", handleLogin)

function handleLogin() {

  var loginUsername = document.getElementById("loginInputUsername").value
  var loginPassword = document.getElementById("loginInputPassword").value
  
  if (loginUsername == ""){
    toastr.error('You must enter a username to login')
  }
  else if(loginPassword == ""){
    toastr.error('You must enter a password to login')
  }
  else{
      requestify.request('http://localhost:3000/login', {
      method: 'POST',
      body: {
        Username: loginUsername,
        Password: loginPassword
      },
      dataType: 'json'		
      })
      .then(function(response) {
        // get the response body

        var responseJson = JSON.parse(response.body)
        var responseJsonLength = Object.keys(responseJson).length; //you get length json result 4
        
        if(responseJsonLength == 0){
          toastr.error('Login Failed')
        }
        
        if(loginPassword == responseJson[0].userpassword) {
          localStorage.setItem('authenticatedUsername', loginUsername);
          window.location.href = "makePredictions.html";
        }
        else{
          toastr.error('Login Failed')
        }
        console.log("after else")
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
    //console.log(response.getBody())
    
  }


  

