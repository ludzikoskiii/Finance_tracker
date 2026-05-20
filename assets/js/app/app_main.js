
function countMoney(data){
    let arrBudget = 0;

    arrBudget += parseFloat(data.kwota);
    return arrBudget;
}
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
    if(budget.budget){
        const budgetCount = countMoney(budget.budget);
        const block1 = document.getElementById("block-1");
        const elBlock1 = document.createElement("div");
        elBlock1.innerHTML = `<h2>${budgetCount}</h2>`;
        block1.appendChild(elBlock1);
    }
    if(budget.expenses){
          const budgetCount = countMoney(budget.expenses);
        const block2 = document.getElementById("block-2");
        const elBlock2 = document.createElement("div");
        elBlock2.innerHTML = `<h2>${budgetCount}</h2>`;
        block2.appendChild(elBlock2);
    }
    
const welcomeUser = document.getElementById("welcome-user");
welcomeUser.innerHTML = `
    <h1>Witaj ${data.imie}!</h1>
`;
}
init()


