/* global test expect document */

const path = require("path");
const Wapiti = require("wapiti");
const departments = require("../departments");

const testFile = "file://" + path.join(__dirname, "../index.html");

test("it should have a list of departments", async () => {
  const result = await Wapiti.goto(testFile)
    .capture(() => {
      const node = document.querySelector("ul#department-list");
      return node ? node.tagName : "";
    })
    .run();
  expect(result).toEqual("UL");
});

test("it should have 101 departments", async () => {
  const result = await Wapiti.goto(testFile)
    .capture(() => document.querySelectorAll("#department-list li").length)
    .run();
  expect(result).toEqual(101);
});

test("the list of element should be on par with the list of departments", async () => {
  const result = await Wapiti.goto(testFile)
    .capture(() =>
      Array.from(document.querySelectorAll("#department-list li")).map(node =>
        node.textContent.trim()
      )
    )
    .run();
  expect(result).toEqual(departments);
});
