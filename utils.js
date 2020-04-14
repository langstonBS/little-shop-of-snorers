


export function getId(photos, id){
    // creas a for loop and logs throg
    // loop the array
    for (let i = 0; i < photos.length; i++) {
        const photo = photos[i];
               // check the id against item.id
        if (photo.id === id) {
            return photo;
        }
    }
    return null;
}

export function randomId(){
    return Math.floor(Math.random() * 20);
}

export function compairId(array1, array2, i){
    const idOne = array1[i].id;
    const idTwo = array2[i].id;
    if (idOne === idTwo){
        return true;
    } else {
        return false;
    }
}



