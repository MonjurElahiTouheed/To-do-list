const addBtn = document.getElementById('addBtn');
const todoList = document.querySelector('.todo_list');
addBtn.addEventListener('click', () => {
    const todoField = document.getElementById('todo__field');
    console.log(todoField.value);
    const todoItem = document.createElement('li');
    todoItem.innerHTML =`<input type='checkbox'/> ${todoField.value} <button onClick='removeItem(this)'>Remove</button>`
    todoList.appendChild(todoItem);
})

function removeItem(button) {
    const li = button.parentNode;
    li.remove();
}

function delMarked(){
    const checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
    console.log(checkboxes)
    checkboxes.forEach( checkbox => {
        // console.log(checkbox);
        checkbox.parentNode.remove();
        // console.log(checkbox.parentNode);
        
    })
}
function deleteAll(){
    const checkboxes = document.querySelectorAll('li');
    console.log(checkboxes)
    checkboxes.forEach( checkbox => {
        checkbox.remove();
    })
}

const filterButton = document.querySelector('.filter_button');
function showfilterBtn(){
            filterButton.style.visibility='visible';
}
function hidefilterBtn(){
        filterButton.style.visibility='hidden';
}


function filter() {
    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    checkboxes.forEach( checkbox => {
        if(!checkbox.checked){
            todoList.removeChild(checkbox.parentElement);
        }
    })
}