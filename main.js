var listId = "todoList"

var localAdapter = {
  saveList: function (object) {

   var stringified = JSON.stringify(object);
   localStorage.setItem(listId, stringified);
   return true;
  },

  getList: function()  {
    return JSON.parse(localStorage.getItem(listId));
  },

  clearList: function() {
   localStorage.removeItem(listId);
  }
};

var storage = localAdapter;

function saveLocalTodos(todos) {

  let todosList;

  if(localStorage.getItem('todos') === null) {
    todosList = [];

  } else{
    todosList = JSON.parse(localStorage.getItem('todos'));
  }

  todosList.push(todos);
  localStorage.setItem(todos, JSON.stringify(todosList));
}
function getTodos(){
  let todos;
  if(localStorage.getItem('todos') === null){
    todos = [];
  }else{
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.forEach(function(todo){
  });
}

 var storage = localAdapter;

  //button to add new task
 let addButton = document.querySelector('#add')

 //input field to add new task
 let addInput = document.querySelector('#item')
 
 //font awesome icons for buttons
 let removeI = '<i class="fa-solid fa-trash"></i>'

 let completeI = '<i class="fa-solid fa-check"></i>'

//add task clicking add button
addButton.addEventListener('click', function() {

 let newItem = document.getElementById('item').value

 if(document.getElementById('item').value.length == 0) {
  alert("Please enter a task")
 }

 //add to local storage
 saveLocalTodos(addInput.value);

 if (newItem) {

  addItemTodo(newItem)

  document.getElementById('item').value = ''

 }
})

//add task clicking enter key
addInput.addEventListener('keypress', function(e) {

 if (13 === e.keyCode) {

  let newItem = document.getElementById('item').value

  if (newItem) {

  addItemTodo(newItem)

  document.getElementById('item').value = ''

  }
 }
})

let todoId = 0;

function addItemTodo(text) {

 //grab 'ul'
 let list = document.getElementById('todo')

 //create 'li'
 let item = document.createElement('li')

 item.innerText = text
 todoId += 1;
 item.id = "todo" + todoId;

 //create container for buttons remove and complete
 let buttons = document.createElement('div')
 buttons.classList.add('buttons')

 //create two buttons

 let remove = document.createElement('button')
 remove.classList.add('remove')

 //Font Awesome icon added to button
 remove.innerHTML = removeI

 remove.addEventListener('click', removeItem)

 let complete = document.createElement('button')
 complete.classList.add('complete')

 //Font Awesome icon added to button
 complete.innerHTML = completeI

 complete.addEventListener('click', completeItem)

 //append buttons to 'div'
 buttons.appendChild(remove)
 buttons.appendChild(complete)

 //append 'div' to 'li'
 item.appendChild(buttons)

 //prepend 'li' to 'ul' - adds new tasks to top automatically
 list.insertBefore(item, list.childNodes[0])

}

function completeItem(event) {
  const target = event.target
 
 //grab 'li'
 let item = target.parentNode.parentNode
 
 //grab 'ul'
 let parent = item.parentNode
 
 //grab parent id
 let id = parent.id

 //remove item from current 'ul'
 parent.parentNode.removeChild(parent)
 const completed = document.getElementById("completed")

 //add item to new 'ul'
 completed.insertBefore(parent, completed.firstChild)

}

function removeItem() {

 //grab 'li'
 let item = this.parentNode.parentNode

 //grab 'ul'
 let parent = item.parentNode
 //remove 'li' from 'ul'

 parent.removeChild(item)

}
