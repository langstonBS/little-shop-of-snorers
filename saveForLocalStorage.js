import { getId } from './utils.js';


export function incrementTimesSeen(_id, _votes) {
    let voteItem = getId(votes, _id);
    if (!voteItem) {
        addInitialVoteItem(_id, _votes);
        voteItem = getId(votes, _id);
    }
    voteItem.timesViewed++;
}

export function incrementTimesPicked(id, votes) {
    let voteItem = getId(votes, id);
    if (!voteItem) {
        addInitialVoteItem(id, votes);
        voteItem = getId(votes, id);
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
