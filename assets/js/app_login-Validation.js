
    export function validateLogin(data,errorsArr){
         const errors = {
            email: 1,
            password: 1,
    };
    let isGood = true;
    const regextestEmail = (email) => {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexEmail.test(email);
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
        errors.email = 0;
    }
     if(!data.password || data.password.trim() === ""){
        errorsArr.blockPassword1.innerHTML = "";
         let el = document.createElement('p');
        el.innerText = "No password address entered";
        errorsArr.blockPassword1.appendChild(el);
     }
     else{
        errorsArr.blockPassword1.innerHTML = "";
        errors.password = 0;
    }
    for(let key in errors){
        if(errors[key] === 1){
            isGood = false;
            break;
         }
        }
       return isGood;
    }
     
   
    
    