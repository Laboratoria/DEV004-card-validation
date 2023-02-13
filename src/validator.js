const validator = {
  isValid: function (creditCardNumber) {
    const array = creditCardNumber.split("").reverse();
    console.log(array);
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
      const isEven = i % 2 === 1;
      console.log(isEven);
      if (isEven) {
        const numberPorDos = Number(array[i]) * 2;
        //console.log(numberPorDos);
        if (numberPorDos > 9) {
          const restaNueve = numberPorDos - 9;
          console.log(restaNueve);
          newArray.push(restaNueve);
        } else {
          newArray.push(numberPorDos);
        }
      }
      else {
        newArray.push(Number(array[i]));
      }
    } console.log(newArray);
    let sumaTotal = 0
    for (let i = 0; i < newArray.length; i++) {

      sumaTotal = sumaTotal + newArray[i];
    } console.log(sumaTotal);
    //console.log(sumaTotal % 10);
    if (sumaTotal % 10 === 0) {
      return true
    } else {
      console.log(sumaTotal);
      return false
    }
  },
  //maskify
  maskify: function (creditCardNumber) {
    //creditCardNumber= creditCardNumber.toString()  partir el string en caracteres
    const masky = creditCardNumber.split("");
    console.log("este es mi nuevo array " + masky);
    const rec = [];
    console.log(rec);
    for (let i = 0; i < masky.length; i++) {//o recArr.length
      if (i < masky.length - 4) {
        rec.push("#");
      } else {
        rec.push(masky[i]);
      }
    } console.log(rec.join(''))
    return rec.join('');
  }
}
export default validator;
