const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
//생성한 string을 반복해서 사용하게 될 경우, 대문자 변수로 저장해 놓는 게 좋음.
//=> 틀리면 JS가 알려줌.

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); //(1. 저장될 value의 key(분류 이름), 2. 저장될 value)
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `hello ${username}!`; //string + valuable name => `string ${valuable name}`
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){ //if there's no username in the local storage,
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}