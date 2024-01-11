// Объект - тип данных, в котором информация хранится в формате ключ: значение

const user = {
    id: 1,
    first_name: 'Oleg',
    last_name: 'Ivanov',
    age: 25,
    online: false,
    address: {
      city: 'Berlin',
      country: 'Germany',
      postcode: 10034
    },
    friends: ['Irina', 'Anna', 'Petr']
  }
  // console.log(user);
  console.log(user.first_name); // oleg
  console.log(user.age); // 25
  console.log(user.address.city) // berlin
  // можем обратиться отдельно к каждому ключу по значению, через точку


  const users = [
    {
      id: 1,
      first_name: 'Oleg',
      last_name: 'Ivanov',
      age: 25
    },
    {
      id: 2,
      first_name: 'Anna',
      last_name: 'Petrova',
      age: 15
    },
    {
      id: 3,
      first_name: 'Irina',
      last_name: 'Sidorova',
      age: 35
    },
    {
      id: 4,
      first_name: 'Igor',
      last_name: 'Ushanov',
      age: 57
    }
  ]

// 1. Вывести в консоль первый элемент массива users

console.log(users[0]);

// 2. Вывести в консоль имя из второго элемента массива users

console.log(users[1].first_name);

// 3. Вывести в консоль каждый элемент массива

users.forEach(el => console.log(el));

// 4. Вывести в консоль имена всех пользователей

users.forEach(el => console.log(el.first_name));

// 5. Для каждого пользователя вывести в консоль сообщение в следующем формате: 'Name: FIRST_NAME, Age: AGE'
// Name: Oleg Ivanov, Age: 25'

users.forEach(el => console.log(`Name: ${el.first_name} ${el.last_name}, Age: ${el.age}`));

// 6. Сформировать новый массив adult_users, в который попадут только совершеннолетние (>=18) пользователи

const adult_users = users.filter(el => el.age >= 18);

console.log(adult_users);

// 7. Сформировать новый массив users_info, где для каждого элемента из массива users будет сформирована строка в формате 'Name: FIRST_NAME, Age: AGE'
//  // ['...', '...', '...', '...'] 

const users_info = users.map(el => `Name: ${el.first_name} ${el.last_name}, Age: ${el.age}`);
console.log(users_info);

// 8. Сформировать новый массив, в который попадут пользователи, чье имя начинается на I/i

const i_users = users.filter(el => el.first_name[0].toLowerCase() === 'i');

console.log(i_users);


// 9. Создать новый массив users_sorted, в который попадут все элементы из массива users, отсортированные по возрасту в порядке возрастания

const users_sorted = users.map(el => el).sort((a,b) => a.age - b.age);
console.log(users_sorted);






