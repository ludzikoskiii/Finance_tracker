
    export function validateLogin(data,errorsArr){
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
    }
     if(!data.password || data.password.trim() === ""){
        errorsArr.blockPassword1.innerHTML = "";
         let el = document.createElement('p');
        el.innerText = "No password address entered";
        errorsArr.blockPassword1.appendChild(el);
     }
     else{
        errorsArr.blockPassword1.innerHTML = "";
    }
    for(let key in errorsTab){
        if(errorsTab[key] === 1){
            isGood = false;
            break;
         }
        }
        return isGood;
    }
   
    
    