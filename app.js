const form = document.querySelector('form');
const input = form.querySelector('input');
const ul = document.querySelector('ul');
const clearBtn = document.querySelector('.clear');
const count = document.querySelector('.count');

let todos = [];

function renderTodos() {
  ul.innerHTML = '';

  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.innerText = todo.text;

    if (todo.complete) {
      li.classList.add('complete');
    }

    li.addEventListener('click', () => {
      toggleComplete(index);
    });

    ul.appendChild(li);
  });

  updateCount();
}

function addTodo() {
  const text = input.value.trim();

  if (text) {
    todos.push({
      text,
      complete: false
    });

    renderTodos();
    input.value = '';
  }
}

function toggleComplete(index) {
  todos[index].complete = !todos[index].complete;
  renderTodos();
}

function clearCompleted() {
  todos = todos.filter(todo => !todo.complete);
  renderTodos();
}

function updateCount() {
  const incompleteCount = todos.filter(todo => !todo.complete).length;

  count.innerText = `${incompleteCount} item${incompleteCount === 1 ? '' : 's'} left`;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  addTodo();
});

clearBtn.addEventListener('click', clearCompleted);
