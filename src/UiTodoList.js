import {addTodo, deleteTodo, TodoList} from "./todoListLogic";



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
    initListTodo()
}

function initListTodo () {
    const items = document.querySelectorAll('.todoList')
    for (let item of Object.values(items)) {
        const id = item.getAttribute('data-id')
        const deleteBtn = item.querySelector('.delete')
        deleteBtn.addEventListener('click', () => {
            console.log(`удаляем id: ${id}`)
            deleteTodo(id)
            return drawListTodo()
        })
    }
}

export function initListTodoForm () {
    const todoForm = document.querySelector('.addTodoContent')
    const addButton = todoForm.querySelector('.addBtn')
    const titleInput = todoForm.querySelector('.title')
    const textInput = todoForm.querySelector('.text')
    addButton.addEventListener('click', () => {
        const title = titleInput.value
        const text = textInput.value
        console.log(`добавляем заголовок ${title}`, `добавляем текст ${text}`)
        addTodo(title,text)
        drawListTodo()
    })
}


// document.addEventListener('click', function() {
//     const title = document.querySelector('#title').value
//     const text = document.querySelector('#mainContent').value
//     let addBtn = document.querySelector('#addBtn')
//
// })



const renderListTodo = (listTodo) => {
    return listTodo.map(renderList).join('')
}
//создание удаления дела на кнопку



