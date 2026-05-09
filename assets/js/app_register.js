const loginForm = document.getElementById('login-form');
loginForm.addEventListener("submit",async (e) => {
    e.preventDefault();
    const loginName = document.getElementById('login-name').value;
    const loginEmail = document.getElementById('login-email').value;
    const loginPassword = document.getElementById('login-password').value;
    const loginPasswordConfirm = document.getElementById('login-confirm-password').value;
    if(!loginEmail){
        console.log("Brak adresu e-mail");
        return;
    }
    const user = {
        imie: loginName,
        email: loginEmail,
        haslo: loginPassword
    }
    async function getData() {
       const response = await fetch('http://localhost/Finance_tracker-main/assets/php/app_register.php'); 
        const data = await response.text();

        console.log(data);
    }
    getData();
    //Sprawdzenie czy uzytkownik o podanym adresie e-mail juz istnieje
    try{
    function checkEmailExists() {
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