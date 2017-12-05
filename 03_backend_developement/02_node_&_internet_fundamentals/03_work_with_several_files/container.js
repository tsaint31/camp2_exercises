
let litersOfCoffee=0;

function putLitersOfCoffee(numberOfLiters) {
  litersOfCoffee=litersOfCoffee+numberOfLiters;
  return litersOfCoffee;
}


function consumeLitersOfCoffee(numberOfLiters) {
  if (litersOfCoffee>=numberOfLiters) {
    litersOfCoffee=litersOfCoffee-numberOfLiters;
    return true;
  }
  else {return false;}
}


module.exports = {
  consumeLitersOfCoffee: consumeLitersOfCoffee,
  putLitersOfCoffee: putLitersOfCoffee
};
