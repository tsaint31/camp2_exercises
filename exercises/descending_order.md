## Descending Order

Your task is to make a function that can take any non-negative integer as a argument and return it with it's digits in
descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:

Input: `21445` Output: `54421`

Input: `145263` Output: `654321`

Input: `1254859723` Output: `987554322`

*Solution*

```javascript
const descendingOrder = n => Number(String(n).split("").sort((a,b) => b-a).join(""))
```
