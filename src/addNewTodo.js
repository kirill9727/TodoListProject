import {addTodo} from "./todoListLogic";

const inpTitle = document.querySelector('.title').innerText
const inpText = document.querySelector('.mainContent').innerText
const btnAdd = document.querySelector('.addBtn')

btnAdd.onclick(() => {
    console.log('1')
    addTodo(inpTitle,inpText)
    return addTodo
})

