import { loadUserData } from "./dbFunctions/loadUserData.js";
import { loadBudget } from "./dbFunctions/loadBudget.js";
import { loadPiggyBank } from "./dbFunctions/loadPiggyBank.js";
import { countMoney } from "./countMoney.js";
import { loadFamily } from "./dbFunctions/loadFamily.js";

async function init(){
    const data = await loadUserData();
    const budget = await loadBudget();
    const piggyBank = await loadPiggyBank();
    const family = await loadFamily();

    if(budget.budget){

        const block1 = document.getElementById("block-1");
        const elBlock1 = document.createElement("div");

        elBlock1.innerHTML = `<h2>${budget.budget}</h2>`;

        block1.appendChild(elBlock1);
    }
    else{
        const block1 = document.getElementById("block-1");
        const elBlock1 = document.createElement("div");
        elBlock1.innerHTML = `<h2 style="color: red;">No budget found</h2>`;
        block1.appendChild(elBlock1);
    }

    if(budget.expenses){

        const block2 = document.getElementById("block-2");
        const elBlock2 = document.createElement("div");

        elBlock2.innerHTML = `<h2>${budget.expenses}</h2>`;

        block2.appendChild(elBlock2);
    }else
    {
        const block2 = document.getElementById("block-2");
        const elBlock2 = document.createElement("div");
        elBlock2.innerHTML = `<h2 style="color: red;">No expenses found</h2>`;
        block2.appendChild(elBlock2);
    }

    if(piggyBank.piggyBank){
        const piggyBankCount = piggyBank.piggyBank;

        const block3 = document.getElementById("block-3");
        const elBlock3 = document.createElement("div");

        elBlock3.innerHTML = `<h2>${piggyBankCount}</h2>`;

        block3.appendChild(elBlock3);
    }else{
        const block3 = document.getElementById("block-3");
        const elBlock3 = document.createElement("div");
        elBlock3.innerHTML = `<h2 style="color: red;">Piggy bank is empty</h2>`;
        block3.appendChild(elBlock3);
    }
    if(family.haveFamily !== undefined){
        
            const block4 = document.getElementById("block-4");
            const elBlock4 = document.createElement("div");
        if(parseInt(family.haveFamily) == 1){
            elBlock4.innerHTML = `<h2>Masz rodzinę</h2>
            <p>Nazwa rodziny: ${family.familyName}</p>
            <p>Budżet rodziny: ${family.familyBudget}</p>
            `;
        }else{
            elBlock4.innerHTML = `<h2 style="color: red;">No family found</h2>`;
        }
        block4.appendChild(elBlock4);
    }
    const welcomeUser = document.getElementById("welcome-user");

    welcomeUser.innerHTML = `
        <h1>Witaj ${data.imie}!</h1>
    `;
}

init();

