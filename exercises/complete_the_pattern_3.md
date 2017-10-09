## Complete the pattern 3

You have to write a function pattern which creates the following pattern up to n number of rows.

If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.

### Pattern:

(n)
(n)(n-1)
(n)(n-1)(n-2)
................
.................
(n)(n-1)(n-2)....4
(n)(n-1)(n-2)....43
(n)(n-1)(n-2)....432
(n)(n-1)(n-2)....4321

### Examples:
```javascript
pattern(4):

4
43
432
4321
pattern(6):

6
65
654
6543
65432
654321
```

Note: There are no blank spaces

Hint: Use \n in string to jump to next line

*Solution*
```javascript
const range = n => Array(n)
                   .fill(0)
                   .map((value, index) => index + 1)
                   .reverse()

const pattern = n =>
  range(n)
  .map((number, index) => range(n).slice(0, index + 1).join(""))
  .join("\n")
```
