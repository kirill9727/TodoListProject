import {TodoList} from "./todoListLogic";
import {drawListTodo,initListTodoForm} from "./UiTodoList";



document.addEventListener('DOMContentLoaded', () => {
    console.log('init Todolist')
    drawListTodo(TodoList)
    initListTodoForm()
})
console.log('js download')







