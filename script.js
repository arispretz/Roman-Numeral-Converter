function convertToRoman(num) {
  const roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  
  let romanNum = '';

  for (let key in roman) {
    while (num >= roman[key]) {
      romanNum += key;
      num -= roman[key];
    }
  }
  
  return romanNum;
}

let button = document.querySelector("#convert");
let input = document.querySelector("input");
let resultDiv = document.querySelector("#result");
let clearButton = document.querySelector("#clear");

button.addEventListener('click', function(e) {
  e.preventDefault(); 
  let num = parseInt(input.value.trim(), 10); 
  if (!isNaN(num)) { 
    if (num <= 3000) { 
      let result = convertToRoman(num);
      resultDiv.textContent = result;
    } else {
      resultDiv.textContent = "Error";
    }
  } else {
    resultDiv.textContent = "Error";
  }
});

clearButton.addEventListener('click', function(e) {
  e.preventDefault(); 
  input.value = ""; 
  resultDiv.textContent = ""; 
});
