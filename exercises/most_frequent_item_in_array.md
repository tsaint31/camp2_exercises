## Most Frequent Item in Array

Write a program to find count of the most frequent item of an array.

Assume that input is array of integers.

Ex.:
```javascript
input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
ouptut: 5
Most frequent number in example array is -1. It occurs 5 times in input array.
```

*Solution (one of many)*

```javascript
const mostFrequentItemCount = items => items.length ? Math.max(...items.map(x => items.filter(y => y == x).length)) : 0

const mostFrequentItemCount = items =>
  Math.max(
    ...items.reduce((accumulator, number) => {
      accumulator[number] = (accumulator[number] || 0) + 1

      return accumulator.max.push(accumulator[number]) && accumulator
    }, {max: [0]}).max
  )
```
