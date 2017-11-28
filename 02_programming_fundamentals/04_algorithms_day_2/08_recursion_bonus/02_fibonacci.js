// In mathematics, the Fibonacci numbers are the numbers in the
// following integer sequence, called the Fibonacci sequence,
// and characterized by the fact that every number after
// the first two is the sum of the two
// preceding ones : 0, 1, 1, 2, 3, 5, 8, 13, 21...
//
// It does not work for negative numbers and your function
// should return `null` if tried with a negative number or
// with something else than a number.
//
// Implement a `fibo` function that takes an argument n and returns
// the n'th value of the sequence.
//
// Remember that you can call `fibo` inside of itself
// even several times

const resultat=[];

function fibo(value) {
  // your code here
  if (typeof(value)==="string") {
    console.log(null);
    return null;
  }
  else if (value<0  ) {
    return null;
  }
  else if (value===1 || value===0){
    return 0;
  }
  else {
    resultat.push(0);
    resultat.push(1);
    for (let i=1; i<value;  i++) {
      resultat.push(resultat[i]+resultat[i-1]);
    }
    console.log(resultat[resultat.length-1]);
    return resultat[resultat.length-1];
  }
}

fibo(0);
// do not remove this line, it is for tests
module.exports = fibo;
