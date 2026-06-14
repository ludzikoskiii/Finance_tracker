//import funkcji loadBudget pobierajacej budzet z bazy
import { loadBudget } from "./dbFunctions/loadBudget.js";
//pobranie elementu w ktorym bedzie znajdowal sie wykres
const ctx = document.getElementById('financeChart');

//funkcja sluzaca do wstawienia do tablicy danych pobranych z bazy
async function setupChart() {
  try {
    const budgetData = await loadBudget();
    //deklaracja danych pobranych z bazy
    const budget = budgetData.budget;

    //sortowanie danych wedlug daty od najmniejszego
       let sortedData = budget.sort((a, b) => {
        new Date(a.data_transakcji) - new Date(b.data_transakcji)
    })
     
    //deklaracja rozdzielonych tablic z danymi
    let sortedLabelArr = [];
    let sortedDateArr = [];
    //rozdzielenie danych 
   sortedData.forEach(element => {
    sortedLabelArr.push(element.kwota);
    sortedDateArr.push(element.data_transakcji.split("-"));
   });
    
    return {sortedLabelArr, sortedDateArr};
  } 
  catch (error) {
    console.error("Error loading budget data:", error);
  }
}
//zdefiniowanie zmiennej zawierajacej dane z bazy
const data = await setupChart();
const sortedLabelArr = data.sortedLabelArr;
const sortedDateArr = data.sortedDateArr;
//tworzenie dzialajacego wykresu
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: sortedDateArr.map(el =>  el[2]),
    datasets: [{
      label: 'Income',
      data: sortedLabelArr.map(el =>  el),
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
