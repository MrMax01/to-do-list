const todoList= JSON.parse(localStorage.getItem('todoList')) || [];

if(todoList){
    list();
}

function list(){
    let todoListHTML = '';
    
    for(let i = 0; i < todoList.length; i++){
        const todoL = todoList[i];
        const name = todoL.name;
        const dueDate = todoL.dueDate;
        const time = todoL.time;
        const html = '<div>'+ name + '</div><div>' + dueDate + '</div><div>'+time+'</div><button class="delete-button" onclick="todoList.splice('+i+', 1); list(); deleteTodo('+i+'); ">Delete</button>'
        todoListHTML += html;
    }

    document.querySelector('.js-list').innerHTML = todoListHTML;
}

function addTodo(){
    const todo = document.querySelector('.inputText');
    const dateInputElement = document.querySelector('.js-due-date-input');
    const timeElement = document.querySelector('.js-time-input');
    if(todo.value && dateInputElement.value){

        todoList.push({
            name: todo.value,
            dueDate: dateInputElement.value,
            time: timeElement.value,
        });
        localStorage.setItem('todoList', JSON.stringify(todoList));
        list();
    }
    todo.value = '';
    dateInputElement.value='';
}

function deleteTodo(i){

    if (Array.isArray(todoList) && todoList.length >= 0) {
        // Rimuovi l'elemento desiderato dall'array
        todoList.splice(i, 0);

        // Salva l'array modificato nel localStorage
        localStorage.setItem('todoList', JSON.stringify(todoList));

        // Aggiorna la visualizzazione dell'elenco
        list();
    }
}

function hundleEnter(event){
    if(event.key === "Enter"){
        addTodo();
    }
}
