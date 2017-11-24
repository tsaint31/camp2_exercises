// Create a function `double` which take an array of integer as parameter and return a new array with all values doubled.
// WARNING: You're not allowed to use `Array.map`!

// Your code here...

// Do not remove last lines, it is for tests
// eslint-disable-next-line

function doubleSingle(number) {
  return number*2;
}

function double(array) {
  let resultat=[];
  for (let i=0 ; i < array.length ; i++)
  { resultat.push(doubleSingle(array[i]));
  }
  return resultat;
}

const suite = [0,1,2,3];

console.log(double(suite));

module.exports = double;
