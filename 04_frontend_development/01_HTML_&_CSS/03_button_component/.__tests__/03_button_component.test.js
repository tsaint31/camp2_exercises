const path = require("path");
const Wapiti = require("wapiti");

test("Should have a button", () => {
  expect.assertions(1);

  return Wapiti.goto("file://" + path.join(__dirname, "../index.html"))
    .capture(() => document.querySelector("button"))
    .run()
    .then(button => expect(button).toEqual(expect.anything()));
});

test("Should be bigger on hovering", () => {
  expect.assertions(1);

  return Wapiti.goto("file://" + path.join(__dirname, "../index.html"))
    .capture(() => {
      const button = document.querySelector("button");
      return button ? button.getBoundingClientRect().width : 0;
    })
    .puppeteer(page => page.hover("button"))
    .capture(() => {
      const button = document.querySelector("button");
      return button ? button.getBoundingClientRect().width : 0;
    })
    .run()
    .then(([firstWidth, secondWidth]) =>
      expect(firstWidth).not.toBe(secondWidth)
    );
});
