// Your task is to square **EACH** digit of a number via a squareDigits function.
//
// squareDigits(9) === 81
// squareDigits(9129) === 811481
// squareDigits(99) === 8181
//
// Note: This is not just the square of a number but the square of each digits
// Note: The function accepts an integer and returns an integer

const square = function (x) {
  return x * x;
};



function squareDigits(number) {
  // Your code here
  const caract= `${number}`;
  const result=caract.split("");
  const resultat=result.map(square);
  const resultat1 = resultat.join("");
  return (parseInt(resultat1,10));

}

console.log(squareDigits(9129));

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = squareDigits;
