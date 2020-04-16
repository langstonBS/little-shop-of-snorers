import { getId, randomId } from './utils.js';
import products from './assets/immageData.js';
import { incrementTimesSeen, incrementTimesPicked } from './saveForLocalStorage.js'; 
const immageTag = document.querySelectorAll('img');
const itemRadioTags = document.querySelectorAll('input');
const butteSubmit = document.getElementById('submitShit');


//incrament this id

//store it in local storage

let Selection = [];
let viewed = [];
let buttenClicks = 0;
let idNumber;
let idNumber2;
let idNumber3;
getRadeioValue();
let item1 = gitItem(idNumber);
let item2 = gitItem(idNumber2);
let item3 = gitItem(idNumber3);

let numberOneImg = addImage(item1);
let numbertwoImg = addImage(item2);
let numberthreeImg = addImage(item3);
placeInViewd();
placeImageRaideo();
placeValueRaidio();


butteSubmit.addEventListener('click', () => {
    const user = document.querySelector('input:checked');  
    if (user){
        buttenClicks += 1;
    }
    appFuntion(user);
    console.log("nuber of times is", buttenClicks);
    
    if (buttenClicks > 24){
        //window.location = './results/results.html';
        console.log("we hve done 25 times");
        console.log("this is what was selected: ", Selection);
        console.log("this is what was viewd: ", viewed);
        viewedItmesLocalStorage();

    }
});


function appFuntion(user) {
    placeInSlection(user.value);
    getRadeioValue();
    item1 = gitItem(idNumber);
    item2 = gitItem(idNumber2);
    item3 = gitItem(idNumber3);
    placeInViewd();
    numberOneImg = addImage(item1);
    numbertwoImg = addImage(item2);
    numberthreeImg = addImage(item3);
    placeImageRaideo();
    placeValueRaidio();
}

function placeInSlection(value){
    const valueIdFind = parseInt(value);
    const item = gitItem(valueIdFind);
    Selection.push(item.id);
}

function placeInViewd(){
    viewed.push(item1.id);
    viewed.push(item2.id);
    viewed.push(item3.id);
}


function placeImageRaideo() {
    immageTag[0].src = numberOneImg;
    immageTag[1].src = numbertwoImg;
    immageTag[2].src = numberthreeImg;
}


function placeValueRaidio() {
    itemRadioTags[0].value = item1.id;
    itemRadioTags[1].value = item2.id;
    itemRadioTags[2].value = item3.id;
}   


function getRadeioValue(){
    
    idNumber = randomId();
    do {
        idNumber2 = randomId();
    } while (idNumber === idNumber2);
    do {
        idNumber3 = randomId();
    } while (idNumber === idNumber2 || idNumber === idNumber3 || idNumber2 === idNumber3);
}

function gitItem(id) {
    const item = getId(products, id);
    return item;
}

function addImage(item){ 
    const location = 'assets/' + item.img + '';
    return location;
}

function itmesLocalStorage(){
    for (let i = 0; i < viewed.length - 3; i++)
    {
        incrementTimesSeen(viewed[i]);

    }
    for (let i = 0; i < Selection.length; i++) {
        Selection[i];
        
    }

}
