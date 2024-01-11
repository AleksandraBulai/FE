// ДЗ


//1. Найти первое положительное число в массиве.
//2. Найти первое отрицательное число в массиве.
//3. Найти первый элемент, больший 100.

const nums = [22, -11, -44, 31, 354, -64, 56, 184, -87];

const getNum = nums.find(el => el > 0);
const getNegNum = nums.find(el => el < 0);
const getHundredEl = nums.find(el => el > 100);

const getSevMean = nums.find(el => el > 30 && el % 2 === 0);

console.log(getNum); // 22
console.log(getNegNum); // -11 
console.log(getHundredEl); // 354

console.log(getSevMean); // 354


//4. Найти первый элемент, начинающийся с определенной буквы.

const e_words = ['Aleksandra', 'sun', 'happiness', 'smile', 'Ex', 'executive power'];
const getCapLetter = e_words.find(el => el[0].toUpperCase() === 'e');

console.log(getCapLetter);

/*const arr = ["Alexa", "Sanya", "Vasia", "andrei"];
let inpt = "v"

const word = arr.filter(el => {
    if(el[0].toLowerCase() === inpt) {
        return el;
    }
})[0];

console.log(word);*/


// 5.* Найти первый элемент, который является палиндромом (читается одинаково с начала и с конца). => 'anna', 'sos', ...
const words = ['anna','Sunday','Sos','evening'];
const palindrom_word = words.find(el => el.split('').reverse().join('') === el);  
console.log(palindrom_word);
  
 


// ДЗ ( четверг)
// 1. Сформировать массив из пользователей, чья фамилия содержит букву S (любой регистр) => [{}, {}]

const users = [
    {
      id: 1,
      first_name: 'Oleg',
      last_name: 'Ivanov',
      age: 25
    },

    {
        id: 2,
        first_name: 'Dmytro',
        last_name: 'Iermolenko',
        age: 32
    },
    {
        id: 3,
        first_name: 'Anna',
        last_name: 'Petrova',
        age: 54
      },
      {
        id: 4,
        first_name: 'Paulina',
        last_name: 'Sergienko',
        age: 66
      }];

    const users_sorted = users.filter(el => el.last_name[0].toLowerCase() === 's');
    console.log(users_sorted);


// 2. Сформировать массив из возрастов всех пользователей => [25, 15, 35, 57]
    users.forEach(el => console.log(el.age)); 


// 3. Сформировать массив из возрастов всех пользователей, отсортированными по возрасту в порядке убывания => [57, 35, 25, 15]
    const users_aged_sorted = users.map(el => el).sort((a,b) => b.age - a.age);
    console.log(users_aged_sorted);

// 4. Сформировать массив из имен и фамилий пользователей => ['Oleg Ivanov', 'Anna Petrova', '...', '...']
    users.forEach(el => console.log(el.first_name, el.last_name));


// 5. Найти сумму возрастов всех пользователей, записать ее в переменную age_sum

      const users_age_sum = users.reduce((box, el) => box + el, 0);
      console.log(users_age_sum);


//const numbers_sum1 = numbers.reduce((box, el) => box + el, 0);
