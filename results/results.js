
import tableCreate from './table.js';
import arrayData from '../assets/immageData.js';


let td = document.getElementById('table');

let name = [];
let voteCoiceCount = [];
let seenItemCount = []; 

let questInfo = getItemsFromJSON();
getChartData(questInfo)
 
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


function clearLocalData(){
    localStorage.removeItem('VOTES');
}

function getChartData(arrayI)
{
    for (let i = 0; i < arrayI.length; i++) {
        voteCoiceCount.push(arrayI[i].votes);
        seenItemCount.push(arrayI[i].timesViewed)
        name.push(gitName(arrayI[i].id))
    }
    console.log(voteCoiceCount);
    console.log(seenItemCount);
    console.log(name);

}

function gitName(nameId)
{
    let name = ' ';
    for (let i = 0; i < arrayData.length; i++) { 
        
        if (arrayData[i].id === nameId.id){
            name = arrayData[i].name;
            return name;
        }
    }
    return null;
    

}