// 1. В html-документе создать кнопку и пустой контейнер. При клике на кнопку в контейнере появляется карточка пользователя (div). Внутри карточки 3 параграфа - имя, фамилия, возраст

const addUserBtn = document.querySelector('.add_user_btn');
const usersContainer = document.querySelector('.users_container');

addUserBtn.addEventListener('click', () => {
  const cardElem = document.createElement('div');
  const firstnameElem = document.createElement('p');
  const lastnameElem = document.createElement('p');
  const ageElem = document.createElement('p');

  firstnameElem.innerText = `Firstname: ${user_info.firstname}`;
  lastnameElem.innerText = `Lastname: ${user_info.lastname}`;
  ageElem.innerText = `Age: ${user_info.age}`;

  cardElem.classList.add('user_card');

  cardElem.append(firstnameElem, lastnameElem, ageElem);
  usersContainer.append(cardElem);
});


const user_info = {
    id: 1,
    firstname: 'Anton',
    lastname: 'Ivanov',
    age: 30
  }
//стилизовать карточку пользователя: добавить border, padding и разместить текст по центру карточкию
// Стилизовать userContainer через css - сделать грид, 4 колонки 

// В параграфы подставить данные из объекта user_info
