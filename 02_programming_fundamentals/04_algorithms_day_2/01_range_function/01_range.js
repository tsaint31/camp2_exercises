// Write a function that takes two input parameters, and returns a new array with defaults values between the start
// number and the end number.
//
// This function should work in both ascending or descending order.

// Complete this function.


function range(start,end)
{
  let resultat=[];
  if (end >= start) {
    for (let i=start;i <= end;i++) {
      resultat.push(i);
    }
    return resultat;
  }
  if (start > end) {
    for (let i=start;i >= end;i--) {
      resultat.push(i);
    }
    return resultat;
  }
}


console.log(range(4,1));
// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = range;
