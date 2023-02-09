const validator = {
  isValid:function  (creditCardNumber) {
    const array = creditCardNumber.split("")
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
      const isEven = i % 2 === 0;
      if (isEven) {
        const numberPorDos = Number(array[i]) * 2;
        if (numberPorDos > 9) {
          const restaNueve = Number(numberPorDos) - 9;
          console.log(restaNueve);
          newArray.push(restaNueve);
        }
        else {
          newArray.push(numberPorDos);// si nuberpordos es menor 9 consignar tal cual. en else. 
        }
      }//llave del if inicialde los impares
      else {
        newArray.push(Number(array[i]));
      }
    }
    let sumaTotal = 0
    for (let i = 0; i < newArray.length; i++) {
      //console.log (newArray[i]);
      sumaTotal = sumaTotal + newArray[i];
    }
    if (sumaTotal % 10 === 0) {
      return true
    } else {
      return false
    }
  },
  //maskify
  /*maskify:function (creditCardNumber) {
    //console.log(creditCardNumber)
    creditCardNumber= creditCardNumber.toString()
    const recArr = ""; //o [];
    for (let i = 0; i < creditCardNumber.length; i++) {//o recArr.length
    //const ?
    if (i>=-4){
      recArr = recArr + numero[i]
    }else{
      recArr = recArr +  "#" 
     }
       return recArr
  } //*/
};
export default validator;
