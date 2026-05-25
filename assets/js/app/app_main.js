import { loadUserData } from "./dbFunctions/loadUserData.js";
import { loadBudget } from "./dbFunctions/loadBudget.js";
import { loadPiggyBank } from "./dbFunctions/loadExpenses.js";
import { countMoney } from "./countMoney.js";
loadUserData();
loadBudget();
loadPiggyBank();



async function init(){
    const data = await loadUserData();
    const budget = await loadBudget();
    const piggyBank = await loadPiggyBank();
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
    if(piggyBank.piggyBank){
        const piggyBankCount = countMoney(piggyBank.piggyBank);
        const block3 = document.getElementById("block-3");
        const elBlock3 = document.createElement("div");
        elBlock3.innerHTML = `<h2>${piggyBankCount}</h2>`;
        block3.appendChild(elBlock3);
    }
const welcomeUser = document.getElementById("welcome-user");
welcomeUser.innerHTML = `
    <h1>Witaj ${data.imie}!</h1>
`;
}
init()


