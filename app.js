import { getId, compairId, randomId } from './utils.js';
import products from './assets/immageData.js';
const immageTag = document.querySelectorAll('img');
const itemRadioTags = document.querySelectorAll('input');
const butteSubmit = document.getElementById('submitShit');

let selection = [];
let lookedAt = [];

let idNumber;
let idNumber2;
let idNumber3;
let idPastNuber
let idPastNuber2;
let idPstnumber3;




//do wiled not ===25
getRadeioValue();
//commpare pased nubers

let numberOneImg = addImage(idNumber);
let numbertwoImg = addImage(idNumber2);
let numberthreeImg = addImage(idNumber3);

placeImageRaideo();
placeValueRaidio();
appendVewArray(idNumber, idNumber2, idNumber3);

butteSubmit.addEventListener('click', () => {
    while (selection.length < 25){
        const user = document.querySelector('input:checked');
        selection.push(user.value); 
        getRadeioValue(); 
        numberOneImg = addImage(idNumber);
        numbertwoImg = addImage(idNumber2);
        numberthreeImg = addImage(idNumber3);
        placeImageRaideo();
        placeValueRaidio();
        console.log("I am a arrayview", selection);
        appendVewArray(idNumber, idNumber2, idNumber3);
    }
    putInLocalStorage();
});

function placeImageRaideo() {
    immageTag[0].src = numberOneImg;
    immageTag[1].src = numbertwoImg;
    immageTag[2].src = numberthreeImg;
}

function placeValueRaidio() {
    itemRadioTags[0].value = idNumber;
    itemRadioTags[1].value = idNumber2;
    itemRadioTags[2].value = idNumber3;
}   

function appendVewArray(one, two, three) {
    lookedAt.push(one);
    lookedAt.push(two);
    lookedAt.push(three);
    console.log("I am a lookat", lookedAt);
}


function getRadeioValue(){
    
    idNumber = randomId();
    do {
        idNumber2 = randomId();
    } while (idNumber === idNumber2);
    do {
        idNumber3 = randomId();
    } while (idNumber === idNumber2 || idNumber === idNumber3 || idNumber2 === idNumber3);
    return idNumber, idNumber2, idNumber3;
}


function addImage(id){
    const item = getId(products, id);  
    const img = item.img;
    const location = 'assets/' + img + '';
    console.log(location);

    return location;
}

function putInLocalStorage(){
    let userChouice = localStorage.getItem('USER');
    let viewedItems = localStorage.getItem('DISPLAY');
    userChouice = Array.from(selection);
    viewedItems = Array.from(lookedAt);
    JSON.stringify(userChouice);
    JSON.stringify(viewedItems);
    
    localStorage.setItem('USER', userChouice);
    localStorage.setItem('DISPLAY', viewedItems);
}

//
//generate immages 
///display by id and check

//submit immages

//check what the aswer was and save it


//do it again for 24 more times