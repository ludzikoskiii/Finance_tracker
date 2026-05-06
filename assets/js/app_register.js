const loginForm = document.getElementById('login-form');
loginForm.addEventListener("submit",async (e) => {
    e.preventDefault();
    const loginName = document.getElementById('login-name').value;
    const loginEmail = document.getElementById('login-email').value;
    const loginPassword = document.getElementById('login-password').value;
    const loginPasswordConfirm = document.getElementById('login-confirm-password').value;
    
    const user = {
        imie: loginName,
        email: loginEmail,
        haslo: loginPassword
    }
   const response = await fetch("http://localhost/Finance_tracker-main/assets/php/app_register.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
        
    });
    const data = await response.json();
    console.log(data);
});