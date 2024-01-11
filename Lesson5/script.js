// Array methods (Методы массива)

const numbers = [1, 2, 3, 4, 5];

numbers.push(6); // добавляет элемент в конец массива
numbers.pop(); // удаляет из массива последний элемент
numbers.unshift(0); // добавляет элементв начало массива
numbers.shift(); // удаляет из массива первый элемент


//console.log(numbers [2]);

// 2/ Дан массив чисел numbers  Вывести в консоль все числа массива

// i < numbers.length более короткая запись, i = numbers.length -1

for(let i = 0; i < numbers.length; i ++) {
    console.log(numbers[i])
} 
// numbers[0] = 1
// numbers[1] = 2
// numbers[2] = 3
// numbers[3] = 4
// numbers[4] = 5


// 3. Дан массив с числами numbers. Создать новый массив
//  и добавить в него все числа из массива numbers, умноженные на 2
// ==> [2, 4, 6, 8, 10]

const numbers2 = [];
for(let i =0; i < numbers.length; i++){
    numbers2.push(numbers[i] * 2)
}

console.log(numbers2);

// 4. Напишите функцию, которая будет принимать в качестве аргумента
// массив чисел и возвращать новый массив со всеми числами 
// переданного масива, умноженными на 2 

const multNumbers = arr => {
    const new_arr = [];

    for(let i = 0; i < arr.length; i++){
        new_arr.push(arr[i] * 2)
    }

    return new_arr
}

console.log(multNumbers([1, 2, 3, 4])); // [2, 4, 6, 8, 10]
console.log(multNumbers([10, 43, 55])); // [20, 86, 110]
console.log(multNumbers([32, 1, 15, 25])); // [64, 2, 30, 50]


// 5. Напишите функцию multNumbers2, которая будет принимать два
// аргумента - массив чисел и число. Функция должна возвращать
// новый массив со всеми числами, переданного массива, 
// умноженными на переданное число

const multNumbers2 = (arr, num) => {
    const new_arr = [];

    for(let i = 0; i < arr.length; i++){
        new_arr.push(arr[i] * num)
    }

    return new_arr
}
console.log(multNumbers2([1, 2, 3, 4, 5], 3)); // [3, 6, 9, 12, 15]
console.log(multNumbers2([10, 43, 55], 0)); // [0, 0, 0]
console.log(multNumbers2([32, 1, 15, 25], 2)); // [64, 2, 30, 50]

// 6.  Напишите функцию, которая принимает массив с числами и
// возвращает новый массив с четными числами из переданного массива


const getEvenNums = arr => {
    const new_arr = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 ===0){
            new_arr.push(arr[i])
        }
    }
    return new_arr
}

console.log(getEvenNums([1, 64, 34, 5, 18])); // [64, 34, 18]
console.log(getEvenNums([70, 52, 3, 7])); // [70, 52]

// 7. Напишите функцию getLongStrings[], которая будет принимать массив
// со стороками и возвращать новый массив только со строками длиннее
// 5 символов

const getLongStrings = arr => {
    const new_arr = [];

    for(let i =0; i < arr.length; i++) {
        if(arr[i].length > 5){
            new_arr.push(arr[i])
        }
    }
    return new_arr
}

console.log(getLongStrings(['hi', 'good morning', 'bye'])); // 'good morning'
console.log(getLongStrings(['Anna', 'Irina', 'Stepan', 'Natalia'])) // 'Stepan', 'Natalia'

// 8. Напишите функцию, которая принимает массив и возвращает новый
// массив. Если строка длиннее 5 символов, то в новый массив
// массив добавляется строка 'longer than 5', а если 5 и короче,
// то 'shorter than 5'


// Вариант 1

const getNewStrings = arr => {
    const new_arr = []

    for(let i = 0; i < arr.length; i++){
        if(arr[i].length >5){
         new_arr.push('longer than 5')
        } else {
            new_arr.push('shorter than 5')
        }
    }
return new_arr
}

console.log(getNewStrings(['hi', 'good morning', 'bye'])); // 'shorter than 5', 'longer than 5', 'shorter than 5'
console.log(getNewStrings(['Anna', 'Irina', 'Stepan', 'Natalia'])) // 'shorter than 5', 'shorter than 5', 'longer than 5'

// Вариант 2, можно сделать через тернарный опреатор :
// for(let i = 0; i < arr.length; i++) {
//arr[i].length > 5 ? new_arr.push( 'longer than 5') : new_arr.push( 'shorter than 5')    
// }
// return new_arr 



// Вариант 3
// for(let i = 0; i < arr.length; i++) {
// new_arr.push(arr[i].length > 5 ? 'longer than 5 : 'shorther than 5')
// }
// return new_arr
// }


// 9. Напишите функцию getNumbersFromArray(), которая принимает массив с-разными типами -данных - и • возвращает новый массив • только • с
// числами
//- typeof

console.log(getNumbersFromArray([1,'hello', true , 6, 87,'bye'])); // [1, 6, 87]