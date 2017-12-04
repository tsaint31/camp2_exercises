const display = require("../display");

const renderBoard = display.renderBoard ? display.renderBoard : display;

test("renderBoard should be able to render an empty board", () => {
  const state = {
    a: Array(3).fill(null),
    b: Array(3).fill(null),
    c: Array(3).fill(null)
  };
  const result = renderBoard(state);
  const expecting = `  1   2   3
a _ | _ | _
b _ | _ | _
c _ | _ | _`;
  expect(result).toEqual(expecting);
});

test("renderBoard should be able to render an full board", () => {
  const state = {
    a: ["X", "X", "X"],
    b: ["X", "X", "X"],
    c: ["X", "X", "X"]
  };
  const result = renderBoard(state);
  const expecting = `  1   2   3
a X | X | X
b X | X | X
c X | X | X`;
  expect(result).toEqual(expecting);
});
