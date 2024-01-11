fetch('https://jsonplaceholder.typicode.com/users') // отправляем запрос
    .then(res => res.json()) // преобразуем полученные данные json 
    .then(json => renderUsers(json)) // полученный по запросу json выводим в консоль


  // 2. Написать функцию renderUsers, которая будет принимать массив с объекта и для каждого объекта создавать карточку пользователя (имя, юзернэйм). Все созданные карточки добавить в div.users_container
const userContainer = document.querySelector('.users_container');

const renderUsers = arr => {
    arr.forEach(el => {
        const cardElem = document.createElement('div');
        const nameElem = document.createElement('p');
        const userNameElem = document.createElement('p');
        const userMailElem = document.createElement('a');
        const userAddress = document.createElement('p');

        nameElem.innerText = `Name : ${el.name}`;
        userNameElem.innerText = `Username: ${el.username}`;
        userMailElem.innerText = el.email;
        userAddress.innerText =`Address: ${el.address.city} (${el.address.zipcode}), ${el.address.street}, ${el.address.suit}`;

        userMailElem.href = `mailto:${el.email}`;

        cardElem.classList.add('user_card');
        cardElem.style.backgroundColor = el.name[0].toLowerCase() === 'c' ? 'lightyellow' : 'lightgreen';


        cardElem.append(nameElem, userNameElem, userMailElem, userAddress);
        userContainer.append(cardElem);
    });
} 

// 3. Для каждого пользователя вывести кликабельный имэйл

// 4. Для каждой карточки добавить стили - border, border-radius, padding
// 5. Из usersContainer сделать flex
// 6. Если имя пользователя начинается на букву C (любой регистр), то покрасить карточку в светло-желтый, а если нет - то в светло-зеленый
// 7. Для каждого пользователя добавить параграф с адрессом в формате: 'Address: city (zipcode), street, suit'






    
    