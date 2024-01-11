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

// .find()
// .reduce()
// .sort()

// .filter(el => {}) - возвращает новый массив, в который попадут только те эелементы из исходного массива, которые отвечают переданному в callback-функцию условию

// 1. Напишите функцию getEvenNums(), которая принимает массив с числами и возвращает новый массив с четными числами из переданного массива

const getEvenNums = arr => {
    const new_arr = [];
  
    for(let i = 0; i < arr.length; i++){
      if(arr[i] % 2 === 0){
        new_arr.push(arr[i])
      }
    }
    return new_arr 
  }
  console.log(getEvenNums([7,9,4,2]))

  const getEvenNums1 = arr => {
    const new_arr = [];
  
    // arr.forEach(el => {
    //   if(el % 2 === 0){
    //     new_arr.push(el)
    //   }
    // })
  
    arr.forEach(el => el % 2 === 0 ? new_arr.push(el) : '');
  
    return new_arr 
  }
  console.log(getEvenNums1([7,9,4,2]))

  const getEvenNums2 = arr => {
    const new_arr = arr.filter(el => el % 2 ===0)
    return new_arr
  }
  console.log(getEvenNums2([25, 7, 2, 14, 22]))

  const getEvenNums20 = arr => arr.filter(el => el % 2 === 0);
  console.log(getEvenNums20([25, 7, 2, 14, 22]))


  // 2. Напишите функцию getLongStrings(), которая будет принимать массив со строками и возвращать новый массив только со строками длинее 5 символов

const getLongStrings = arr => {
  const new_arr = [];

  for(let i = 0; i < arr.length; i++){
    if(arr[i].length > 5){
      new_arr.push(arr[i])
    }
  }

  return new_arr
}

const getLongStrings1 = arr => arr.filter(el => el.length > 5)
console.log(getLongStrings1(['Good evening', 'hi', 'long story']))

// 3. Напишите функцию getLongStrings(), которая будет принимать массив со строками и возвращать новый массив только со строками длинее 5 символов и содержащими букву 'e'/'E'


const getLongStrings2 = arr => arr.filter(el => el.length > 5 && el.includes('e') || el.includes('E'))

console.log(getLongStrings2(['hello', 'hi', 'good morning', 'good evening', 'hEllo!'])); // ['good evening', 'hello!']


// 4. Напишите функцию, которая принимает массив с разными типами данных и возвращает новый массив только с числами

const getNumbers = arr => arr.filter(el => typeof el === 'number')

console.log(getNumbers([true, 3, 'hello', 98, 150, undefined])); // [3, 98, 150]

// 5. Напишите функцию, которая принимает массив с разными типами данных и возвращает новый массив только с числами больше 50

const getNumbers1 = arr => arr.filter(el => el > 50)
console.log(getNumbers1([true, 3, 'hello', 98, 150, undefined])); // [98, 150]



