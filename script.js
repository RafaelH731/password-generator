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


if (isLower == true){possiblePassword = possiblePassword.concat(userPassword.lowerCase)}


if (isUpper == true){possiblePassword = possiblePassword.concat(userPassword.upperCase)}


if (isSpecialCharacters == true){possiblePassword = possiblePassword.concat(userPassword.specialCharacters)}


if (isNumbers == true){possiblePassword = possiblePassword.concat(userPassword.numbers)}

for (var i = 0; i < userLength; i++ ) {
  console.log(possiblePassword[Math.random() * possiblePassword.length]);
}

//change to finalPassword
let finalPassword = possiblePassword.join ("");
return 
}
  //2.Identify and collect the buckets the user has chosen
  //3. Create a guaranteed collection
  //4. Create a password variable, and array
  //5. Randomly draw a characters
  //6. Put the character on the password variable(?)
  //7. Repeat 5 and 6 as many as specified (floor loop)
  //8. Loop throught the guaranteed elements, replace elements in the password array
  //9. Join characters in the password array into a string
  //10. Return the password string 


// while (userPasswordLength < 5 || userPasswordLength >50){
  //  userPasswordLength = window.prompt("Password length must be between 5 and 50 characters");
 // }
