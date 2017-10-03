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

test("it should have a search input", async () => {
  const result = await Wapiti.goto(testFile)
    .capture(() => {
      const node = document.querySelector("input#search-department");
      return node ? node.tagName : "";
    })
    .run();
  expect(result).toEqual("INPUT");
});

test("it should have 101 departments by default", async () => {
  const result = await Wapiti.goto(testFile)
    .capture(() => document.querySelectorAll("#department-list li").length)
    .run();
  expect(result).toEqual(101);
});

test("typing 'ai' should gives five results", async () => {
  const result = await Wapiti.goto(testFile)
    .typeIn("#search-department", "ai")
    .capture(() =>
      Array.from(document.querySelectorAll("#department-list li")).map(node =>
        node.textContent.trim()
      )
    )
    .run();
  expect(result.length).toEqual(5);
  expect(result).toEqual([
    "AIN",
    "ILE-ET-VILAINE",
    "MAINE-ET-LOIRE",
    "PAS-DE-CALAIS",
    "SEINE-SAINT-DENIS"
  ]);
});

test("typing 'han' should gives one result", async () => {
  const result = await Wapiti.goto(testFile)
    .typeIn("#search-department", "han")
    .capture(() =>
      Array.from(document.querySelectorAll("#department-list li")).map(node =>
        node.textContent.trim()
      )
    )
    .run();
  expect(result.length).toEqual(1);
  expect(result).toEqual(["MORBIHAN"]);
});
