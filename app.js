import { getId, compairId, randomId } from './utils.js';
import products from './assets/immageData.js';
const immageTag = document.querySelectorAll('img');
const itemRadioTags = document.querySelectorAll('input');
const butteSubmit = document.getElementById('submitShit');
const x = document.getElementsByClassName('items-selecton');
const things = document.getElementById('stuff');

let selection = [];
let lookedAt = [];
let idNumber;
let idNumber2;
let idNumber3;

getRadeioValue();

let numberOne = addImage(idNumber);
let numbertwo = addImage(idNumber2);
let numberthree = addImage(idNumber3);

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
    const img = 'assets/' + item.img;
    return item;
}


//generate immages 
///display by id and check

//submit immages

//check what the aswer was and save it


//do it again for 24 more times

