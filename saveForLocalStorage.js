
const voteItem = [{
    id: 0,
    timesViewed: 0,
    votes: 0
}];

export function incrementTimesSeen(_id) {

    for (let i = 0; i < _id.length; i++) {
        
        let idForInc = false;  
        for (let x = 0; x < voteItem.length; x++) {
            if (voteItem[x].id === _id[i]){
                idForInc = true;
                voteItem[x].timesViewed++; 
            }    
        }

        if (!idForInc){
            addInitialVoteItem(_id[i]);
            idForInc = false;
        }

    }
}

export function incrementTimesPicked(_id) {
    for (let i = 0; i < _id.length; i++) {
            
        for (let x = 0; x < voteItem.length; x++) {
            if (voteItem[x].id === _id[i])
            {
                voteItem[x].votes++; 
            }        
        }  
    }
}

export function loging(){
    let v = 0;
    let p = 0;
    
    for (let x = 0; x < voteItem.length; x++) {
        v = voteItem[x].votes + v;
    } 

    for (let x = 0; x < voteItem.length; x++) {
        p = voteItem[x].timesViewed + p;
    } 
}

function addInitialVoteItem(id) {
    const itemObject = {
        id: id,
        timesViewed: 1,
        votes: 0
    };
    voteItem.push(itemObject);
}

export function createLocalStorage() {
    
    let stringTheVotes = '';
    stringTheVotes = JSON.stringify(voteItem);
    localStorage.setItem('VOTES', stringTheVotes);
}
