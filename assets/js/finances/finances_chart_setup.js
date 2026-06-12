import loadBudget from "../dbFunctions/loadBudget.js";
const ctx = document.getElementById('financeChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['1', '2', '3', '4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
    datasets: [{
      label: 'Budget',
      data: [12, 19, 3, 5],
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
