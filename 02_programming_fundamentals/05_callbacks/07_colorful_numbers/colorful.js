// Create a function `isColorful(number)` that will return `true` if the given number is colorful
// or `false` if the given number is not colorful
//
// Example:
//
// isColorful(3245) # => true
// isColorful(10) # => false
//
// Note: Read Sparta exercises to have more details about what defines a colorful number

// Insert your code here ⇩


function each_item(array) {
  const result_each_item=[];
  for (let j=0; j<array.length;j++) {
    let value=1;
    for (let i=j; i<array.length;i++) {
      value = array[i]*value;
      result_each_item.push(value);
    }
  }
  return result_each_item;
}


function isColorful(number) {
  const caract= `${number}`;
  const result=caract.split("");
  const resultat = each_item(result);
  for (let i=0; i<resultat.length;i++) {
    for (let j=i+1; j<resultat.length;j++) {
      if(resultat[i]===resultat[j]) {
        return false;
      }
    }
  }
  return true;
}


isColorful(10);




// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = isColorful;
