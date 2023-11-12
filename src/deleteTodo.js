import {deleteTodo} from "./todoListLogic";

document.addEventListener('click', function () {
    console.log('delete')
    return document.querySelector('.delete').onclick = deleteTodo()
})



