## Mumbling

This time no story, no theory. The examples below show you how to write function accum should behave:

```javascript
accum("abcd");    // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt");    // "C-Ww-Aaa-Tttt"
```

*Solution*

```javascript
//with map
const accum = string =>
  string
  .split('')
  .map((character, index) =>
    character.toUpperCase() + character.toLowerCase().repeat(index)
  )
  .join('-')

//with reduce
const accum = string =>
  string
  .split("")
  .reduce((accumulator, character, index) =>
    accumulator.concat(character.toUpperCase() + character.toLowerCase().repeat(index))
  , [])
  .join("-")
```
