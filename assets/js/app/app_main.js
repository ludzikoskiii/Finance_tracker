
async function loadUserData(){
    const responseG = await fetch('../../php/app/app_main.php');
    const data = await responseG.json();
    return data ;
}
async function loadBudget(){
    const responseG = await fetch('../../php/app/app_blocks.php');
    const data = await responseG.json();
    return data ;
}
async function init(){
    const data = await loadUserData();
    const budget = await loadBudget();
const welcomeUser = document.getElementById("welcome-user");
welcomeUser.innerHTML = `
    <h1>Witaj ${data.imie}!</h1>
`;
console.log(data);
console.log(budget);
}
init()


