function calculateTip() {
    let amountToPay;
    let amount = prompt('Veuillez entrer le montant de la facture ...');

    amount = parseInt(amount)
    
    if(amount > 200) {
        amountToPay = amount + (amount*0.1);
    }
    else if(amount > 50) {
        amountToPay = amount + (amount*0.15);
    }
    else {
        amountToPay = amount + (amount*0.2);
    }

    console.log(`montant est : ${amountToPay}$`);
}

calculateTip();