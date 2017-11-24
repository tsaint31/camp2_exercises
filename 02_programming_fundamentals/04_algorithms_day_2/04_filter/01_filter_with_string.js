// filter takes an array of integer and a string with either odd or even
// such as filter([1, 2, 3, 4, 5], 'even') returns [2, 4]


function filter(array, str) {
  // Your code here
  let resultat=[];
  if (str !== "odd" && str !== "even")
  {return array;}
  else {
    for (let i=0; i<array.length; i++) {
      if (Number.isInteger(array[i]/2)) {
        if (str === "even"){
          resultat.push(array[i]);
        }  }
      else if (str === "odd") {
        resultat.push(array[i]);
      }
    }
    return resultat;
  }
}
<<<<<<< HEAD
console.log(filter([1,2,3,4,5,6,7], "odd"));
=======
console.log(filter([1,2,3,4,5], "even"));
>>>>>>> day  2 exo 3


// do not remove this line, it is for tests
module.exports = filter;
