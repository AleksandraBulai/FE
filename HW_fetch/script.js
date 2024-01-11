fetch('https://jsonplaceholder.typicode.com/todos')
.then(res => res.json())
.then(json => cardsToDos(json))

const todosContainer = document.querySelector('  .todos_cards');

const cardsToDos = arr => {
    arr.forEach(el => {
        const cardElem = document.createElement ('div');
        const todosTitle = document.createElement ('p');
        const todosStatus = document.createElement ('p');

        todosTitle.innerText = `Title: ${el.title}`;
        todosStatus.innerText = `Status ${el.status}`;

       //todosStatus = el.status === 'true' ? 'done' : 'not done';
        cardElem.style.backgroundColor = el.status === 'done' ? 'green' : ' grey';
        

        cardElem.append(todosTitle, todosStatus);
        
    });
}
