
import tableCreate from './table.js';
import { incrementTimesSeen, incrementTimesPicked, loging } from '../saveForLocalStorage.js';



let td = document.getElementById('table');
let tdTotal = document.getElementById('total');

let questInfo = getItemsFromJSON();
let items = getTotalFromJSON();
addtoArray();
putInTable(questInfo, td);
putInTable(items, tdTotal);

addItemsToLocalStorage(items);


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

function addItemsToLocalStorage(ansers) {
    incrementTimesSeen(ansers);
    incrementTimesPicked(ansers);
    loging();
    createLocalStorageTotal();

    
}



function getTotalFromJSON() {
    const json = localStorage.getItem('VOTEITEMS');
    let ansers;
    if (json) {
        ansers = JSON.parse(json);
    } else {
        ansers = [];
    }
    return ansers;

}

function createLocalStorageTotal() {
    let stringTheVotes = ' ';
    stringTheVotes = JSON.stringify(items);
    localStorage.setItem('VOTETOTAL', stringTheVotes);
}



function addtoArray() {
 
    for (let i = 0; i < questInfo.length; i++) {
        const info = questInfo[i];
        items.push(info);    
    }
}

