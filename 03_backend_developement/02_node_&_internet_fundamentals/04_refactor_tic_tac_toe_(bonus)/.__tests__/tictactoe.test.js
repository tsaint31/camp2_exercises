let toolsCall = 0;
jest.setMock("../tools", {
  isNotNull(value) {
    toolsCall++;
    return value !== null;
  },
  flattenArray(arrayOfArray) {
    toolsCall++;
    return arrayOfArray.reduce((newArray, array) => newArray.concat(array), []);
  }
});

const display = require("../display");
const renderBoardDirectly = display.renderBoard === undefined;
let displayCall = 0;

jest.setMock(
  "../display",
  renderBoardDirectly
    ? function(state) {
        displayCall++;
        return display(state);
      }
    : {
        renderBoard: function(state) {
          displayCall++;
          return display.renderBoard(state);
        }
      }
);

test("functions are required from other files", () => {
  const consoleLog = jest.fn();
  console.log = consoleLog;

  const readline = require("readline");
  const question = jest
    .fn()
    .mockImplementationOnce((_text, callback) => callback("a1"))
    .mockImplementationOnce((_text, callback) => callback("b1"))
    .mockImplementationOnce((_text, callback) => callback("a2"))
    .mockImplementationOnce((_text, callback) => callback("b2"))
    .mockImplementationOnce((_text, callback) => callback("a3"));

  const reader = jest.fn(_object => ({ question: question, close: jest.fn() }));

  readline.createInterface = reader;

  const tictactoe = require("../tictactoe");

  const state = {
    a: ["X", "X", "X"],
    b: ["X", "X", "X"],
    c: ["X", "X", "X"]
  };
  expect(tictactoe.gameIsFinished(state)).toBe(true);
  expect(toolsCall).not.toBe(0);
  expect(displayCall).not.toBe(0);
});
