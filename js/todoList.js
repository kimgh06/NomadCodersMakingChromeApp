const todoform = document.querySelector("#todo-form");
const todoinput = todoform.querySelector("Input");
const todolist = document.querySelector("#todo-list");
let toDos = [];

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function delToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => parseInt(toDo.id) != parseInt(li.id));
    saveToDos();
}

function paintToDo(todo){
    const li = document.createElement("li");
    li.id = todo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", delToDo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = todo.text;
    todolist.appendChild(li);
}

function todosubmit(event){
    event.preventDefault();
    const newput = todoinput.value;
    todoinput.value = "";
    const newToDo = {
        text: newput,
        id: Date.now(),
    };
    toDos.push(newToDo);
    paintToDo(newToDo);
    saveToDos();
}

todoform.addEventListener("submit", todosubmit);
const savedToDos = localStorage.getItem("todos");
if (savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}