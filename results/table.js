



function createSelecrtion(items, frog, iterator) {
    const inputStrt = document.createElement('INPUT');


    const nameB = document.createElement('name');
    nameB.textContent = 'items';


    const typeB = document.createElement('type');
    typeB.textContent = 'raideo';

    const priceTd = doument.createElement('value');
    priceTd.textContent = readablePrice(items.id);

    const totalTd = document.createElement('td');
    const totalPrice = (frog.price * cartItem[iterator].quantity);
    totalTd.textContent = readablePrice(totalPrice);
    totalTd.classList.add('line-item-total');

    typeB.appendChild(quantityTd);
    nameB.appendChild(nameTd);
    tr.appendChild(quantityTd);
    tr.appendChild(priceTd);
    tr.appendChild(totalTd);

    return tr;
}
