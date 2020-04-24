
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

function putInTable(ansers, td){
    for (let i = 0; i < ansers.length; i++) {
        td.append(tableCreate(ansers[i]));
    }
}


