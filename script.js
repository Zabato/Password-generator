// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generate() {
  var questions = [
    {
        prompt: "Do you want Uppercase letters?",
        valstir: "ABCDEFGHIJKLMNOPQRSTUVWZYZ"
    },
    {
        prompt: "Do you want Lowercase letters?",
        valstir: "abcdefghijklmnopqrstuvwxyz",
    },
    {
        prompt: "Do you want Numbers?",
        valstir: "1234567890",
    },
    {
        prompt: "Do you wnat special characters?",
        valstir: "!@#$%^&*()_+",
    },
    ]
   
 var values = "";
 var validResponse = false;
  for(var i=0; i < questions.length; i++){
      var response = window.confirm(questions[i].prompt); 
      if (response){
          values = values + questions[i].valstir; 
          validResponse = true;
      }
  }
  if (!validResponse){
    alert("please choose at least 1");

    return;
  }
  var length = window.prompt("how many characters?");

  var password = "";
  var passwordText = document.querySelector("#password");
 
  if (length < 8 || length > 128){
    alert("invalid. try again");
    return; 
}
  for(var i = 0; i < length; i++){
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
}

  passwordText.value = password;

}

// Add event listener to generate button
document.getElementById("generate").addEventListener("click", generate);
