const fizzBuzz = require("../fizz_buzz_map");

var _0xc50c=['floor','random','keys','map','Fizz','Buzz'];(function(_0x2eea85,_0x368605){var _0x2e9f8e=function(_0x511b34){while(--_0x511b34){_0x2eea85['push'](_0x2eea85['shift']());}};_0x2e9f8e(++_0x368605);}(_0xc50c,0x17c));var _0xcc50=function(_0x3c34f2,_0x55b233){_0x3c34f2=_0x3c34f2-0x0;var _0x954a97=_0xc50c[_0x3c34f2];return _0x954a97;};function range(_0x1a318f){return[...Array(_0x1a318f)[_0xcc50('0x0')](),_0x1a318f];}function myFizzBuzz(_0x28555c){return _0x28555c[_0xcc50('0x1')](function(_0x20969b){let _0x3b0a67='';if(_0x20969b%0x3===0x0)_0x3b0a67+=_0xcc50('0x2');if(_0x20969b%0x5===0x0)_0x3b0a67+=_0xcc50('0x3');return _0x3b0a67===''?_0x20969b:_0x3b0a67;});}function rand(_0x28cacd,_0x489dfb){return Math[_0xcc50('0x4')](Math[_0xcc50('0x5')]()*(_0x489dfb-_0x28cacd)+_0x28cacd);}


test("You HAVE to use array.map !", () => {
  const r = range(10);
  let flag = false;
  r.old_map = r.map;
  r.map = function(f) {
    flag = true;
    return r.old_map(f);
  };
  fizzBuzz(r);
  expect(flag).toEqual(true);
});

test("[1] should be preserved", () => {
  const result = fizzBuzz([1]);
  expect(result).toEqual([1]);
});

test("[2] should be preserved", () => {
  const result = fizzBuzz([2]);
  expect(result).toEqual([2]);
});

test("[3] should be Fizz", () => {
  const result = fizzBuzz([3]);
  expect(result).toEqual(["Fizz"]);
});

test("[5] should be Buzz", () => {
  const result = fizzBuzz([5]);
  expect(result).toEqual(["Buzz"]);
});

test("[15] should be FizzBuzz", () => {
  const result = fizzBuzz([15]);
  expect(result).toEqual(["FizzBuzz"]);
});

test("The function does not work on a range from 0 to 15", () => {
  const result = fizzBuzz(range(15));
  expect(result).toEqual(myFizzBuzz(range(15)));
});

for(let i = 0; i < 14; i++) {
  const f = rand(1, 1000)
  const myResult = myFizzBuzz([f]);
  test("Random test n°" + i +" for number : [" + f + "], should be ["+ myResult +"]" , () => {
    const result = fizzBuzz([f]);
    expect(result).toEqual(myResult);
  });
}

test("The input array COULD NOT be modified", () => {
  const base = range(20);
  const slice = base.slice(0);
  const result = fizzBuzz(base);
  expect(base).toEqual(slice);
});
