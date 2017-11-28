// A factorial is the multiplication of a number by all numbers
// preceding it until 1.
// For instance, fact(5) = 5 * 4 * 3 * 2 * 1 = 120
// It does not work for negative numbers and your function
// should return `null` if tried with a negative number or
// with something else than a number.
//
// Remember that you can call `fact` inside of itself

let result=1;

function fact(value) {
  // your code here
  if (value===0){
    return 1;
  }
  else if (value===1) {
    return 1;
  }
  else if (value<0  ) {
    return null;
  }
  else if (typeof(value)==="string") {
    console.log(null);
    return null;
  }
  else {
    for (let i=0; i<value; i++)
    {
      result=result*(value-i);
    }
    console.log(result);
    return result;
  }
}

fact("0");
// do not remove this line, it is for tests
module.exports = fact;
