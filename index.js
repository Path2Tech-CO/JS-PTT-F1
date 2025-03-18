function app(){
  console.log('Welcome to the Todo Application');
  console.log('================================');
  // You will need to call your methods below this comment to edit the todos array
  const todos = [
    {
      title: "First Todo",
      description: "This is the 1st initial todo",
      complete: false,
    }
  ];
  
  //Add New Todo//
  function addTodo(title, description, complete = false) {
    const newTodo ={
      title: title,
      description: description,
      complete: complete
    };
    todos.push(newTodo);
  }
  
  //Removal of todo by Index//
  function removeTodo(index) {
    if (index >= 0 && index < todos.length) {
      todos.splice(index, 1);
    }
  }
 

  function editTodo(index, newTitle, newDescription){
    if (index >= 0 && index < todos.length) {
      todos[index].title = newTitle;
      todos[index].description = newDescription;
      console.log(`Updated: "${newTitle}"`);
    } else {
      console.log("Invalid index. Cannot edit todo.");
    }
  }

  function markTodoComplete(index) {
    if (index >=0 && index < todos.length) {
      todos[index].complete = true;
      console.log(`Todo at index ${index} marked as complete.`);
    } else {
      console.log("Invalid index. Cannot mark todo as complete.");
    }
  }


  addTodo("Second Todo", "This is my 2nd todo");
  addTodo("Third Todo", "This is my 3rd todo");

  markTodoComplete(1)

function displayTodoLength() {
  console.log(`You have ${todos.length} todos`);
}
console.log(`Here is a list of your todos:`);
displayTodoLength();

  addTodo("Second Todo", "This is my 2nd todo");
  addTodo("Third Todo", "This is my 3rd todo");
  // You will need to call your methods above this comment to edit the todos array
  console.log('Here is a list of your todos:');
  // Print the length of the todos array below this comment

  // Print the length of the todos array above this comment
  // Iterare over the todos array and console.log each todo below this comment
  todos.forEach((todo, index) => {
    console.log(`Todo ${index + 1}`);
    console.log(`Title: ${todo.title}`);
    console.log(`Description: ${todo.description}`);
    console.log(`Completed: ${todo.complete ? "complete" : "not complete"}`);
  });
  console.log(todos);
}

app();