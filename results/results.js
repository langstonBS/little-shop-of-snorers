



const json = localStorage.getItem('DISPLAY');
let ansers = [];
if (json) {
    ansers = JSON.parse(json);
}

else {
    ansers = [];
}


console.log(ansers);
