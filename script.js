let uppercase = document.querySelector("#uppercase");
let lowercase = document.querySelector("#lowercase");
let number = document.querySelector("#number");
let symbol = document.querySelector("#symbols");
let passButton = document.querySelector("#generate");
let passLength = document.querySelector("#length");
let copyButton = document.querySelector("#copy")
let passInput  = document.querySelector("#password");
let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
let numberChars = "0123456789";
let symbolChars = "!@#$%^&*()_+-=[]{}|;:',.<>?";

passButton.addEventListener("click", function () {
    let allChars = "";
    if(
        !uppercase.checked &&
        !lowercase.checked &&
        !number.checked &&
        !symbol.checked
    ){
        alert("Please select atleast one checkbox");
        return;
    }
    if(uppercase.checked){
        allChars += uppercaseChars;
    }
    if(lowercase.checked){
        allChars += lowercaseChars;
        
    }
    if(number.checked){
        allChars += numberChars;
    }
    if(symbol.checked){
        allChars += symbolChars; 
    }
    console.log(allChars);
    let length = passLength.value;
    let password = "";
    let character = ""
    for(let i=0;i<length;i++){
        let randomIndex = Math.floor(Math.random() * allChars.length);
        character = allChars[randomIndex];
        password += character;
    }
    passInput.value = password;
});
copyButton.addEventListener("click", function(){
    let text = passInput.value;
    navigator.clipboard.writeText(text);
    alert("Password Copied");
});