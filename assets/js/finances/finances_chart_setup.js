//import funkcji loadBudget pobierajacej budzet z bazy
import { loadBudget } from "./dbFunctions/loadBudget.js";
//pobranie elementu w ktorym bedzie znajdowal sie wykres
const ctx = document.getElementById('financeChart');

//funkcja sluzaca do wstawienia do tablicy danych pobranych z bazy
async function setupChart() {
  try {
    const budgetData = await loadBudget();
    const budget = budgetData.budget;

    
       let sortedData = budget.sort((a, b) => {
        new Date(a.data_transakcji) - new Date(b.data_transakcji)
    })
     
    let sortedLabelArr = [];
    let sortedDateArr = [];
   
    
    console.log(sortedData);
    
    return sortedData;
    
  } catch (error) {
    console.error("Error loading budget data:", error);
  }
  
}
//zdefiniowanie zmiennej zawierajacej dane z bazy
const data = await setupChart();
//tworzenie dzialajacego wykresu
// new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: data.map(el =>  el.data_transakcji),
//     datasets: [{
//       label: 'Income',
//       data: data.map(el =>  el.kwota),
//       borderColor: 'red',
//       backgroundColor: 'rgba(0, 0, 255, 0.5)',
//       tension: 0.3
//     }]
//   },
//   options: {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: true
//       }
//     }
//   }
// });
