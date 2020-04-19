
import tableCreate from './table.js';

let td = document.getElementById('table');

let t = getItemsFromJSON();
putInTable(t);



function getItemsFromJSON() {
    const json = localStorage.getItem('VOTES');
    let ansers;
    if (json) {
        ansers = JSON.parse(json);
    } else {
        ansers = [];
    }
    return ansers

}

function putInTable(ansers){
    for (let i = 0; i< ansers.length; i++) {
        td.append(tableCreate(ansers[i]));
    }
}

function clearLocalData(){
    
}