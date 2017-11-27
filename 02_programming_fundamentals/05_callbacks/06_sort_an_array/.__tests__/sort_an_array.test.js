const sort = require("../sort_an_array");

test("it should sort an array", () => {
  expect(sort([24, 7, 9, 72, -8])).toEqual([-8, 7, 9, 24, 72]);
})

test("it should not use Array.sort", () => {
  let sortCalled = false;

  const originalSort = Array.prototype.sort;
  const sortWrapper = function() {
    sortCalled = true;
    return originalSort.apply(this, arguments);
  };

  Array.prototype.sort = sortWrapper;

  expect(sort([12, 7, 9, 572, -84])).toEqual([-84, 7, 9, 12, 572]);
  expect(sortCalled).toBe(false);
})
