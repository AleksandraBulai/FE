// Array methods (методы массивов)

// Простые (принимают значения или ничего не принимают)

// .push()
// .pop()
// .shift()
// .unshift()


// Сложные (принимают callback- функцию)

// .forEach(el => {})- выполняет, переданную функцию для каждого элемента массива, ничего не возвращает 
// .map(el => {}) - выполняет переданную функцию для каждого элемента массива, возвращает новый массив длина которого равна исходному массиву
// .filter() - возвращает новый массив

// .find(el => {}) - возвращает один элемент (первый), который отвечают переданному в callback-функцию условию
// .reduce()
// .sort()

// .filter(el => {}) - возвращает новый массив, в который попадут только те эелементы из исходного массива, которые отвечают переданному в callback-функцию условию


// ДЗ

// 4. *Напишите функцию, которая принимает массив элементов и возвращает новый массив, содержащий только уникальные элементы

const getUniqueElems = arr => {
    const new_arr = [];

    arr.forEach(el => {
        if(!new_arr.includes(el)) {
            new_arr.push(el)
        }        
    })
    return new_arr
}

console.log (getUniqueElems([1,2,3,3,4,4,5])); // [1, 2, 3, 4, 5]


/*function uniqueElements(arr) {
    // Используем метод filter для создания нового массива
    // Сохраняем только элементы, которые встречаются только один раз
    const uniqueArr = arr.filter((element, index, self) => {
      return self.indexOf(element) === index;
    });
    return uniqueArr;
  }
  
  // Пример использования:
  const inputArray = [1, 2, 2, 3, 4, 4, 5];
  const resultArray = uniqueElements(inputArray);
  console.log(resultArray); // Выведет [1, 2, 3, 4, 5] */


  // const getUniqElements = arr => arr.filter((el, i) => arr.indexOf(el) === i);


  const uniqueElements = arr => arr.filter((element, index, array) => array.indexOf(element) === index);

  // Пример использования:
  const inputArray = [1, 2, 2, 3, 4, 4, 5];
  const resultArray = uniqueElements(inputArray);
  console.log(resultArray); // Выведет [1, 2, 3, 4, 5] 


  const names = ['Anna', 'Ivan', 'Boris', 'Anna', 'Anton', 'Anton'];

  const boris_filter = names.filter(el => el === 'Boris');
  const boris_find = names.find(el => el === 'Boris');
  
  console.log(boris_filter); // ['Boris']
  console.log(boris_find); // 'Boris'

  const anna_filter = names.filter(el => el === 'Anna');
  const anna_find = names.find(el => el === 'Anna');
  
  console.log(anna_filter); // ['Anna', 'Anna']
  console.log(anna_find); // 'Anna'

  //filter вернет массив, и все данные из массива (если будут одинаковые), find вернет строку, только самое первое значение из нужных нам

// Найти первый четный элемент в массиве чисел.

const numbers = [23, 41, 26, 32, 68, 71, 24];
const first_even_num = numbers.find(el => el % 2 === 0);

console.log(first_even_num);

// Написать функцию, которая принимает массив и возращает первую строку из этого массива, содержащую определенное ключевое слово.

const string = ['hello, world', 'hi', 'Hello, Anton'];
const getFirstStr = arr => arr.find(el => el.toLowerCase().includes('hello'))

// Написать функцию, которая принимает массив и возращает новый массив из всех строк из этого массива, содержащих определенное ключевое слово.

const getAllStrs = arr => arr.filter(el => el.toLowerCase().includes('hello'));

console.log(getFirstStr(['hello, world', 'hi', 'Hello, Anton'])); // 'hello, world'
console.log(getAllStrs(['hello, world', 'hi', 'Hello, Anton'])); // ['hello, world', 'Hello, Anton']

// Написать функцию, которая принимает массив и ключевое слово и возвращает первую строку из этого массива, содержащую определенное ключевое слово.
// Написать функцию, которая принимает массив и ключевое слово и возвращает новый массив из всех строк из этого массива, содержащих определенное ключевое слово.

const getFirstStr1 = (arr, key_word) => arr.find(el => el.toLowerCase().includes(key_word));

const getAllStrsNew = (arr, key_word) => arr.filter(el => el.toLowerCase().includes(key_word));

console.log(getFirstStr1(['hello, world', 'hi', 'summer', 'Morning'], 'morning'));
console.log(getAllStrsNew(['hello, world', 'hi', 'summer', 'Morning'], 'hi'));


// 6. Найти первый элемент, который является положительным и четным числом
// 7. Найти все элементы, которые являются положительными и четными числами

const nums = [-10, 1, 31, 34, -64, 56, 84];

const getNum = nums.find(el => el > 0 && el % 2 === 0);
const allElem = nums.filter(el => el > 0 && el % 2 === 0);

console.log(getNum); // 34
console.log(allElem); // [34, 56, 84]






