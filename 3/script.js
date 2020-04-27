'use strict';

let botNumber = getRandomNumber();
compareNumbers(botNumber);

function getRandomNumber() {
  return Math.random();
}

function checkNumber(number) {
  return !isNaN( parseFloat(number) ) && isFinite(number);
}

function getUserNumber() {
  let userNumber = prompt(`Введите число`);

  if (userNumber === null) {
    return null;
  } else {
    while ( !checkNumber(userNumber) ) {
      alert(`Вы ввели не число или пустую строку, введите число`);
      userNumber = prompt(`Введите число`);
    }
    return Number(userNumber);
  }
}

function compareNumbers(botNumber) {
  let userNumber = getUserNumber();

  switch (userNumber) {
    case null:
      alert(`Компьютер победил Вас! До встречи!`)
      break
  
    default:
      if ( userNumber > botNumber ) {
        alert(`Вы ввели число ` + userNumber + `, и оно больше, чем задумал робот, попробуйте ещё раз`);
        compareNumbers(botNumber);
      }
    
      if ( (userNumber < botNumber) ) {
        alert(`Вы ввели число ` + userNumber + `, и оно меньше, чем задумал робот, попробуйте ещё раз`);
        compareNumbers(botNumber);
      }
    
      if ( userNumber === botNumber ) {
        alert(`Числа равны! Поздравляем, Вы угадали!`)
      }
  }
}