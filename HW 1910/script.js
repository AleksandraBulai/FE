// ДЗ


// 1. Дан массив чисел numbers. Вывести в консоль все четные числа массива
const getEvenNums20 = arr => arr.filter(el => el % 2 === 0);
console.log(getEvenNums20([100, 67, 2, 14, 22, 37]))


// 2. Напишите функцию, которая принимает массив со строками и возвращает новый массив. Если строка длиннее 5 символов, то в новый массив добавляется строка 'longer than 5', а если 5 и короче - то 'shorter than 5'
const newString = arr => {
    const new_arr = []
for(let i = 0; i < arr.length; i++) {
arr[i].length > 5 ? new_arr.push('longer than 5') : new_arr.push('shorter than 5')    
}
return new_arr
}

console.log(newString(['Sun', 'Hi', 'Family', 'Happiness']))
// arr.filter(str => str.length > 5);

// 3. Написать функцию changeStrings(), которая принимает массив с разными типами данных и возвращает новый массив, где все строки будут заменены на строку 'XXXXX'

/*const changeStrings = arr => arr.filter(el => typeof el === 'string')

console.log(changeStrings([true, 15, 'home', 'summer', 365, undefined]));*/

const changeStrings1 = arr => {
    const new_arr = [];
    arr.forEach(el => typeof el === 'string' ? new_arr.push('XXX') : '');
  
    return new_arr
  }
  console.log(changeStrings1([true, 15, 'building', 'cat', 365, undefined])); // 

