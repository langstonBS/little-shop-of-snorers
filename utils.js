

export function getId(photos, id){

    for (let i = 0; i < photos.length; i++) {
        const photo = photos[i];
   
        if (photo.id === id) {
            return photo;
        }
    }
    return null;
}

export function randomId(){
    return Math.floor(Math.random() * 19) + 1;
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




