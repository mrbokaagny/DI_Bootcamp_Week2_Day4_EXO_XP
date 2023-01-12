function changeEnough(itemPrice, amountOfChange) {
    let myPrice = 0;
    let currentTable = [0.25, 0.1, 0.05, 0.01];
    for(let i = 0; i<currentTable.length; i++) {
        myPrice+=(currentTable[i]*amountOfChange[i]);
    }

    if(myPrice >= itemPrice) {
        return true;
    }
    return false;
}

changeEnough(14.11, [2,100,0,0]);