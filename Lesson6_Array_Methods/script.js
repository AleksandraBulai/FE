// Дз
// *7. Создайте пустой массив vowels. Используя цикл. 
// найдите и добавьте все гласные буквы из строки "Hello.
// World!" в массив с использованием метода push. 
// Вам также понадобится использовать метод includes()-]]

const greeting = "Hello, WOrld!";
const vowels = [];

for(let i=0; i < greeting.length; i++){
    const letter = greeting[i].toLocaleLowerCase();
    const vow_letter = 'aeouyi';

    if(vow_letter.includes(letter)){
        vowels.push(greeting[i])
    }
}

console.log(vowels);

// 4. Написать функцию, которая принимает массив с числами и 
// инструкцию, разъясняющую что сделать с числом прежде, чем 
// добавить его в новый массив. Функция возвращает новый массив

const changeNums = (arr, instruction) => {
    const new_arr = [];

    for(let i =0; i < arr.length; i++){
        new_arr.push(instruction(arr[i]))
    }
    return new_arr
}

const multN = n => n * 2;
const divideN = n => n / 2;
const plusN = n => n + 10;
const powN = n => n ** 2;

console.log(changeNums([2, 5, 10, 15], divideN)); // [1, 2.5, 5, 7.5]
console.log(changeNums([2, 5, 10, 15], powN)); // [4, 25, 100, 225]
console.log(changeNums([2, 5, 10, 15], plusN)); // [12, 15, 20, 25]
console.log(changeNums([33, 100, 1], multN)); // [66, 200, 2]


// Array methods (методы массивов)

// Простые (принимают значения или ничего не принимают)

// .push()
// .pop()
// .shift()
// .unshift()


// Сложные (принимают callback- функцию)

// .forEach(el => {})- выполняет, переданную функцию для каждого элемента массива, ничего не возвращает 
// .map(el => {}) - выполняет переданную функцию для каждого элемента массива, возвращает новый массив длина которого равна исходному массиву
// .filter()
// .find()
// .reduce()
// .sort()


// 1. Написать функцию, принимающую массив с числами и возвращающую
// новый массив с этими числами, умноженными на 2

const multNumbers = arr => {
    const new_arr = [];

    for(let i = 0; i < arr.length; i++){
        new_arr.push(arr[i] * 2)
    }
    return new_arr
}
// эта же функция, но с методом .forEach
const multNumbers2 = arr => {
    const new_arr = [];

    arr.forEach(num => new_arr.push(num * 2));

    return new_arr
}

console.log(multNumbers2([2, 4, 10, 21])); // [4, 8, 20, 42]


// эта же функция, но с методом .map

const multNumbers3 = arr => {
    return arr.map(el => el * 2)
}

// сокращение этой же функции
// const multNumbers3 = arr => arr.map(el => el * 2);
// когда у нас функция из одной строки, мы можем убрать скобки и слово return

console.log(multNumbers3([2, 4, 10, 21])); // [4, 8, 20, 42]


// 2. Написать функцию, которая принимает массив чисел и значение,
// и возвращает новый массив со всеми числами исходного массива, 
// умноженными на значение второго аргумента

/*const multNums = (arr, num) => {
    const new_arr = [];
    
    for(let i = 0; i < arr.length; i++){
      new_arr.push(arr[i] * num)
    }
  
    return new_arr
  } */

const multNums1 = arr => {
    const new_arr = [];

    arr.forEach(num => new_arr.push(num * 3));

    return new_arr
}
console.log(multNums1([2, 12, 22, 54]));


const multNums2 = arr => arr.map(num => num * 3);
console.log(multNums2([2, 12, 22, 54]));


// 3. Дан массив чисел numbers. Вывести в консоль все числа массива

const numbers = [1, 2, 3, 4, 5];

// for(let i = 0; i < numbers.length; i++){
//   console.log(numbers[i])
// }

numbers.forEach(el => console.log(el));

