import { loadBudget } from "./dbFunctions/loadBudget.js";
const ctx = document.getElementById('financeChart');

async function setupChart() {
  try {
    let arrDate = [];
    let arrBudget = [];
    const budgetData = await loadBudget();
    console.log("Loaded budget data:", budgetData);
     for(let i = 0; i <= budgetData.budget.length; i++){
    arrBudget += `'${budgetData.budget[i].kwota}',`;
    arrDate += `${budgetData.budget[i].data_transakcji},`;
    return { arrDate, arrBudget };
  }
  
  } catch (error) {
    console.error("Error loading budget data:", error);
  }
  
}
const data = await setupChart();
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: data.arrDate,
    datasets: [{
      label: 'Budget',
      data: data.arrBudget,
      borderColor: 'red',
      backgroundColor: 'rgba(0, 0, 255, 0.5)',
      tension: 0.3
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true
      }
    }
  }
});
