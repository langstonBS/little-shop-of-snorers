
import tableCreate from './table.js';

let td = document.getElementById('table');


let questInfo = getItemsFromJSON();
 
putInTable(questInfo, td);
clearLocalData(questInfo);

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
    return ansers;

}

function putInTable(ansers, td){
    for (let i = 0; i < ansers.length; i++) {
        td.append(tableCreate(ansers[i]));
    }
}

function clearLocalData(aray){
    localStorage.removeItem('VOTES');
    let data = localStorage.getItem('FULLDATA');
    let stringTheData = '';
    
    if (data){
        data = JSON.parse(data);
    } else {
        data = [];
    }
    stringTheData = JSON.stringify(aray);
    localStorage.setItem('FULLDATA', stringTheData);  
}
