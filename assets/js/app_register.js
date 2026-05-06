const btnRegister = document.getElementById('btn-register');

btnRegister.addEventListener("click",async (e) => {
    e.preventdefault();
    const loginName = document.getElementById('login-name').value;
    const loginEmail = document.getElementById('login-email').value;
    const loginPassword = document.getElementById('login-password').value;
    const loginPasswordConfirm = document.getElementById('login-confirm-password').value;
    
    const user = {
        imie: loginName,
        email: loginEmail,
        haslo: loginPassword
    }
    await fetch("app_register.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
        
    });
    
});