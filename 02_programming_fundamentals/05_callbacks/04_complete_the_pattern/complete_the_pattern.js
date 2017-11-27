// You have to write a function pattern which returns the following Pattern(See Pattern & Examples) up to n number of rows.
//
// *Note: Returning the pattern is not the same as Printing the pattern.*
//
// If n < 1 then it should return "" i.e. empty string.
//
// There are no whitespaces in the pattern other than the line breaks.
//
// * Hint: Use `\n` in string to jump to next line
// * Hint: `" abc\n ".trim()` will return `"abc"`
//
// ## Examples
//
// ```
// pattern(5)
// 1
// 22
// 333
// 4444
// 55555
//
// pattern(11)
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
// 10101010101010101010
// 1111111111111111111111
// ```

function repeat(array,size) {
  let table=[];
  for (let i=0; i<size; i++) {
    let value="";
    const caract= `${array[i]}`;
    for (let j=0; j<array[i]; j++) {
      value = value + caract;
    }
    table.push(value);
  }
  return table;
}

function pattern1(size) {
  // Your code here
  let line=[];
  for (let i=0; i<size; i++) {
    line.push(i+1);
  }
  return line;
}

function pattern(size) {
  // Your code here
  const resultat = repeat(pattern1(size),size);
  return (resultat.join("\n"));
}

//repeat([1,2,3],3);
pattern(5);
// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = pattern;
