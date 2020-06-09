var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '?', ':', ',', '{', '}', '/', '`', '~', '-', '_', '=', '+', '.', "'"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var wantSpecialCharacters = confirm('Click OK to confirm if you want special characters in your password.');
  var wantLowerCase = confirm("Click 'OK' to confirm if you want lowercase characters in your password.");
  var wantUpperCase = confirm("Click 'OK' to confirm if you want uppercase characters in your password.");
  var wantNumbers = confirm("Click 'OK' to confirm if you want numeric characters in your password.");
  
  // if statement
  // lowerCase.concat(upperCase, symbols, numbers);
  var password = "";
  var workingArray = "";
  

  if (wantSpecialCharacters !== true && wantNumbers !== true && wantLowerCase !== true && wantUpperCase !== true) {
    alert("You must select to include lease one in your password.");
  }
  else {
  var numOfCharacters = prompt("How many character would you like in your password? Please choose between 8-128 characters.");
  }
    
  
    if (numOfCharacters > 7 && numOfCharacters < 129) {

      function combinedArr() {
        if (wantSpecialCharacters) {
          wantSpecialCharacters = parseInt(wantSpecialCharacters);
          workingArray = workingArray + specialCharacters.concat(workingArray);
          
        }
        if (wantLowerCase) {
          workingArray = lowerCase.concat(workingArray);
          
        }
        if (wantUpperCase) {
          workingArray = upperCase.concat(workingArray);
        }
        if (wantNumbers) {
          numbers = numbers.toString();
          workingArray = numbers.concat(workingArray);
          
        }
      return workingArray;
      }
      var newArr = combinedArr(); 

      // (workingArray[Math.floor(Math.random() * workingArray.length)]);
      for (var i =0; i < numOfCharacters; i++) {
        password = password + newArr[Math.floor(Math.random() * newArr.length)];
        console.log(password);
        console.log(numOfCharacters)
       
      }

    }
    else {
      alert("Must contain between 8-128 characters.");
    }
    return password;
  
}

