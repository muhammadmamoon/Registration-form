const signupbtn = document.querySelector(".signupbtn");
const loginbtn = document.querySelector(".loginbtn");
const movebtn = document.querySelector(".movebtn");
const signup = document.querySelector(".signup");
const login = document.querySelector(".login");



loginbtn.addEventListener("click", () => {
    movebtn.classList.add("rightbtn");
    signup.classList.remove("signupform");
    login.classList.add("loginform");
    movebtn.innerHTML = "login";
})

signupbtn.addEventListener("click", () => {
    movebtn.classList.remove("rightbtn");
    signup.classList.add("signupform");
    login.classList.remove("loginform");
    movebtn.innerHTML = "signup";


})