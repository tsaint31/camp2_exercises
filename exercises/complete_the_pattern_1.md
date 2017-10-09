## Complete the pattern 1

You have to write a function pattern which returns the following Pattern(See Pattern & Examples) up to n number of rows.

*Note: Returning the pattern is not the same as Printing the pattern.*

If n < 1 then it should return "" i.e. empty string.

There are no whitespaces in the pattern.

* Hint: Use `\n` in string to jump to next line


```javascript
pattern(5)
1
22
333
4444
55555

pattern(11)
1
22
333
4444
55555
666666
7777777
88888888
999999999
10101010101010101010
1111111111111111111111
```


*Solution*

```javascript
const repeatNumber = number => String(number).repeat(number)

const pattern = n => Array(n)
                     .fill(0)
                     .map((value, index) => index + 1)
                     .map((number) => repeatNumber(number))
                     .join("\n")
```
