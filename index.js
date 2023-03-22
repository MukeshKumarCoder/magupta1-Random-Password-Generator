const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lovercase = "abcdefghijklmnopqrstuvwxyz"
const numberset = "0123456789"
const symbleset = "@#$%&"

const passBox = document.getElementById("pass-box");
const totalchar = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");

const getPassword = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)]
}

const generatePassword = (password = "") => {
      if(upperInput.checked){
        password += getPassword(uppercase);
      }
      if(lowerInput.checked){
        password += getPassword(lovercase);
      }
      if(numberInput.checked){
        password += getPassword(numberset);
      }
      if(symbolInput.checked){
        password += getPassword(symbleset);
      }
      if(password.length < totalchar.value){
        return generatePassword(password)
      }
      passBox.innerText = truncateString(password, totalchar.value);
}
        generatePassword(); 

document.getElementById("btn").addEventListener("click" , function() {
    generatePassword();
});

function truncateString(str , num){
    if(str.length > num){
        let subStr = str.substring(0 , num);
        return subStr;
    }else{
        return str;
    }
}



