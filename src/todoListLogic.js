// список дел
export let TodoList = []
// поле ввода

// кнопка добавить
export function addTodo (title,mainText) {
    let contentTodo = {
        id: TodoList.length + 1,
        title,
        mainText,
    }
    //сохраняем в localstorage
    TodoList.push(contentTodo)
    localStorage.setItem('TodoList', JSON.stringify(TodoList))
}
addTodo('новое дело','сегодня очень важное дело ')
addTodo('новое дело 2','сегодня очень важное дело 2')
addTodo('новое дело 3','сегодня очень важное дело 3')

// добавляется в список дел и отрисовывается снизу

// удалить дело
export function deleteTodo(id) {
    const todoArray =  TodoList.filter(p => p.id !== parseInt(id))
    return TodoList = todoArray
}
deleteTodo()

// список дела должен хранится в localStorage

// перед сохранением превращать в json
// localStorage.setItem('name', JSON.stringify({name: 'kirill'})) //set сохраняем в localStorage
// // json в строку и в массив
// JSON.parse(localStorage.getItem('name')) //get запрашиваем из localStorage