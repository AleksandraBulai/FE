/* ДЗ 4. Напишите функцию, которая принимает строку в качестве аргумента и 
возвращает true, если строка является палиндромом 
(читается одинаково слева направо и справа налево), 
и false в противном случае. */

const checkPalindrom = (str) => {
  return str === str.split("").reverse().join("");
};

console.log(checkPalindrom("hello")); // false
console.log(checkPalindrom("anna")); // true

/* ДЗ 2. Напишите функцию, которая принимает число в качестве аргумента и 
возвращает его факториал (произведение всех положительных целых чисел 
от 1 до этого числа). */

const getFact = (num) => {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
};

console.log(getFact(2)); // 1 * 2 = 2
console.log(getFact(5)); // 1 * 2 * 3 * 4 * 5 = 120

// ЗАДАЧИ НА ЦИКЛЫ

// 1. Написать функцию getSum(), которая принимает число и возвращает
//сумму от нуля до переданного числа

const getSum = (num) => {
  let result = 0;

  for (let i = 0; i <= num; i++) {
    result += i;
  }

  return result;
};

console.log(getSum(3)); // 0 + 1 + 2 + 3 = 6
console.log(getSum(5)); // 0 + 1 + 2 + 3 + 4 + 5 = 15

// 2. Вывести в консоль число 123 6 раз
for (let i = 1; i <= 106; i++) {
  console.log(123);
}

// 3.Вывести в консоль число о 0 до 20
for (let i = 0; i <= 20; i++) {
  console.log(i);
}

// 4. Вывести в консоль числа от 23 до 145

for (let i = 23; i <= 145; i++) {
  console.log(i);
}

// 5. Написать функцию showNumbers(), которая принимает число
// и выводит в консоль
// все числа от 0 до переданного числа

const showNumbers = num => {
    for(let i = 0; i <= num; i++) {
        console.log(i)
    }
}

showNumbers(25);

// 6. Написать цикл, который выводит в консоль числа от 10 до 0
for (let i = 10; i >= 0; i--) {
    console.log(i);
  }
  
// 7. Написать функцию, которая принимает число и выводит в консоль
// все числа от 0 до переданного числа
//Число может быть как положительное, так и отрицательное

/*const showNums = num => {

for (let i = 0; i <= num; i++) {
    console.log(i);
  }
for (let i = -0; i >= -num; i--) {
    console.log (i)
}  
} 
console.log(showNums(5)); // 0 1 2 3 4 5
console.log(showNums(-5)); // 0 -1 -2 -3 -4 -5 */

 const showNums = num => {
 if(num > 0) {
    for(let i = 0; i <= num; i ++) {
     console.log(i)
    } 
  } else {
  for(let i = 0; i >= num; i--){
    console.log(i)
  }
}}
showNums(5); // 0 1 2 3 4 5
showNums(-5); // 0 -1 -2 -3 -4 -5

// 8. Написать функцию, которая принимает 2 числа и выводит в консоль
// все числа от меньшего к большему

 const showNums2 = (num, num1) => {
 if(num > num1) {
    for(let i = num1; i <= num; i++)
    console.log(i) 
} else {
    for(let i =num; i <= num1;  i++){
    console.log(i)    
    }
}
}

showNums2(2, 9); // 2 3 4 5 6 7 8 9
showNums2(7, 1); // 1 2 3 4 5 6 7

// 9. Написать функцию, которая принимает положительное число
// и выводит только те числа, от 0 до этого числа,
// которые делятся на 3 без остатка 

const showNums3 = num => {
    for(let i = 0; i <= num; i ++) {
        if(num % 3==0 && i==0) {
    console.log(i)
  }
 }
}
showNums3(10); // 3 6 9
showNums3(17); // 3 6 9 12 15