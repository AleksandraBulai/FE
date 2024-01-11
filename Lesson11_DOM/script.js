// 1. В html-документе создать кнопку и параграф. При клике на кнопку меня у параграфа размер текста на 26px и перекрашивать цвет заднего фона в светло-зеленый

const changeBtn = document.querySelector('.change_btn');
const changeText = document.querySelector('.change_text');

/*changeBtn.addEventListener('click', () => {
    changeText.style.fontSize = '26px';
    changeText.style.backgroundColor = 'lightgreen'
}); */

// 2. При клике на кнопку менятеся цвет текста. Если текст содержит букву a, то цвет текста поменяется на красный. Если не содержит - то на синий

changeBtn.addEventListener('click', () => {
    changeText.style.color = changeText.innerText.includes('i') ? '#D70040' : 'navy'
  });

 // 3. В html-документе создать кнопку и пустой контейнер (div). При клике на кнопку внутри контейнера добавляется параграф с текстом зеленого цвета Hello, world!
 
 
 const addTextBtn = document.querySelector('.add_text_btn');
 const addTextContainer = document.querySelector('.add_text_container');

 addTextBtn.addEventListener('click', () => {

    //создать новый элемент p
    const new_text = document.createElement('p');

    // наполнить р текстом
    new_text.innerText = 'Good evening!';
    
    // покрасить цвет текста в зеленый
    new_text.style.color = 'navy';

    // добавить созданный p в div
    addTextContainer.append(new_text);
 })

 // 4. В html-документе создать кнопку и пустой контейнер (div). При клике на кнопку внутрь контейнера добавляется квадрат (div) красного цвета, высотой и шириной 30px и с border 3px solid purple

 const addNewSquare = document.querySelector('.new_button');
 const addShapeContainer = document.querySelector('.new_square');

 let params = 20; 

 addNewSquare.addEventListener('click', () => {
    const square = document.createElement('div');

    square.classList.add('square');

    params +=10;

    square.style.width = params + 'px';
    square.style.height = params + 'px';

    addShapeContainer.append(square);
   
 });
   /*square.style.backgroundColor = 'red';
    square.style.height = '30px';
    square.style.width = '30px';
    square.style.border = '3px solid purple';*/

// 4. В html-документе создать кнопку и пустой контейнер (div). При клике на кнопку внутрь контейнера добавляется квадрат (div) красного цвета и с border 3px solid purple. Первый квадрат добавится с 30х30px, каждый следующий квадрат будет высотой и шириной превышать предыдущий на 10px

// 5. В html-документе создать два квардрата 50х50 - синий и зеленый. При клике на синий квадрат - зеленый перекрашивается в желтый и уменьшается до размеров 30х30. При клике на зеленый - синий увеличивается до размеров 70х70 и у него появляется border

const blueSquare = document.querySelector('.blue_square');
const greenSquare = document.querySelector('.green_square');

blueSquare.addEventListener('click', () => {
    greenSquare.style.backgroundColor = 'yellow';
    greenSquare.style.width = '30px';
    greenSquare.style.height = '30px';
});

greenSquare.addEventListener('click', () => {
    blueSquare.style.width = '70px';
    blueSquare.style.height = '70px';
    blueSquare.style.border = '4px solid lightpink';
   
});

// 6. Создать кнопку и пустой контейнер. При клике на кнопку в контейнер добавляется два параграфа с произвольным текстом. Один параграф синего цвета, второй - зеленого

const paragraph = document.querySelector('.paragraph');
const new_paragraph = document.querySelector('.add_paragraph');

paragraph.addEventListener('click', () => {
    const par1 = document.createElement('p');
    const par2 = document.createElement('p');

    par1.innerText = 'this is first paragraph';
    par2.innerText = 'this is second paragraph';

    par1.style.color = 'blue';
    par2.style.color = 'green';

   new_paragraph.append(par1, par2);
});


