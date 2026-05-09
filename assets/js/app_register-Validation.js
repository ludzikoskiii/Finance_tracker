
    export function validateRegister(data){
        const errorsTab = {
    };
    if(!data.name){
        errorsTab.name = "Nie podano imienia";
    }
    if(!data.email){
        errorsTab.email = "Nie podano adresu e-mail";
    }
    if(!data.password){
        errorsTab.password = "Nie podano hasła";
    }
    if(!data.confirmPassword){
        errorsTab.confirmPassword = "Powtórz hasło";
    }
    return errorsTab;
    }
   
    
    