
function hotelCost() {
    let nbreNuit;
    do{
        nbreNuit = prompt("Combien de nuits avez-vous passées dans notre hôtel ? :");
    }while(nbreNuit.length == 0 || isNaN(nbreNuit))

    return Number(nbreNuit) * 140;
}

hotelCost();

function planeRideCost() {
    let destination;
    do{
        destination = prompt("Quelle est votre destination? : ");
    }
    while(destination.length == 0 || !isNaN(destination))

    if(destination === "Londres"){
        return 183;
    }
    else if(destination === "Paris"){
        return 220;
    }
    return 300;
}

function rentalCarCost() {

    let nbreLocation;
    do{
        nbreLocation = prompt("Combien de jours pour localiser une voiture :");
    }while(nbreLocation.length == 0 || isNaN(nbreLocation))

    if(nbreLocation > 10) {
        let priceToReduce = nbreLocation*40*0.05;
        return nbreLocation*40 - priceToReduce;
    }
    return Number(nbreLocation)*40;
}

function totalVacationCost() {
    return hotelCost() + planeRideCost() + rentalCarCost();
}

totalVacationCost();