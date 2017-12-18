const path = require("path");
const Wapiti = require("wapiti");

describe("table selector", () => {
  test("Should have a table", () => {
    expect.assertions(1);

    return Wapiti.goto("file://" + path.join(__dirname, "../index.html"))
      .capture(() => document.querySelector("table"))
      .run()
      .then(table => expect(table).toEqual(expect.anything()));
  });

  test("table should have at least two lines", () => {
    expect.assertions(1);

    return Wapiti.goto("file://" + path.join(__dirname, "../index.html"))
      .capture(() => Array.from(document.querySelectorAll("tr")))
      .run()
      .then(lines => expect(lines.length).toBeGreaterThanOrEqual(2));
  });

  test("each successive line should have a different background", () => {
    expect.assertions(2);

    return Wapiti.goto("file://" + path.join(__dirname, "../index.html"))
      .capture(() =>
        Array.from(document.querySelectorAll("tr"))
          .map(getComputedStyle)
          .map(s => s.getPropertyValue("background-color"))
      )
      .run()
      .then(backgrounds => {
        const evenBackgrounds = backgrounds.filter(
          (_, index) => index % 2 === 0
        );
        const oddBackgrounds = backgrounds.filter(
          (_, index) => index % 2 === 1
        );
        expect(evenBackgrounds).toEqual(
          Array(evenBackgrounds.length).fill(evenBackgrounds[0])
        );
        expect(oddBackgrounds).toEqual(
          Array(oddBackgrounds.length).fill(oddBackgrounds[0])
        );
      });
  });
});

test("should have a paragraph", () => {
  expect.assertions(1);

  return Wapiti.goto("file://" + path.join(__dirname, "../index.html"))
    .capture(() => document.querySelector("p"))
    .run()
    .then(paragraph => expect(paragraph).toEqual(expect.anything()));
});

test("should have a span with the class important that is bold", () => {
  expect.assertions(2);

  return Wapiti.goto("file://" + path.join(__dirname, "../index.html"))
    .capture(() => document.querySelector("span.important"))
    .capture(() => {
      const span = document.querySelector("span.important");
      return span ? getComputedStyle(span).getPropertyValue("font-weight") : "";
    })
    .run()
    .then(([span, fontWeight]) => {
      expect(span).toEqual(expect.anything());
      expect(fontWeight).toBe("700");
    });
});

test("should have a span with the class emphasis that is italic", () => {
  expect.assertions(2);

  return Wapiti.goto("file://" + path.join(__dirname, "../index.html"))
    .capture(() => document.querySelector("span.emphasis"))
    .capture(() => {
      const span = document.querySelector("span.emphasis");
      return span ? getComputedStyle(span).getPropertyValue("font-style") : "";
    })
    .run()
    .then(([span, fontStyle]) => {
      expect(span).toEqual(expect.anything());
      expect(fontStyle).toBe("italic");
    });
});

test("should have a span with the classes emphasis and important that is bold, italic and red", () => {
  expect.assertions(4);

  return Wapiti.goto("file://" + path.join(__dirname, "../index.html"))
    .capture(() => document.querySelector("span.important.emphasis"))
    .capture(() => {
      const span = document.querySelector("span.important.emphasis");
      return span ? getComputedStyle(span).getPropertyValue("font-weight") : "";
    })
    .capture(() => {
      const span = document.querySelector("span.important.emphasis");
      return span ? getComputedStyle(span).getPropertyValue("font-style") : "";
    })
    .capture(() => {
      const span = document.querySelector("span.important.emphasis");
      return span
        ? getComputedStyle(span).getPropertyValue("color")
        : "";
    })
    .run()
    .then(([span, fontWeight, fontStyle, backgroundColor]) => {
      expect(span).toEqual(expect.anything());
      expect(fontWeight).toBe("700");
      expect(fontStyle).toBe("italic");
      expect(backgroundColor).toBe("rgb(255, 0, 0)");
    });
});
