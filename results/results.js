



const json = localStorage.getItem('USER');
console.log(json);
let ansers;
if (json) {
    ansers = json;
}

else {
    ansers = [];
}


console.log(ansers);
