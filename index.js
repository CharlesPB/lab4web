

function Todo(){
  var todoBox = [];

  // post todo button
  let postTodo = document.getElementById("postTodo");
  postTodo.addEventListener("click", ( event ) => {
    event.preventDefault();

    var newTodo = document.getElementsByClassName("newTodo form-control")[0];
    var newDiv = document.createElement("div");
    var newInput = document.createElement("input");
    var newLabel = document.createElement("label");

    newDiv.setAttribute("class", "todos");

    newInput.type = "checkbox";
    newInput.id = "todoList" + todoBox.length;

    newLabel.setAttribute("for", newInput.id);
    newLabel.innerHTML = newTodo.value;

    newDiv.appendChild(newInput);
    newDiv.appendChild(newLabel);

    if(newTodo.value == '')
        return;

    var size = todoBox.length;

    todoBox.push("todoList" + size.toString());

    var list = document.getElementById("todosList");
    list.appendChild(newDiv);

    newTodo.value = "";
  });

  // clear all button
  let clearAll = document.getElementById("clearAll");
  clearAll.addEventListener("click", ( event ) =>{
    event.preventDefault();

    for(var id in todoBox){
        var todo = document.getElementById(todoBox[id]);
        todo.checked = false;
    }
  });

  // mark all button
  let markAll = document.getElementById("markAll");
  markAll.addEventListener("click", ( event ) =>{
    event.preventDefault();

    for(var id in todoBox){
        var todo = document.getElementById(todoBox[id]);
        todo.checked = true;
    }
  });

  // delete button
  let deleteAll = document.getElementById("deleteAll");
  deleteAll.addEventListener("click", ( event ) =>{
    event.preventDefault();

    var listOfTodos = document.getElementById("todosList");
    var size = listOfTodos.childNodes.length;

    for(var i = 0; i < size-1; i++){
        listOfTodos.removeChild(listOfTodos.childNodes[1]); //cause it re-indexes
    }

    todoBox = []; //reset box
  });

}

Todo();
