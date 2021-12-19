let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
    email = id("email"),
    password = id("password"),
    form = id("form"),
    msgErro = classes("erro"),
    sucessoIcon = classes("fa-check-circle"),
    erroIcon = classes("fa-exclamation-triangle");
    

form.addEventListener("submit", (e) => {
    e.preventDefault();

    formEngine(username, 0, "Please, write a valid username");
    formEngine(email, 1, "Please, write a valid email");
    formEngine(password, 2, "Please, write a valid password");

})


let formEngine = (id, serial, message) => {
    if(id.value === ""){
        msgErro[serial].innerHTML = message;
        erroIcon[serial].style.opacity = "1";
        sucessoIcon[serial].style.opacity = "0";
        id.style.border = "2px solid red";

    }else {
        msgErro[serial].innerHTML = "";
        erroIcon[serial].style.opacity = "0";
        sucessoIcon[serial].style.opacity = "1";
        id.style.border = "2px solid #067575";
        
    }
}