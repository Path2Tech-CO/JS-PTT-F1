const todos = [
  {
    title: "First Todo",
    description: "This is the 1st initial todo",
    complete: false,
  }
];

function addTodo(title, description, complete = false) {
  const newTodo ={
    title: title,
    description: description,
    complete: complete
  };
  todos.push(newTodo);
}

addTodo("Second Todo", "This is my 2nd todo", true);
console.log(todos);


function removeTodo(){}
function editTodo(){}
function markTodoComplete(){}
function displayTodoLength(){}

function app(){
  console.log('Welcome to the Todo Application');
  console.log('================================');
  // You will need to call your methods below this comment to edit the todos array

  // You will need to call your methods above this comment to edit the todos array
  console.log('Here is a list of your todos:');
  // Print the length of the todos array below this comment

  // Print the length of the todos array above this comment
  // Iterare over the todos array and console.log each todo below this comment
  console.log(todos);
}

app();