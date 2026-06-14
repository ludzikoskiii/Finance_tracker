import { loadBudget } from "./dbFunctions/loadBudget.js";
//pobranie elementu w ktorym bedzie wyswietlala sie suma przychodow
const incomeSum = document.getElementById('income-sum');
//funkcja dodajaca kwoty do siebe
async function incomeSumFn(){
    try{
        const budgetData = await loadBudget();
        const budget = budgetData.incomes;
        let sum = 0;
        budget.forEach(element => {
            sum += Number(element.kwota);
        });
    return sum;
    }
    catch(error){
        console.error("Error loading budget data:", error);
    }
}
//wyswietlanie sumy przychodow
const sum = await incomeSumFn();
incomeSum.innerHTML = `<p>Income sum: ${sum}</p>`;

