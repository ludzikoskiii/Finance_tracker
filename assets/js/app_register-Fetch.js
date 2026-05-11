import { validateRegister } from "../js/app_register-Validation.js";
const loginForm = document.getElementById('login-form');
loginForm.addEventListener("submit",async (e) => {
    e.preventDefault();
    const loginName = document.getElementById('login-name').value;
    const loginEmail = document.getElementById('login-email').value;
    const loginPassword = document.getElementById('login-password').value;
    const loginPasswordConfirm = document.getElementById('login-confirm-password').value;
    const blockName = document.querySelector('.block-0');
    const blockEmail = document.querySelector('.block-1');
    const blockPassword = document.querySelector('.block-2');
    const blockConfirmPassword = document.querySelector('.block-3');
    console.log(blockName);
    const user = {
        name: loginName,
        email: loginEmail,
        password: loginPassword,
        confirmPassword: loginPasswordConfirm
    }
    const errorsArr = {
        blockName1: blockName,
        blockEmail1: blockEmail,
        blockPassword1: blockPassword,
        blockConfirmPassword1: blockConfirmPassword,
    }
    validateRegister(user,errorsArr);
    //Sprawdzenie czy uzytkownik o podanym adresie e-mail juz istnieje
    try{
    async function checkEmailExists() {
        const responseGet = await fetch(`http://localhost/Finance_tracker-main/assets/php/app_register.php?email=${encodeURIComponent(loginEmail)}`);
        const czyZawiera = await responseGet.json();
       
        if(czyZawiera.exists){
            console.log("Uzytkownik o podanym adresie e-mail juz istnieje");
            return;
        }
        if(czyZawiera.success){
            console.log(czyZawiera.message);
            return;
        }
    }
    checkEmailExists();
}   
    catch(err){
        console.log(err);
        return;
    }
    // Dodawanie uzytkownika
    try {
        const responsePost = await fetch(
            "http://localhost/Finance_tracker-main/assets/php/app_register.php",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            }
        );
        const data = await responsePost.json();
        console.log(data);
    }
    catch(err){
        console.log(err);
        return;
    }
});