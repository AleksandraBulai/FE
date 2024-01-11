// 1. Отправить fetch-запрос по ссылке https://dummyjson.com/products и вывести полученные данные в консоль

fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(json => renderProducts(json.products))

// 2. Из полученных по запросу данных сформировать карточки продуктов (title, description, price) и добавить их в div.products_container

const productsContainer = document.querySelector('.products_container');

const renderProducts = arr => {
    arr.forEach(el => {
        const cardElem = document.createElement('div')
        const titleElem = document.createElement('p')
        const descrElem = document.createElement('p')
        const priceElem = document.createElement('p')
        const avatarElem = document.createElement('img')

        titleElem.innerText = `Title: ${el.title}`;
        descrElem.innerText = `Description: ${el.description}`;
        priceElem.innerText= `Price: ${el.price} $`;

        avatarElem.src = el.images[0];
        avatarElem.alt = el.title;

        cardElem.classList

        cardElem.append(avatarElem, titleElem, descrElem, priceElem);
        productsContainer.append(cardElem);
      })
    }

// 3. К каждой карточке добавить картинку (первую) продукта в начало карточки



