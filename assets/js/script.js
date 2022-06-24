// Assignment Code
var generateBtn = document.querySelector("#generate");
var lcl = ('abcdefghijklmnopqrstuvwxyz');
var ucl = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
var num = ('0123456789');
var schar = ('!@#$%^&*_-+=');
var finalpass;


function generatePassword() {
  var bigPw = lcl;  //set smallest possible pool of password chars to lower case letters
  var pwLength = window.prompt("How long would you like your password to be? (8 through 128 chars).")
    if (pwLength >= 8 && pwLength <= 128){  //chk if usr input is valid
      var wantUppr = confirm("Hit OK if you would you like your password to include upper case characters.");
        if (wantUppr === true) { // if usr selects wantUppr add upp case letters to pool
          bigPw = bigPw + ucl;
        }
        var wantNum = confirm("Hit OK if you would you like your password to include numbers.");
        if (wantNum === true) { // if usr selects wantNum add nums to pool
          bigPw = bigPw + num;
        }
        var wantSpec = confirm("Hit OK if you would you like your password to include special characters.");
        if (wantSpec === true) { // if usr selects schar add spec chars to pool
          bigPw = bigPw + schar;
        }
    } else {  // throws alert if intial input is invalid and recallls function
    window.alert("Invalid entry. Please press OK and try again.");
    generatePassword();
    return;
    }
  console.log("Password Length: " + pwLength);
  console.log("Uppercase: " + wantUppr);
  console.log("Numbers: " + wantNum);
  console.log("Special Characters: " + wantSpec);  
  console.log(bigPw);
  var passwordoptions = bigPw.split('');
  console.log(passwordoptions);
  genpassword='';
  for (i=0; i <pwLength; i++) {
    var number = Math.floor((Math.random() * bigPw.length));
    var genpassword = genpassword + passwordoptions[number];
  }

  console.log(genpassword);
  finalpass = genpassword;
  writePassword();
}
  
function writePassword() {
  var passwordText = document.querySelector("#password");

  passwordText.value = finalpass;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

