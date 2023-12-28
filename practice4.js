//Why the modulo operator?


function howManyHundreds(bottles) {

  let shipment = bottles / 100


  let crates = Math.trunc(Math.floor(shipment));

  return crates;

}

console.log(howManyHundreds(110));
