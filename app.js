const addBtn = document.getElementById('addBtn');
const todoList = document.querySelector('.todo_list');
const completed = document.querySelector('.completed');
const total = document.querySelector('.total');
total.innerText = todoList.childElementCount;
let count = 0
completed.innerText = count;
const checkboxes = document.querySelectorAll('input[type=checkbox]');


addBtn.addEventListener("click", function () {
    const todoField = document.getElementById('todo__field');
    if (todoField.value === '' || todoField.value === '') {
        alert('Please vai kisu den,, eid er somoy khali haate firaiyen na');
    }
    else {
        const todoItem = document.createElement('li');
        todoItem.innerHTML = `<input onclick='completedFunc(this)' type='checkbox'/> ${todoField.value} <button class='removeBtn' onClick='removeItem(this)'>Remove</button>`;
        todoList.appendChild(todoItem);
        todoField.value = '';
    }

    total.innerText = todoList.childElementCount;

    // const checkboxes = document.querySelectorAll('input[type=checkbox]');
    // checkboxes.forEach(checkbox => {
    //     checkbox.addEventListener('click', () => {
    //         const checked = document.querySelectorAll('input[type=checkbox]:checked');
    //         completed.innerText = checked.length;
    //         //    console.log(checked);
    //         console.log(checked.length);
    //     })
    // })
})


function removeItem(button) {
    const li = button.parentNode;
    li.remove();
    total.innerText = todoList.childElementCount;
    console.log(todoList.childElementCount);
    completedFunc()


}

function delMarked() {
    const checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
    console.log(checkboxes)
    checkboxes.forEach(checkbox => {
        // console.log(checkbox);
        checkbox.parentNode.remove();
        // console.log(checkbox.parentNode);
        total.innerText = todoList.childElementCount;
        console.log(todoList.childElementCount);
        completedFunc()
    })
}
function deleteAll() {
    const checkboxes = document.querySelectorAll('li');
    console.log(checkboxes)
    checkboxes.forEach(checkbox => {
        checkbox.remove();
        total.innerText = todoList.childElementCount;
        console.log(todoList.childElementCount);
        // const checked = document.querySelectorAll('input[type=checkbox]:checked');
        // completed.innerText = checked.length;
        completedFunc()
    })
}

function allTasks() {
    console.log('butn kaj kore na ken');
    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    checkboxes.forEach(checkbox => {
        checkbox.parentNode.style.display = 'flex';
    })
}

function completedFunc(button) {

    const checked = document.querySelectorAll('input[type=checkbox]:checked');
    completed.innerText = checked.length;
    // button.parentNode.style.textDecoration = 'line-through';
    // if(button.parentNode.style.textDecoration === 'line-through'){
    //     button.parentNode.style.textDecoration = 'none';
    // }
    // else{
    //     button.parentNode.style.textDecoration = 'line-through';
    // }
    button.parentNode.classList.toggle('line_through');
    // console.log(button)

    // console.log(button)
    console.log(checked);
    console.log(checked.length);


}

const doneButtons = document.querySelector('.done_buttons');

function marked() {
    console.log("5")
    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    checkboxes.forEach(checkbox => {
        if (!checkbox.checked) {
            checkbox.parentNode.style.display = 'none';
        }
        else {
            checkbox.parentNode.style.display = 'flex';
        }
    })
}

function unmarked() {
    console.log("5")
    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkbox.parentNode.style.display = 'none';
        }
        else {
            checkbox.parentNode.style.display = 'flex';
        }
    })
}

