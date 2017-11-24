/* Implement a fizzBuzz function as such: `fizzBuzz(list)`, where `list` is an array
   of positive integers, for example : `[1, 2, 3, 4, 5, 6]`.
   This function will return a new array where some values will have been modified:
   - if the number is divisible by 3: `Fizz`;
   - if the number is divisible by 5: `Buzz`;
   - if the number is divisible by 3 and 5 : `FizzBuzz`
   - otherwise, the value is preserved.

   YOU MUST USE array.map
*/

function determineTerm(value) {
  if (Number.isInteger(value/3) && Number.isInteger(value/5)) {
    return "FizzBuzz";
  }
  else if (Number.isInteger(value/3)) {
    return "Fizz";
  }
  else if (Number.isInteger(value/5)) {
    return "Buzz";
  }
  else {
    return value;
  }
}

function fizzBuzz(list)
{
  return list.map(determineTerm);
}


const suite = [1,2,3];
console.log(fizzBuzz(suite));

module.exports = fizzBuzz;
