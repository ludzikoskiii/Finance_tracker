import { loadBudget } from "./dbFunctions/loadBudget.js";
//pobranie elementu w ktorym bedzie wyswietlala sie suma przychodow
const incomeSum = document.getElementById('income-sum');
const expensesSum = document.getElementById('expenses-sum');
//funkcja dodajaca kwoty do siebe
async function incomeSumFn(){
    try{
        const budgetData = await loadBudget();
        const incomes = budgetData.incomes;
        const expenses = budgetData.expenses;
        let sumIncomes = 0;
        incomes.forEach(element => {
            sumIncomes += Number(element.kwota);
        });
    return sumIncomes;
    }
    catch(error){
        console.error("Error loading budget data:", error);
    }
}
//funkcja dodajaca kwoty do siebe
async function expensesSumFn(){
    try{
        const budgetData = await loadBudget();
        const incomes = budgetData.incomes;
        const expenses = budgetData.expenses;
        let sumExpenses = 0;
        expenses.forEach(element => {
            sumExpenses += Number(element.kwota);
        });
    return sumExpenses;
    }
    catch(error){
        console.error("Error loading budget data:", error);
    }
}
//wyswietlanie sumy przychodow
const sum = await incomeSumFn();
incomeSum.innerHTML = `<p>Income sum: ${sum}</p>`;
//wyswietlanie sumy wydatkow
const sum2 = await expensesSumFn();
expensesSum.innerHTML = `<p>Expenses sum: ${sum2}</p>`;
