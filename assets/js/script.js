// Assignment Code
var generateBtn = document.querySelector("#generate");
var lcl = ('abcdefghijklmnopqrstuvwxyz');
var ucl = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
var num = ('0123456789');
var schar = ('!@#$%^&*_-+=');


function generatePassword() {
  var bigPw = lcl;
  var pwLength = window.prompt("How long would you like your password to be? (8 through 128 chars).")
    if (pwLength >= 8 && pwLength <= 128){
      var wantUpper = confirm("Hit OK if you would you like your password to include upper case characters.");
        if (wantUpper === true) {
          bigPw = bigPw + ucl;
        }
        var wantNum = confirm("Hit OK if you would you like your password to include numbers.");
        if (wantNum === true) {
          bigPw = bigPw + num;
        }
        var wantSpec = confirm("Hit OK if you would you like your password to include special characters.");
        if (wantUpper === true) {
          bigPw = bigPw + schar;
        }
    } else {
    window.alert("Invalid entry. Please press OK and try again.");
    generatePassword();
    }
  console.log("Password Length: " + pwLength);
  console.log("Uppercase: " + wantUpper);
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
  return genpassword;
}
  
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

