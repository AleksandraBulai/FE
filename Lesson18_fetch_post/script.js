// 1. Отправить fetch-запрос по ссылке https://api.escuelajs.co/api/v1/users и вывести в консоль полученный массив с объектами

fetch('https://api.escuelajs.co/api/v1/users')
.then(res => res.json())
.then(json => renderUsers (json));

const addNewUser = new_user => {
    fetch('https://api.escuelajs.co/api/v1/users', {
      method: 'POST',
      body: JSON.stringify(new_user),
      headers: {'Content-Type': 'application/json;charset=utf-8'}
    })
      .then(res => res.json())
      .then(json => console.log(json))
  }

// 2. Из полученных данных отрисовать карточки пользователей (avatar, name, кликабельный email, role) и добавить эти карточки в div.users_container

const usersContainer = document.querySelector('.users_container');
const addUserForm = document.querySelector('.add_user_form');

const renderUsers = arr => {
    arr.forEach(el => {
        const cardElem = document.createElement('div');
        const nameElem = document.createElement('p');
        const avatarElem = document.createElement('img');
        const emailElem = document.createElement('a');
        const roleElem = document.createElement('p');


        nameElem.innerText = `Name: ${el.name}`;
        roleElem.innerText = `Role: ${el.role}`;
        emailElem.innerText = el.email;


        avatarElem.src = el.avatar;
        avatarElem.alt = el.name;

        emailElem.href = `mailto: ${el.email}`;

        cardElem.append(avatarElem,nameElem,emailElem,roleElem);
        usersContainer.append(cardElem);
        
    });
}

addUserForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const { name, email, password, role, avatar } =
    event.target;

    const newUser = {
        email: email.value,
        name: name.value,
        password: password.value,
        role: role.value,
        avatar: avatar.value
      }
    
      addNewUser(newUser);
    
      event.target.reset();
    });

// 3. Стилизовать карточки (без добавления классов) - border, border-radius, padding, оцентровка. 
// Сделать всем карточкам картинку одинаковых размеров без деформации изображения.
//При наведении на карточку курсора - цвет заднего фона меняется на светло-голубой

// 4. Стилизовать контейнер - сделать грид (4 колонки с отступами)

// 5. Создать форму с 5 инпутами - name, email, avatar, role, password + кнопку. При сабмите формируется объект и выводит в консоль

// Пример объекта:

// {
//   email: "string",
//   name: "string",
//   password: "string",
//   role: "string",
//   avatar: "string"
// }



// FETCH - запросы

// GET - получение данных
// POST - добавление данных
// DELETE - удаление данных
// PUT - замена данных
// PATCH - изменение данных

// 6. Написать функцию, принимающую в качестве аргумента объект (newUser) и отправляющую fetch-post-запрос по ссылке https://api.escuelajs.co/api/v1/users