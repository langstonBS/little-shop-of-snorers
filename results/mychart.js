import arrayData from '../assets/immageData.js';
var ctx = document.getElementById('myChart').getContext('2d');

let names = [];
let ansers = [];

ansers = getItemsFromJSON();
getName()
chartData()

function chartData() {
    const chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: names,
            datasets: [{
                label: 'Items chosen',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: ansers.
            }]
        },

        // Configuration options go here
        options: {}
    });
}


getName(chart);



function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

function getName(){
    for (let i = 0; i < arrayData.length; i++) 
    {
        names.push(arrayData[i].name);   
    }
}

function getItemsFromJSON() {
    const json = localStorage.getItem('VOTES');
    let ansers;
    if (json) {
        ansers = JSON.parse(json);
    } else {
        ansers = [];
    }
    return ansers;

}