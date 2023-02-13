const validator = {
  isValid:function  (creditCardNumber) {
    const array = creditCardNumber.split("");
    console.log(array);
    const newArray = [];
    
    for (let i = 0; i < array.length; i++) {
      const isEven = i % 2 === 1;
      console.log(isEven);
      if (isEven) {
        const numberPorDos = Number(array[i]) * 2;
        console.log(numberPorDos);
        if (numberPorDos > 9) {
          const restaNueve = numberPorDos - 9;
          console.log(restaNueve);
          newArray.push(restaNueve);
        } else {
          newArray.push(numberPorDos);// si nuberpordos es menor 9 consignar tal cual. en else. 
        }
      }//llave del if inicialde los impares
      else {
        newArray.push(Number(array[i]));
      }
    } console.log (newArray);
    let sumaTotal = 0
    for (let i = 0; i < newArray.length; i++) {
      
      sumaTotal = sumaTotal + newArray[i];
    } console.log(sumaTotal);
    console.log(sumaTotal % 10);
    if (sumaTotal % 10 === 0) {
      return true
    } else {
      return false
    }
    //console.log(isValid);
  }// va una , o ;??
  //maskify
  /*maskify:function (creditCardNumber) {
    
    creditCardNumber= creditCardNumber.toString()
    const = [];
    partir el string en caracteres
    pasar de string a un arreglo con split(part el arreglo)
    como modificar el arreglo?
    como pasar el arreglo para que vuelva a ser un string hacer el reversa volver a unirlo para ue vuelva a ser un caracter
    for (let i = 0; i < creditCardNumber.length; i++) {//o recArr.length
    //const ?
    if (i>=-4){
      recArr = recArr + numero[i]
    }else{
      recArr = recArr +  "#" 
     }
       return 
  } //console.log(creditCardNumber)//*/
  //console.log(creditCardNumber);
};
export default validator;
