
async function loadUserData(){
    const responseG = await fetch('../php/app_main.php');
    const data = await responseG.json();
    return data.imie ;
}
async function init(){
    const data = await loadUserData();
const welcomeUser = document.getElementById("welcome-user");
welcomeUser.innerHTML = `
    <h1>Witaj ${data}!</h1>
`;
}
init()


