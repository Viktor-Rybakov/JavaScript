'use strict'

const LOGIN_INPUT = document.querySelector('.js-login');
const PASSWORD_INPUT = document.querySelector('.js-password');
const BUTTON = document.querySelector('.js-button');

let users = [
  {
    'name': 'Иван',
    'login': 'ivan86',
    'password': 'qwerty',
  },
  {
    'name': 'Василий',
    'login': 'uugn',
    'password': '1a2b3c',
  },
  {
    'name': 'Кирилл',
    'login': 'ukrotitel-kisok76',
    'password': '666kir666',
  },
];

BUTTON.addEventListener('click', function() {
  let login = getLogin();

  if ( !checkLogin(users, login) ) {
    alert(`Такой пользователь не найден, введите данные заново`);

    clearLogin();
    clearPassword();
  } else if ( checkPassword( users, login, getPassword() ) ) {
    let name = getName(users, login);

    alert(`Добрый день, ${name}!`);

    clearLogin();
    clearPassword();
  } else {
    alert(`Вы ввели неверный пароль, попробуйте ещё раз`);
    
    clearPassword();
  }
});

function getLogin() {
  let login = LOGIN_INPUT.value;
  return login;
}

function getPassword() {
  let password = PASSWORD_INPUT.value;
  return password;
}

function clearLogin() {
  LOGIN_INPUT.value = '';
}

function clearPassword() {
  PASSWORD_INPUT.value = '';
}

function checkLogin(users, login) {
  for (let i = 0; i < users.length; i++) {
    if (users[i]['login'] === login) {
      return true;
    }
  }
  return false;
}

function checkPassword(users, login, password) {
  for (let i = 0; i < users.length; i++) {
    if (  users[i]['login'] === login &&
          users[i]['password'] === password ) {
      return true;
    }
  }
  return false;
}

function getName(users, login) {
  for (let i = 0; i < users.length; i++) {
    if ( users[i]['login'] === login ) {
      return users[i]['name'];
    }
  }
  return null;
}


