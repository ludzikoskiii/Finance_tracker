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
        
        
          const responsePost = await fetch("../php/app_login.php",{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(user)
          });
          const data = await responsePost.json();

           if (!data.error) {

                window.location.href = "./app_start.html";

            } else {

                console.log(data);

            }
        }
    
});  
