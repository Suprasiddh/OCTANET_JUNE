document.addEventListener('DOMContentLoaded', (event) => {
    const input = document.getElementById('todo-input');
    input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
});

function addTodo() {
    const todoList = document.getElementById('todo-list');
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = todoText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.onclick = function () {
            todoList.removeChild(listItem);
        };

        listItem.appendChild(deleteBtn);
        listItem.onclick = function () {
            listItem.classList.toggle('completed');
        };

        todoList.appendChild(listItem);
        todoInput.value = '';
    }
}
