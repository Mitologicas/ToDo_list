const listElement = document.querySelector('#app ul');
const inputElement = document.querySelector('#app input');
const buttonElement = document.querySelector('#app button');

let todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderToDo() {
  listElement.innerHTML = '';
  for (todo of todos) {
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);
    var linkElement = document.createElement('a');
    linkElement.setAttribute('href', '#');
    var linkText = document.createTextNode('Excluir');

    var pos = todos.indexOf(todo);
    linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

    linkElement.appendChild(linkText);

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);
  }
}

renderToDo();

function addToDo() {
  var todoText = inputElement.value;
  console.log(todoText);
  todos.push(todoText);
  inputElement.value = '';
  renderToDo();
  saveToSotarge();
}

buttonElement.onclick = addToDo;

function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderToDo();
  saveToSotarge();
}

function saveToSotarge() {
  localStorage.setItem('list_todos', JSON.stringify(todos));
}
