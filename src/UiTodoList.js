import Todolist from "./todoListLogic";



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
export const drawListTodo  = () => {
    document.querySelector('.todoListFull').innerHTML = renderListTodo(Todolist.todos)
    initListTodo()
}

function initListTodo () {
    const items = document.querySelectorAll('.todoList')
    for (let item of Object.values(items)) {
        const id = item.getAttribute('data-id')
        const deleteBtn = item.querySelector('.delete')
        deleteBtn.addEventListener('click', () => {
            console.log(`удаляем id: ${id}`)
            Todolist.remove(id)
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
        Todolist.add(title,text)
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

export const renderTest = () => {
    const el = createElFormHtml('<button>кнопка</button>')//document.createElement('button')
    //el.innerText = 'кнопка'
    el.addEventListener('click', p => {
        alert('testClicked')
    })
    return el
}

export const createElFormHtml = (html) => {
    const el = document.createElement('div')
    el.innerHTML = html
    return el.children[0]
}



