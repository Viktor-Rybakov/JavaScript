'use strict'

const TIME = document.querySelector('.js-time');

setInterval( setCurrentDate, 1000 );

function setCurrentDate() {
  let currentDate = new Date();

  let dateISO = currentDate.toISOString();

  let year = currentDate.getFullYear();
  let month = getMonthName( currentDate.getMonth() );
  let weekDay = getWeekDayName( currentDate.getDay() );
  let day = currentDate.getDate();
  let hour = currentDate.getHours();
  let hourName = getHourName(hour);
  let minute = currentDate.getMinutes();
  let minuteName = getMinuteName(minute);
  let second = currentDate.getSeconds();
  let secondName = getSecondName(second);

  TIME.textContent = `Сегодня ${day} ${month} ${year} года, ${weekDay}, ${hour} ${hourName} ${minute} ${minuteName} ${second} ${secondName}`;
  TIME.setAttribute(`datetime`, `${dateISO}`);
}

function getMonthName(month) {
  let monthNames = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря'
  ];

  return monthNames[month];
}

function getWeekDayName(weekDay) {
  let weekDayNames = [
    'вооскресенье',
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота'
  ];

  return weekDayNames[weekDay];
}

function getHourName(hour) {
  let hourNames = {
    'часов': [0,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    'час': [1,21],
    'часа': [2,3,4,22,23]
  };

  for (let i = 0; i < hourNames['часов'].length; i++) {
    if (hourNames['часов'][i] === hour) {
      return 'часов';
    }
  }
  for (let i = 0; i < hourNames['час'].length; i++) {
    if (hourNames['час'][i] === hour) {
      return 'час';
    }
  }
  for (let i = 0; i < hourNames['часа'].length; i++) {
    if (hourNames['часа'][i] === hour) {
      return 'часа';
    }
  }
}

function getMinuteName(minute) {
  let minuteNames = {
    'минут': [0,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,25,26,27,28,29,30,35,36,37,38,39,40,45,46,47,48,49,50,55,56,57,58,59],
    'минута': [1,21,31,41,51],
    'минуты': [2,3,4,22,23,24,32,33,34,42,43,44,52,53,54]
  };

  for (let i = 0; i < minuteNames['минут'].length; i++) {
    if (minuteNames['минут'][i] === minute) {
      return 'минут';
    }
  }
  for (let i = 0; i < minuteNames['минута'].length; i++) {
    if (minuteNames['минута'][i] === minute) {
      return 'минута';
    }
  }
  for (let i = 0; i < minuteNames['минуты'].length; i++) {
    if (minuteNames['минуты'][i] === minute) {
      return 'минуты';
    }
  }
}

function getSecondName(second) {
  let secondNames = {
    'секунд': [0,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,25,26,27,28,29,30,35,36,37,38,39,40,45,46,47,48,49,50,55,56,57,58,59],
    'секунда': [1,21,31,41,51],
    'секунды': [2,3,4,22,23,24,32,33,34,42,43,44,52,53,54]
  };

  for (let i = 0; i < secondNames['секунд'].length; i++) {
    if (secondNames['секунд'][i] === second) {
      return 'секунд';
    }
  }
  for (let i = 0; i < secondNames['секунда'].length; i++) {
    if (secondNames['секунда'][i] === second) {
      return 'секунда';
    }
  }
  for (let i = 0; i < secondNames['секунды'].length; i++) {
    if (secondNames['секунды'][i] === second) {
      return 'секунды';
    }
  }
}