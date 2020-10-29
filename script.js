// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

// generated pwd
function generatePassword() {
  var pwdInfor = [];

  var mixedPwd = [];


  //List of array to be selected from by user
  var numbers = ["0","1","2","3","4","5","6","7","8","9"];
  var lowerCase = ["a","b","c","d","e","f"];
  var upperCase = ["A","B","C","D","E","F"];
  var specialChar = ["!","#","&","*","$","@",];

 
  // Password length and confirming password is not less than 8 or greater than 128
  
  var pwdLength = 
    prompt("How many characters would you like") 

  var numLength = parseInt(pwdLength)
  
  if(pwdLength < 8) {
    alert("Password must be at least 8 characters");
    return;
  }
  if(pwdLength > 128){
    alert("Password must not exceed 128 characters");
    return;
  }

  if(!numLength){
    alert("Password must be numerical")
    return;
  }

   // Confirmation list that confirmed what user is using 
   var hasNumbers = confirm("Click okay if you want numbers");
   var hasLowerCase = confirm("Click okay if you want lowercase");
   var hasUpperCase = confirm("Click okay if you want Uppercase");
   var hasSpecialChar = confirm("Click okay if you want specialCharacter");

   // If statement that pass character based on user response
   if (hasNumbers){
     for (var i = 0; i < numbers.length; i++){
      pwdInfor.push(numbers[i]);
     }

    }

    if (hasLowerCase){
      for (var i = 0; i < lowerCase.length; i++){
        pwdInfor.push(lowerCase[i]);
      }

    }

    if (hasUpperCase){
      for (var i = 0; i < upperCase.length; i++){
        pwdInfor.push(upperCase[i]);
      }

    }

    if (hasSpecialChar){
      for (var i = 0; i < specialChar.length; i++){
        pwdInfor.push(specialChar[i]);
      }

    }

    for (i = 0; i < numLength; i++){
      var index = Math.floor(Math.random() * pwdInfor.length);

      mixedPwd = mixedPwd + pwdInfor[index];

    }
    

    var passwordText = document.querySelector("#password");

    passwordText.value = mixedPwd;



}