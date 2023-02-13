import validator from './validator.js';
const buttonValidate = document.getElementById("validate");
const div = document.getElementById("result");
buttonValidate.addEventListener("click", function () {
  const cardNumber = document.getElementById("cardnumber").value;
  if (cardNumber.length ===0 || cardNumber.length >= 17 || /^\s+$/ .test(cardNumber)) {//("[a-zA-Z]","g")
    alert("formato incorrecto");
  }else{
    const valid = validator.isValid(cardNumber)
    if (valid === true) {
      div.innerHTML = "tarjeta valida";
    } else {
      div.innerHTML = "tarjeta invalida";
    }
  }
  //const  = validator.maskify(cardNumber)
})
//console.log(validator);//deberia ser validator.isValid?
 