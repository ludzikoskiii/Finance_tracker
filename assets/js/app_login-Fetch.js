import { validateLogin } from "../js/app_login-Validation.js";
const btn = document.getElementById("btn-register");



btn.addEventListener('click', () => {
    window.location.href = "./register.html";
})
const loginForm = document.querySelector('.login-form');
loginForm.addEventListener("submit",async (e) => {
    e.preventDefault();
   
    const loginEmail = document.getElementById('login-email').value;
    const loginPassword = document.getElementById('login-password').value;
    
    const blockEmail = document.querySelector('.block-0');
    const blockPassword = document.querySelector('.block-1');
    const user = {
        email: loginEmail,
        password: loginPassword,
    }
    const errorsArr = {
        blockEmail1: blockEmail,
        blockPassword1: blockPassword,
    }
    validateLogin(user,errorsArr);
});