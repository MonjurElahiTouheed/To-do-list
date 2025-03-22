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