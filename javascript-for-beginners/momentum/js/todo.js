const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
//== const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
// const toDoForm = document.getElementById("todo-form");
// const toDoList = document.getElementById("todo-list");

const TODOLIST_KEY = "toDoList"

// const toDos = []; // const면 변화에 대응을 못 함 (localStorage에 있는 array를 restoring update 불가)
let toDos = []; 
    //>1 need to update(restored) with old-toDos in localStorage.
    //>2 cf.) if(savedToDoList !== null){}

function saveToDos(){
    localStorage.setItem(TODOLIST_KEY, JSON.stringify(toDos))
}
//localStorage can only save text.
//string 형식으로 바꿔 준 건데 왜 array 형식으로 저장이 되는 거지?....;;;

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    // console.log(typeof li.id);
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

    //how to check what event is loaded?
        // funcftion deleteToDo(event){
        //     console.log(event); 
            // > console.dir(event.target);
            // > console.dir(event.target.parentElement.innerText);
                    // > console.log(event.target.parentElement);
        // }
            //event have a property that tell us which button was clicked.


function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text; // *.text ~ object의 text.
    const btn = document.createElement("button");
    btn.innerText = "❌😵❌";
    btn.addEventListener("click", deleteToDo);
    li.appendChild(span); //li는 span이라는 child를 가지게 됨.
    li.appendChild(btn);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = ""; // "" means empty. // input button의 텍스트를 초기화.
    //> newToDo는 toDoInput.value의 값을 ""; 하기 전의 값을 나타는 스트링.
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    }
    //> 오브젝트를 만들어서 각각의 newToDo에 id를 부여하기 위함.
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDoList = localStorage.getItem(TODOLIST_KEY);

if(savedToDoList !== null){
    const parsedToDoList = JSON.parse(savedToDoList);
    toDos = parsedToDoList; //localStorage에 있는 old-toDoList를 toDos에 호출(저장). restored.
    // parsedToDoList.forEach((item) => console.log("this is the turn of ", item));
    parsedToDoList.forEach(paintToDo);
}