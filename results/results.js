
import tableCreate from './table.js';
import { incrementTimesSeen, incrementTimesPicked, loging, createLocalStorage } from '../saveForLocalStorage.js';

let td = document.getElementById('table');
let tdFull = document.getElementById('full');


let questInfo = getItemsFromJSON();
 
putInTable(questInfo, td);
clearLocalData(questInfo);
let fullData = allTimeUse();

putInTable(fullData, tdFull);
clearLocalData(fullData);




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

function putInTable(ansers, td){
    for (let i = 0; i< ansers.length; i++) {
        td.append(tableCreate(ansers[i]));
    }
}

