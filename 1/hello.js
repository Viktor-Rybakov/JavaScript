var myName = prompt('Как вас зовут?');
var mySurname = prompt('Ваша фамилия');
var myBirthYear = prompt('Введите ваш год рождения');
var currentYear = 2019;
var age = currentYear - myBirthYear;

if (age < 20) {
  alert('Привет, ' + mySurname + ' ' + myName + '!');
} else if (age >= 20 && age < 40) {
  alert('Добрый день, ' + mySurname + ' ' + myName + '!');
} else {
  alert('Здравствуйте, ' + mySurname + ' ' + myName);
}
