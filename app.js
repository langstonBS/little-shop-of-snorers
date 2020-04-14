import { getId, compairId, randomId } from './utils.js';
import products from './assets/immageData.js';
const itemImmages = document.querySelectorAll('img');
const butteSubmit = document.getElementById('submitShit');
let selection;
let lookedAt;
let idNumber;
let idNumber2;
let idNumber3;

getRadeioValue();
console.log(idNumber);
console.log(idNumber2);
console.log(idNumber3);
addImage(idNumber);
addImage(idNumber2);
addImage(idNumber3);

function getRadeioValue(){
    idNumber = randomId();
    do {
        idNumber2 = randomId();
    } while (idNumber === idNumber2);
    do {
        idNumber3 = randomId();
    } while (idNumber === idNumber2 && idNumber === idNumber3);
}


function addImage(id){
    const item = getId(products, id);
    const image = 'assets/' + item.img;
    const name = item.name;
}


//generate immages 
///display by id and check

//submit immages

//check what the aswer was and save it


//do it again for 24 more times

