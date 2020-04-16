
const voteItem = [{
    id: 0,
    timesViewed: 0,
    votes: 0
}];

export function incrementTimesSeen(_id) {
    let voteItem = getId(_id);
    if (!voteItem) {
        addInitialVoteItem(_id);
        voteItem = getId(_id);
    }
    voteItem.timesViewed++;
}

export function incrementTimesPicked(id) {
    let voteItem = getItem(id);
    if (!voteItem) {
        addInitialVoteItem(id);
        voteItem = getItem(id);
    }
    voteItem.votes++;
}

function addInitialVoteItem(id, votes) {
    const voteItem = {
        id: id,
        timesViewed: 0,
        votes: 0
    };
    votes.push(voteItem);
}

function getItem(id){
    for (let i = 0; i < voteItem.length; i++) {
        let element = 0;
        if (voteItem[i].id === id){
            element = i;
        }
    }
    return element;

}