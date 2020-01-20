"use strict";

let firstYear;
let lastYear;

function checkYear(year) {
  while (isNaN( parseFloat(year) ) || !isFinite(year) || year < 1582 || year % 1 != 0) {
    if ( isNaN( parseFloat(year) ) || !isFinite(year) ) {
      alert(`Вы ввели не число или пустую строку, введите число`);
    } else if (year % 1 != 0) {
      alert(`Введите целое число!`);
    } else if (year < 1582) {
      alert(`Григорианский календарь ввели только в 1582`);
    }

    year = prompt(`Введите год`);
  }

  return +year;
}

function isLeapYear(year) {
  return ( ( year % 4 == 0 && year % 100 != 0 ) || year % 400 == 0 );
}

function printLeapYear(firstYear, lastYear) {
  let currentYear = firstYear;
  console.log(`Високосные года с ${firstYear} по ${lastYear}:`);
  while (currentYear <= lastYear) {
    if ( isLeapYear(currentYear) ) {
      console.log(currentYear);
    }
    currentYear++;
  }
}

firstYear = prompt(`Введите первый год`);
firstYear = checkYear(firstYear);

lastYear = prompt(`Введите второй год`);
lastYear = checkYear(lastYear);


if (firstYear < lastYear) {
  printLeapYear(firstYear, lastYear);
} else if (firstYear > lastYear) {
  printLeapYear(lastYear, firstYear);
} else {
  if ( isLeapYear(firstYear) ) {
    console.log(`Вы ввели только один год - ${firstYear}, и он високосный`);
  } else {
    console.log(`Вы ввели только один год - ${firstYear}, и он не високосный`);
  }
}