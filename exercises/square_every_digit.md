## Square Every Digit

Your task is to square every digit of a number.

For example, if we run `9119` through the function, `811181` will come out.

Note: The function accepts an integer and returns an integer

*Solution*

```javascript
 const squareDigits = number => Number(('' + number).split('').map(value => value * value).join(''))
```
