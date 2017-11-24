// Write a function `joinArray` and implement it using `reduce`:
// * Input: an array AND a string separator
// * Output: a string with each elements separated by the `separator`
//
// eg: join(["zero", "one", "two"], "-") => "zero - one - two"


// ⚠ Do not remove me ! It's for tests
// eslint-disable-next-line




function joinArray(array,str) {
  const resultat = array.reduce((accumulator, currentValue) => accumulator + str + currentValue);
  return resultat;
}

const tableau=["zero", "one", "two"];

console.log(joinArray(tableau,"-"));
module.exports = joinArray;
