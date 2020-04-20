import arrayData from '../assets/immageData.js';


export default function tableRow(array) {
   
    const tr = document.createElement('tr');

    let m = array;
    const nameTd = document.createElement('td');
    let n = gitName(m);
    nameTd.textContent = n;
    
    
    const timesViewed = document.createElement('td');
    timesViewed.textContent = array.timesViewed;

    const votes = document.createElement('td');
    votes.textContent = array.votes;


    tr.appendChild(nameTd);
    tr.appendChild(timesViewed);
    tr.appendChild(votes);

    return tr;
}


function gitName(nameId)
{
    let names = ' ';
    for (let i = 0; i < arrayData.length; i++) { 
        
        if (arrayData[i].id === nameId.id){
            names = arrayData[i].name;
            return names;
        }
    };
    return null;
    

}