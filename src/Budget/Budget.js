import React from 'react';
import Axios from 'axios';
import Chart from 'chart.js'

function Budget() {

    
    getBudget();
    return (
    
        <article className="text-box">
                    <h1>Chart</h1>
                    <p>
                        <canvas id="myChart" width="400" height="400"></canvas>
                    </p>
        </article>
    );
}

//data source
const dataSource = {
    datasets: [{
        data: [30, 500, 90],
        backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
],
}],


labels: [
    'Eat out',
    'Rent',
    'Groceries'
]
};
function createChart(){
    var ctx = document.getElementById('myChart').getContext('2d');
    var myPieChart = new Chart(ctx, {
        type:'pie',
        data: dataSource
    });
};

function getBudget(){
    Axios.get('http://localhost:3000/budget')
    .then(function(res){
        console.log(res.data);
        const budgetData = res.data.budget.myBudget;

        for(var i =0; i<budgetData.length; i++){
            
            dataSource.datasets[0].data[i]=budgetData[i].budget;
            dataSource.labels[i] = budgetData[i].title
        }
        
        createChart();
        
    });
};

export default Budget;