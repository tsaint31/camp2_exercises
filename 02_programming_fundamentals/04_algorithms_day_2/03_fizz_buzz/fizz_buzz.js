/* Implement a fizzBuzz function as such: `fizzBuzz(list)`, where `list` is an array
   of positive integers, for example : `[1, 2, 3, 4, 5, 6]`.
   This function will return a new array where some values will have been modified:

   - if the number is divisible by 3: `Fizz`;
   - if the number is divisible by 5: `Buzz`;
   - if the number is divisible by 3 and 5 : `FizzBuzz`
   - otherwise, the value is preserved.
*/

function fizzBuzz(list) {
  let resultat=[];
  for (let i=0; i<list.length; i++) {
    if (Number.isInteger(list[i]/3) && Number.isInteger(list[i]/5)) {
      resultat.push("FizzBuzz");
    }
    else if (Number.isInteger(list[i]/3)) {
      resultat.push("Fizz");
    }
    else if (Number.isInteger(list[i]/5)) {
      resultat.push("Buzz");
    }
    else {
      resultat.push(list[i]);
    }
  }
  return resultat;
}
console.log(fizzBuzz([1,3,5,15]));

module.exports = fizzBuzz;
