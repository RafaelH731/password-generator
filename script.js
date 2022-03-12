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

var upperCaseBool = true;
var lowerCaseBool = true;
var specialCharactersbool = true;
var numbersBool = true;

//1. Create buckets for each character type (Upper,Lower and Special Character) (In Arrays)

var userPassword = {
    passwordLength: "",
    lowerCase : ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    upperCase : ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    specialCharacters : ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","^","_","`","{","|","}","~"],
    numbers : [0,1,2,3,4,5,6,7,8,9],
}
function generatePassword(){
  //1. Get user preferences

var userLength = prompt("Password Length (Between 5 and 25 characters)")
var isLower = confirm("Contains Lowercase letters?")
var isUpper = confirm("Contains Uppercase Letters?")
var isSpecialCharacters = confirm("Contains Special Characters?")
var isNumbers = confirm("Contains Numbers?")
var possiblePassword = []

console.log(userPassword.lowerCase.length)

//Complete for loops to push onto the empty possiblePassword Array

if (isLower == true){
  for (var i = 0; i < userPassword.lowerCase.length; i++){
    possiblePassword.push(userPassword.lowerCase[i])
  }

}
if (isUpper === true){
  for (var i = 0; i < userPassword.upperCase.length; i++){
    possiblePassword.push(userPassword.upperCase[i])
  }

}

if (isSpecialCharacters == true){
  for (var i = 0; i < userPassword.specialCharacters.length; i++){
    possiblePassword.push(userPassword.specialCharacters[i])
  }

}

if (isNumbers == true){
  for (var i = 0; i < userPassword.numbers.length; i++){
    possiblePassword.push(userPassword.numbers[i])
  }

}
console.log(possiblePassword)

var passwordResult = []


for (var i = 0; i < userLength; i++ ) {
  console.log();
  passwordResult.push(possiblePassword[Math.floor(Math.random() * possiblePassword.length)])
}

//return the result 
return passwordResult.join("")
}
  