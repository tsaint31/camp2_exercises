## Scratch Lottery

You got a scratch lottery, you want to know how much money you win.

There are 6 sets of characters on the lottery. Each set of characters represents a chance to win. The text has a coating
on it. When you buy the lottery ticket and then blow it off, you can see the text information below the coating.

Each set of characters contains three animal names and a number, like this: "tiger tiger tiger 100". If the three animal
names are the same, Congratulations, you won the prize. You will win the same bonus as the last number.

Given the lottery, returns the total amount of the bonus.

Input/Output

[input] string array lottery

A string array that contains six sets of characters.

[output] an integer

the total amount of the bonus.

Example

```javascript
lottery = [
  "tiger tiger tiger 100",
  "rabbit dragon snake 100",
  "rat ox pig 1000",
  "dog cock sheep 10",
  "horse monkey rat 5",
  "dog dog dog 1000"
]
```

the output should be `1100`.

`"tiger tiger tiger 100"` win $100, and `"dog dog dog 1000"` win $1000.

`100 + 1000 = 1100`

*Solutions (ones of many)*

```javascript
const scratch = lottery =>  
  lottery
  .reduce((sum, set) => sum + (/([a-z]+) \1 \1/.test(set) ? +set.split(" ")[3] : 0), 0)

const scratch = lottery =>
  lottery.map(set => set.split(" "))
         .filter(array => array[0] === array[1] && array[1] === array[2])
         .map(set => parseInt(set[3]))
         .reduce((a, b) => a + b, 0)
```
