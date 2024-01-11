const people = [
    {
      id: 1,
      first_name: 'Ivan',
      last_name: 'Ivanov',
      age: 20,
      city: 'Moscow',
      country: 'Russia'
    },
    {
      id: 2,
      first_name: 'Petr',
      last_name: 'Petrov',
      age: 12,
      city: 'Berlin',
      country: 'Germany'
    },
    {
      id: 3,
      first_name: 'irina',
      last_name: 'Alexandrova',
      age: 46,
      city: 'Paris',
      country: 'France'
    },
    {
      id: 4,
      first_name: 'Denis',
      last_name: 'Sokolov',
      age: 30,
      city: 'Rome',
      country: 'Italy'
    }
  ];

// 1. Сформируйте массив строк - каждая строка включает в себя информацию по каждому человеку в следующем формате: "<Имя> <Фамилия> (<Город>, <Страна>)". Пример => ['Ivan Ivanov (Moscow, Russia)', ...]

const people_info = people.map(el =>`${el.first_name} ${el.last_name}, ${el.country}, ${el.city})`);
console.log(people_info);

// 2. Сформируйте массив из людей, чьи имена начинаются на 'I' (регистр буквы может быть и нижним)

const people_name = people.filter(el => el.first_name[0].toLowerCase() === 'i');
const people_name1 = people.filter(el => el.first_name.charAt(0).toLowerCase() === 'i');
const people_name2 = people.filter(el => el.first_name[0].toLowerCase().startsWith('i'));
console.log(people_name);
console.log(people_name1);
console.log(people_name2);


// 3. Сформируйте массив строк из совершеннолетних пользователей - каждая строка включает в себя информацию по каждому человеку в следующем формате: "<Имя> <Фамилия> (<Город>, <Страна>)". Пример => ['Ivan Ivanov (Moscow, Russia)', ...]

const adult_users = people.filter(el => el.age >= 18).map(el => `${el.first_name} ${el.last_name}, ${el.country}, ${el.city})`);
console.log(adult_users);