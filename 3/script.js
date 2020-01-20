"use strict";

let botNumber = Math.random();
let userNumber;

function compareNumbers(botNumber) {
  userNumber = prompt(`Введите число`);

  if (userNumber !== null) {
    while (isNaN( parseFloat(userNumber) ) || !isFinite(userNumber)) {
      alert(`Вы ввели не число или пустую строку, введите число`);
    
      userNumber = prompt(`Введите первое число`);
    }
    
    userNumber = Number(userNumber);

    if ( userNumber > botNumber ) {
      alert(`Вы ввели число ` + userNumber + `, и оно больше, чем задумал робот, попробуйте ещё раз`);

      compareNumbers(botNumber);
    }

    if ( (userNumber < botNumber) ) {
      alert(`Вы ввели число ` + userNumber + `, и оно меньше, чем задумал робот, попробуйте ещё раз`);

      compareNumbers(botNumber);
    }

    if ( userNumber === botNumber ) {
      alert(`Числа равны! Поздравляем!`)
    }
  }

  if ( userNumber === null) {
    alert(`Компьютер победил Вас! До встречи!`)
  }
}

compareNumbers(botNumber);