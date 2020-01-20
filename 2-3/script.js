"use strict";

let termOfSum = prompt(`Для расчета суммы введите первое слагаемое`);
let currentSum = 0;

while (termOfSum !== null) {

  if ( !isNaN( parseFloat(termOfSum) ) && isFinite(termOfSum) ){
    currentSum += +termOfSum; //Присваивание со сложением
  }

  termOfSum = prompt(`Текущая сумма равна ${currentSum}. Введите следующее слагаемое.`);
}

alert(`Итоговая сумма равна ${currentSum}`)