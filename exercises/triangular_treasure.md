## Triangular Treasure

Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

```javascript
1st (1)   2nd (3)    3rd (6)
*          **        ***
           *         **
                     *
```

You need to return the nth triangular number. You should return 0 for out of range values:


```javascript
triangular(0)==0
triangular(2)==3
triangular(3)==6
triangular(-10)==0
```

*Solution*

```javascript
const triangular = n => n <= 0 ? 0 : n + triangular(n - 1)
```
