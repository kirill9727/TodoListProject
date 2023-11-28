//const STORAGE_NAME = 'TodoList'
// список дел
//export let TodoList = []
// поле ввода

// кнопка добавить
// export function addTodo(title, mainText) {
//     let contentTodo = {
//         id: TodoList.length + 1,
//         title,
//         mainText,
//     }
//     //сохраняем в localstorage
//     TodoList.push(contentTodo)
//     saveTodo()
//}

// addTodo('новое дело','сегодня очень важное дело ')
// addTodo('новое дело 2','сегодня очень важное дело 2')
// addTodo('новое дело 3','сегодня очень важное дело 3')

// добавляется в список дел и отрисовывается снизу

// удалить дело
// export function deleteTodo(id) {
//     TodoList = TodoList.filter(p => p.id !== parseInt(id))
//     saveTodo()
// }

// function saveTodo() {
//     localStorage.setItem(STORAGE_NAME, JSON.stringify(TodoList))
// }
//
// function loadTodo() {
//     TodoList = JSON.parse(localStorage.getItem(STORAGE_NAME))
// }
//
// loadTodo()
// список дела должен хранится в localStorage

// перед сохранением превращать в json
// localStorage.setItem('name', JSON.stringify({name: 'kirill'})) //set сохраняем в localStorage
// // json в строку и в массив
// JSON.parse(localStorage.getItem('name')) //get запрашиваем из localStorage
//


class TodoList {
    STORAGE_NAME = '' //private - используется только внутри class
    category = {
        easy: 'easy',
        hard: 'hard',
        impomant:'impomant'
    }
    todos = [

    ]
    constructor(STORAGE_NAME,category) {
        this.STORAGE_NAME = STORAGE_NAME
        this.category = category
        this.load()
    }

    add(title, mainText) {
        let contentTodo = {
            id: this.todos.length + 1,
            category: this.category["easy"],
            title,
            mainText,
        }
        this.todos.push(contentTodo)
        this.save()
    }
    remove(id) {
        this.todos = this.todos.filter(p => p.id !== parseInt(id))
        this.save()
    }
    save() {
        localStorage.setItem(this.STORAGE_NAME, JSON.stringify(this.todos))
    }
    load() {
        this.todos = JSON.parse(localStorage.getItem(this.STORAGE_NAME))
    }
    // import - диалог выбор файла, загрузка файла в хранилище
    // export - берем объект из памяти и сохраняем в файл, диалог сохранения файла
}

const defaultTodolist = new TodoList('TodoList')

export default defaultTodolist

//console.log(defaultTodolist.STORAGE_NAME)
// добавить категорию выбора туду листов (при добавлении
//инпут с текстом
//кнопка сохранения текста в файл (функция сохранения файла, через js)
//кнопка загрузки файла, из файла достать текст и показать в алерте (чтение файла функция)
