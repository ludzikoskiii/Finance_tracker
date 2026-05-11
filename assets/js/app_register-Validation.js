
    export function validateRegister(data,errorsArr){
        const errorsTab = {
            name: 1,
            email: 1,
            password: 1,
            confirmPassword: 1,
    };
    let isGood = true;
    const regextestEmail = (email) => {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexEmail.test(email);
    }
    if(!data.name || data.name.trim() === ""){
        errorsArr.blockName1.innerHTML = "";
        let el = document.createElement('p');
        el.innerText = "No name entered";
        errorsArr.blockName1.appendChild(el);
    }else if(data.name.trim().length < 3 || data.name.trim().length > 15){
        errorsArr.blockName1.innerHTML = "";
        let el = document.createElement('p');
        el.innerText = "The name should be between 3 and 15 letters long";
        errorsArr.blockName1.appendChild(el);
    }else{
        errorsArr.blockName1.innerHTML = "";
        errorsTab.name = 0;
    }
     if(!data.email || data.email.trim() === ""){
        errorsArr.blockEmail1.innerHTML = "";
       let el = document.createElement('p');
        el.innerText = "No email address entered";
        errorsArr.blockEmail1.appendChild(el);
     }else if(!regextestEmail(data.email)){
        errorsArr.blockEmail1.innerHTML = "";
        let el = document.createElement('p');
        el.innerText = "Invalid email address";
        errorsArr.blockEmail1.appendChild(el);
     }else{
        errorsArr.blockEmail1.innerHTML = "";
        errorsTab.email = 0;
    }
     if(!data.password || data.password.trim() === ""){
        errorsArr.blockPassword1.innerHTML = "";
         let el = document.createElement('p');
        el.innerText = "No password address entered";
        errorsArr.blockPassword1.appendChild(el);
     }else if(data.confirmPassword != data.password){
        errorsArr.blockPassword1.innerHTML = "";
        let el = document.createElement('p');
        el.innerText = "The passwords do not match";
        errorsArr.blockPassword1.appendChild(el);
     }
     else{
        errorsArr.blockPassword1.innerHTML = "";
        errorsTab.password = 0;
    }
     if(!data.confirmPassword || data.confirmPassword.trim() === ""){
        errorsArr.blockConfirmPassword1.innerHTML = "";
         let el = document.createElement('p');
        el.innerText = "No confirm password entered";
        errorsArr.blockConfirmPassword1.appendChild(el);
     }else if(data.confirmPassword != data.password){
        errorsArr.blockConfirmPassword1.innerHTML = "";
        let el = document.createElement('p');
        el.innerText = "The passwords do not match";
        errorsArr.blockConfirmPassword1.appendChild(el);
     }
     else{
        errorsArr.blockConfirmPassword1.innerHTML = "";
        errorsTab.confirmPassword = 0;
    }
    
     for(let key in errorsTab){
        if(errorsTab[key] === 1){
            isGood = false;
            break;
         }
        }
        return isGood;
    }
   

    
    