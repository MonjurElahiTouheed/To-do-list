const addBtn = document.getElementById('addBtn');
const todoList = document.querySelector('.todo_list');
const completed = document.querySelector('.completed');
const total = document.querySelector('.total');
total.innerText = todoList.childElementCount;
completed.innerText = completed.childElementCount;
const checkboxInputs = document.querySelectorAll('input[type=checkbox]');

addBtn.addEventListener('click', () => {
    const todoField = document.getElementById('todo__field');
    if(todoField.value === '' || todoField.value === ''){
        alert('Please vai kisu den,, eid er somoy khali haate firaiyen na');
    }
    else {
        const todoItem = document.createElement('li');
    todoItem.innerHTML =`<input type='checkbox'/> ${todoField.value} <button onClick='removeItem(this)'>Remove</button>`
    todoList.appendChild(todoItem);
    todoField.value = '';
    }
    
    total.innerText = todoList.childElementCount;

    checkboxInputs.forEach(checkbox => {
        completed.innerText = 
    })
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


function marked() {
    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    checkboxes.forEach( checkbox => {
        if(!checkbox.checked){
            todoList.removeChild(checkbox.parentElement);
        }
    })
}
function unmarked() {
    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    checkboxes.forEach( checkbox => {
        if(checkbox.checked){
            todoList.removeChild(checkbox.parentElement);
        }
    })
}
