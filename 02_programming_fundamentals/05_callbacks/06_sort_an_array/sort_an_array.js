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

  for (let j=0; j<unsortedArray.length; j++) {
    let value=unsortedArray[0];
    for (let i=0; i<unsortedArray.length; i++) {
      if (done_table.indexOf(i)=== -1) {
        if (done_table.length===unsortedArray.length-1) {
          value=unsortedArray[i];
        }
        else if (value >= unsortedArray[i]) {
          value=unsortedArray[i];
          done=i;
        }
      }
    }
    done_table.push(done);
    console.log(done_table);
    result.push(value);
    console.log(result);
  }
  return result;
}
sort([24, 7, 9, 72, -8]);
// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = sort;
