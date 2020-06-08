

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var wantSpecialCharacters = confirm('Click OK to confirm if you want special characters in your password.');
var wantNumbers = confirm("Click 'OK' to confirm if you want numeric characters in your password.");
var wantLowerCase = confirm("Click 'OK' to confirm if you want lowercase characters in your password.");
var wantUpperCase = confirm("Click 'OK' to confirm if you want uppercase characters in your password.");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '?', ':', ',', '{', '}', '/', '`', '~', '-', '_', '=', '+', '.', "'"];

var randomLower = lowerCase.charAt(Math.floor(Math.random() * 26));
var randomUpper = upperCase.charAt(Math.floor(Math.random() * 26));
var randomSymbol = symbols[(Math.floor(Math.random() * symbols.length))];
var randomNumber = Math.floor(Math.random() * 10);

var password = "";