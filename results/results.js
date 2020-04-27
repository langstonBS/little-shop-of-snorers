
import tableCreate from './table.js';




let td = document.getElementById('table');

let questInfo = getItemsFromJSON();
putInTable(questInfo, td);


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

function putInTable(_ansers, td){
    for (let i = 0; i < _ansers.length; i++) {
        td.append(tableCreate(_ansers[i]));
    }
}





var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: [],
        datasets: [{
            label: 'voteItem',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [questInfo]
        }]
    },

    // Configuration options go here
    options: {}
});


