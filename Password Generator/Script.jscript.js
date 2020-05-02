//generate password
function generate(){
    //set password length 
    let complexity = document.getElementById("slider").value;

    let values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
    
    let password = "";

    //create for loop to choose password 
    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //add password to display
    document.getElementById("display").value = password;

    //add password to previously generated passwod section 
    document.getElementById("lastNums").innerHTML += password + "<br />";
}

//set default length display
document.getElementById("length").innerHTML = "Length: 25";

//function to set length based on slider postion
document.getElementById("slider").oninput = function(){

    if(document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value; 
    }
    else{
        document.getElementById("length").innerHTML = "Length: 1";
    }
}
//function to copy password to clipboard
function copyPassword(){
    document.getElementById("display").select();
    
    document.execCommand("Copy");

    alert("Password copied to Clipboard!");
}