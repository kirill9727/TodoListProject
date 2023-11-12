import {TodoList} from "./todoListLogic";



function renderList(listTodo) {
    return `<div class="todoList" data-id="${listTodo.id}">
        <div class="title">
           <p>
                ${listTodo.title}
            </p> 
        </div>
        <div class="mainText">
            <p>
                ${listTodo.mainText}
            </p>
             <button class="delete">
                    delete
            </button>
        </div>
    </div>`
}
export function drawListTodo() {
    document.querySelector('.todoListFull').innerHTML = renderListTodo(TodoList)

}

const renderListTodo = (listTodo) => {
    return listTodo.map(renderList).join('')
}
//создание удаления дела на кнопку



