// ДЗ на 10.10.2023


// 1. Напишите программу, которая считает сумму всех чисел от 1 до N.
const getSum = (num) => {
    let result = 0;
  
    for (let i = 0; i <= num; i++) {
      result += i;
    }
    return result;
};
  
  console.log(getSum(15)); // 0 + 1 + 2 + 3 + 4 ... = 120
  console.log(getSum(7)); // 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28



// 2. Выведите таблицу умножения для заданного числа N.

const getMult = num => {
    for (let i = 1; i <= 10; i ++) {
    for (let b = 1; b <=10; b ++) {
    result += (i * b)}  
    return result
}
}
/*const getMult = num => {
    const results = [];

    for (let i = 1; i <= 10; i++) {
        for (let b = 1; b <= 10; b++) {
            results.push(i * b);
        }
    }
    return results;
}; */

  console.log(getMult(3)); //
  console.log(getMult(15)); // 



  // 3. Напишите программу, которая вычисляет факториал числа N.

  const getFact = (num) => {
    let result = 1;
  
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  };
  
  console.log(getFact(13)); // 1 * 2 * 3 *... = 6227020800
  console.log(getFact(7)); // 1 * 2 * 3 * 4 * 5 * ... = 5040


// 4. Выведите в консоль все четные числа от 1 до N.

  const showNums = num => {
    for(let i = 0; i <= num; i ++) {
        if(i % 2 === 0 && i !== 0) {
    console.log(i)
  }
 }
}
showNums(15); // 2 4 6 8 10 12 14
showNums(96); // 2 4 6 8 10 12 14 16 18 20 ... 96


// 5. Выведите в консоль числа от N до 1 в обратном порядке.

for (let i = 22; i >= 0; i--) {
    console.log(i);
  }




