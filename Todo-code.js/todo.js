console.log('In todo.js!')

const todoInput = document.getElementById('todoInput');
const addTodoButton = document.querySelector('#addTodoButton');
const todoList = document.querySelector('#todoList');
const todos = ['Static Test Todo'];

addTodoButton.addEventListener('click', function() {
    let todoValue = todoInput.value;
    console.log(todos)

    todoValue = todoValue.trim();

    if (todoInput.value !== '') {
        todos.push(todoValue);
    } else {
        todoInput.style.border = '1px solid red';
        alert('you can\'t submit an empty value.');
    }
    console.log(todos);
});

function generateTodo(todo) {
    const test = document.createElement('li');
    const taskText = document.createElement('span');
    const checkbox = document.createElement('input');
    const deletButton = document.createElement('button');
    checkbox.setAttribute('type', 'checkbox');
    // Insert text
    taskText.innerText = todo;
    // Build the task item.
    task.appendChild(checkbox);
    task.appendChild(taskText)
    return task;

    todoList.appendChild(generateTodo('__test__'))
}