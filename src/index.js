import validator from './validator.js';
const buttonValidate = document.getElementById("validate");
const div = document.getElementById("result");
buttonValidate.addEventListener("click", function () {
  const cardNumber = document.getElementById("cardnumber").value;
  if (cardNumber === null || cardNumber.length < 16 || /^\s+$/.test(cardNumber)) {
    alert("formato incorrecto");
  } else {
    const valid = validator.isValid(cardNumber)
    if (valid === true) {
      div.innerHTML = "tarjeta valida";
    } else {
      div.innerHTML = "tarjeta invalida";
    }
    document.getElementById("cardnumber").value = "";
  }
  //const  = validator.maskify(cardNumber)
})
console.log(validator);//deberia ser validator.isValid?
 