const joinArray = require("../01_index.js");

test("returns the good value 1", () => {
  expect(joinArray(["zero", "one", "two"], " - ")).toEqual("zero - one - two")
});

test("returns the good value 2", () => {
  expect(joinArray(["a", "b", "c", "d"], "|")).toEqual("a|b|c|d")
});

test("use reduce to implement the algorithm", () => {
  let reduceCalled = false;

  const originalReduce = Array.prototype.reduce;
  const reduceWrapper = function() {
    reduceCalled = true;
    return originalReduce.apply(this, arguments);
  };

  Array.prototype.reduce = reduceWrapper;

  joinArray(["zero", "one", "two"], " - ");

  expect(reduceCalled).toBe(true);
});

test("do not use existing join function", () => {
  let joinCalled = false;

  const originalJoin = Array.prototype.join;
  const joinWrapper = function() {
    joinCalled = true;
    return originalJoin.apply(this, arguments);
  };

  Array.prototype.join = joinWrapper;

  joinArray(["zero", "one", "two"], " - ");

  expect(joinCalled).toBe(false);
});
