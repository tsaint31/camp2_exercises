const container = require("./container");

const machine = {
  litersOfCoffee: 0,
  fillWithLitersOfCoffee: function(nbLiter) {
    return container.putLitersOfCoffee(nbLiter);
  },
  expresso: function() {
    return container.consumeLitersOfCoffee(0.08);
  },
  longCoffee: function() {
    return container.consumeLitersOfCoffee(0.15);
  },
};



machine.fillWithLitersOfCoffee(0.5);
console.log(machine.expresso()); // => true
console.log(machine.expresso()); // => true
console.log(machine.longCoffee()); // => true
console.log(machine.longCoffee()); // => true
console.log(machine.longCoffee()); // => false
console.log(machine.expresso()); // => true
console.log(machine.expresso()); // => false



module.exports = machine;
