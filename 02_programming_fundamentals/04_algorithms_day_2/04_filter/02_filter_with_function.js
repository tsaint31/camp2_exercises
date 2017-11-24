// filter takes an array of integer and a function of filtering
// such as filter([1, 2, 3, 4, 5], pickEvenNumbers) returns [2, 4]

function pickEvenNumbers(number) {
  if (Number.isInteger(number/2)) {
    return true;
  }
  else
  {return false;}
}

function pickOddNumbers(number) {
  if (!(Number.isInteger(number/2))) {
    return true;
  }
  else
  {return false;}
}


function filter(array, fn) {
  // Your code here
  let resultat=[];
  for (let i=0; i<array.length; i++) {
    if (fn(array[i])) {
      resultat.push(array[i]);}
  }
  return resultat;
}
console.log(filter([1,2,3,4,5], pickEvenNumbers));

// do not remove this line, it is for tests
module.exports = filter;
