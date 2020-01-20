"use strict";

let firstNumber = prompt(`Введите первое число`);

while (isNaN( parseFloat(firstNumber) ) || !isFinite(firstNumber)) {
  alert(`Вы ввели не число или пустую строку, введите число`);

  firstNumber = prompt(`Введите первое число`);
}

let secondNumber = prompt(`Введите второе число`);

while (isNaN( parseFloat(secondNumber) ) || !isFinite(secondNumber)) {
  alert(`Вы ввели не число или пустую строку, введите число`);
  
  secondNumber = prompt(`Введите второе число`);
}

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

if (firstNumber > secondNumber) {
  alert(`Первое число больше второго: ${firstNumber} > ${secondNumber}`);
}

if (firstNumber < secondNumber) {
  alert(`Второе число больше первого: ${secondNumber} > ${firstNumber}`);
} 

if (firstNumber === secondNumber) {
  alert(`Числа равны: ${firstNumber} = ${secondNumber}`);
}