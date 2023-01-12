const stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}

const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
}

let shoppingList = ["banana", "orange", "pomme"];

function myBill() {
    let total = 0;
    for(let i of shoppingList) {
        if(typeof(stock[i]) != 'undefined' && stock[i] > 0) {
            total+=prices[i];
            stock[i]-=1;
        }
    }
    return total;
}

myBill();