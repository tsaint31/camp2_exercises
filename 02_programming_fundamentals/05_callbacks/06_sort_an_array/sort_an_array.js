// Your task is to create a function that will sort every number contained in a given array.
//
// For example:
//
// sort([24, 7, 9, 72, -8]) === [-8, 7, 9, 24, 72]
//
// Note: You should not use Array.sort()

function sort(unsortedArray) {
  // Your code here
  const result=[];
  let done;
  const done_table=[];
  let value="initial";
  for (let j=0; j<unsortedArray.length; j++) {
    for (let i=0; i<unsortedArray.length; i++) {
      if (done_table.indexOf(i)=== -1) {
        if (value==="initial") {
          value=unsortedArray[i];
          console.log(value);}
        if (value >= unsortedArray[i]) {
          value=unsortedArray[i];
          done=i;}
      }
    }
    done_table.push(done);
    result.push(value);
    value="initial";
    console.log(result);
  }
  return result;
}
sort([3, 7, 9, 72, -8]);
// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = sort;
