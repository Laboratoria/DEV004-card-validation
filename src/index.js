import validator from './validator.js';
const buttonValidate = document.getElementById("validate");
const div = document.getElementById("result");
buttonValidate.addEventListener("click", function (e) {
  e.preventDefault()
  const cardNumber = document.getElementById("cardnumber").value;
  //document.getElementById("cardNumber").value = "";
  if (cardNumber.length ===0 || cardNumber.length>=17 || /^\s+$/.test(cardNumber) || /[a-zA-Z]/i.test(cardNumber)){//|| ("[a-zA-Z]","g").test(cardNumber
    alert("formato incorrecto");
  }else{
    const valid = validator.isValid(cardNumber)
    const enmascarar = validator.maskify(cardNumber)
    if (valid === true) {
      div.innerHTML = "tarjeta valida";
      document.getElementById("cardnumber").value = enmascarar;
    } else {
      div.innerHTML = "tarjeta invalida";
    }
  }
  document.getElementById("cardNumber").value = ""
})
