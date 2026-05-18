import { validateLogin } from "../js/app_login-Validation.js";
const btn = document.getElementById("btn-register");

btn.addEventListener('click', () => {
    window.location.href = "./register.html";
})
const loginForm = document.getElementById('login-form');
loginForm.addEventListener("submit",async (e) => {
    e.preventDefault();
    const loginEmail = document.getElementById('login-email').value;
    const loginPassword = document.getElementById('login-password').value;
    
    const blockEmail = document.querySelector('.block-0');
    const blockPassword = document.querySelector('.block-1');
    const user = {
        email: loginEmail,
        password: loginPassword
    }
    const errorsArr = {
        blockEmail1: blockEmail,
        blockPassword1: blockPassword,
    }
    // validateLogin(user,errorsArr);
    const result = validateLogin(user, errorsArr);
    if(result === true){
        async function loadUserData() {
            const responseGet = await fetch(`../php/app_login.php?email=${encodeURIComponent(user.email)}&haslo_hash=${encodeURIComponent(user.password)}`);
            const data = await responseGet.json();
           return data;
        }
        async function loginUser(){
          const responsePost = await fetch("../php/app_login.php",{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(user)
          });
        }
        const data = loadUserData()
    
    if(data){
        window.location.href = "./app_start.html";
    }
    
    // if(data.success){
    //     window.location.href = "./main.htm"
    // }
    
    }else{
        console.log("Dane niepoprawne, popraw błędy przed wysłaniem formularza");
    }
});