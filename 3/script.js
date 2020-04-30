'use strict';

const BOT_NUMBER = getRandomInt(100);
compareNumbers(BOT_NUMBER);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function isNumber(number) {
  return !isNaN( parseFloat(number) ) && isFinite(number);
}

function getUserNumber() {
  let userNumber = prompt(`Введите число`);

  if (userNumber === null) {
    return null;
  } else {
    while ( !isNumber(userNumber) ) {
      alert(`Вы ввели не число или пустую строку, введите число`);
      userNumber = prompt(`Введите число`);
    }
    return Number(userNumber);
  }
}

function compareNumbers(botNumber) {
  let userNumber = getUserNumber();

  if (userNumber === null) {
    alert(`Компьютер победил Вас! До встречи!`);
    return;
  }

  if (userNumber > botNumber) {
    alert(`Вы ввели число ` + userNumber + `, и оно больше, чем задумал робот, попробуйте ещё раз`);
    compareNumbers(botNumber);
  }

  if (userNumber < botNumber) {
    alert(`Вы ввели число ` + userNumber + `, и оно меньше, чем задумал робот, попробуйте ещё раз`);
    compareNumbers(botNumber);
  }

  if (userNumber === botNumber) {
    alert(`Числа равны! Поздравляем!`);
    return;
  }
}