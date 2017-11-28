// Implements the `pow` function
// It takes two arguments and returns the first value
// at the power of the second value
//
// for instance pow(2,8) = 256

let resultat=1;

function pow(number, power) {
  // Your code here
  for (let i=0; i<power;i++){
    resultat=resultat*number;
    console.log(resultat);
  }
  return resultat;
}

pow(2,8);
console.log(Math.pow(2,8));
// do not remove this line, it is for tests
module.exports = pow;
