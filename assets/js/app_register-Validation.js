
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
   
    
     // export function validateRegister(data){
    //     const errorsTab = [];
    // if(!data[0]){
    //     errorsTab[0] = "Nie podano imienia";
    // }
    // if(!data[1]){
    //     errorsTab[1] = "Nie podano adresu e-mail";
    // }
    // if(!data[2]){
    //     errorsTab[2] = "Nie podano hasła";
    // }
    // if(!data[2]){
    //     errorsTab[2] = "Powtórz hasło";
    // }
    // return errorsTab;
    // }