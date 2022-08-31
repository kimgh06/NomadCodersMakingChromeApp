const loginform = document.querySelector("#login-form");
const loginInput = loginform.querySelector("input");
const loginbutton = loginform.querySelector("button");
const link = document.querySelector("a");
const h1 = document.querySelector("#greet");

function submit(event){
    event.preventDefault();
    loginform.classList.add("hidden");
    const username = loginInput.value;
    localStorage.setItem("username", username);
    h1.innerText = "Hello " + username;
    h1.classList.remove("hidden");
}

const savedusername = localStorage.getItem("username");

if (savedusername == null){
    loginform.classList.remove("hidden");
    loginform.addEventListener("submit", submit);
}
else {
    h1.classList.remove("hidden");
    h1.innerText = "Hello " + savedusername;
}