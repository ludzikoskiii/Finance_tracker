window.addEventListener('load', async () => {

    const response = await fetch('../../php/finances/finances_transaction.php');

    const result = await response.json();

    const transactions = result.transactions;

    const labels = transactions.map((item, index) => `Day ${index + 1}`);

    const amounts = transactions.map(item => Number(item.kwota));

    const ctx = document.getElementById('financeChart');

    new Chart(ctx, {

        type: 'bar',

        data: {
            labels: labels,

            datasets: [{
                data: amounts,
                backgroundColor: '#8b5cf6',
                borderRadius: 12
            }]
        }
    });
});