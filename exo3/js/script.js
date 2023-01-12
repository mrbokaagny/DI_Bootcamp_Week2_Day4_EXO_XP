function isDivisible(diviseur) {
    let total = 0;
    for(let i = 0; i<500; i++) {
        if(i%diviseur == 0) {
            console.log(i);
            total+=i;
        }
    }
    console.log(`la somme est ${total}`);
}


isDivisible(45)