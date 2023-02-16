const validator = {
  isValid: function (creditCardNumber) {
    const array = creditCardNumber.split("").reverse();
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
      const isEven = i % 2 === 1;
      if (isEven) {
        const numberPorDos = Number(array[i]) * 2;
        if (numberPorDos > 9) {
          const restaNueve = numberPorDos - 9;
          newArray.push(restaNueve);
        } else {
          newArray.push(numberPorDos);
        }
      }
      else {
        newArray.push(Number(array[i]));
      }
    }
    let sumaTotal = 0
    for (let i = 0; i < newArray.length; i++) {

      sumaTotal = sumaTotal + newArray[i];
    }
    
    if (sumaTotal % 10 === 0) {
      return true
    } else {
      return false
    }
  },
  maskify: function (creditCardNumber) {
    const masky = creditCardNumber.split("");
    const rec = [];
    for (let i = 0; i < masky.length; i++) {
      if (i < masky.length - 4) {
        rec.push("#");
      } else {
        rec.push(masky[i]);
      }
    } 
    return rec.join('');
  }
}
export default validator;
