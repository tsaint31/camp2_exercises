const path = require("path");
const Wapiti = require("wapiti");

test("Should have a title", () => {
  expect.assertions(1);

  return Wapiti.goto("file://" + path.join(__dirname, "../index.html"))
    .capture(() => document.title)
    .run()
    .then(title => expect(title).toBe("Welcome Page"));
});

test("Should have a h1", () => {
  expect.assertions(2);

  return Wapiti.goto("file://" + path.join(__dirname, "../index.html"))
    .capture(() => {
      const title = document.querySelector("h1");
      return title ? title.textContent : undefined;
    })
    .run()
    .then(title => {
      expect(title).toBeDefined();
      expect(title).toBe("My three favorites animals");
    });
});

describe("Should have an ordered list with three elements", () => {
  test("should have an ordered list", () => {
    expect.assertions(1);
    return Wapiti.goto("file://" + path.join(__dirname, "../index.html"))
      .capture(() => document.querySelector("ol"))
      .run()
      .then(ol => expect(ol).toEqual(expect.anything()));
  });

  test("should have three elements", () => {
    expect.assertions(1);
    return Wapiti.goto("file://" + path.join(__dirname, "../index.html"))
      .capture(() => Array.from(document.querySelectorAll("ol li")))
      .run()
      .then(elements => expect(elements.length).toBe(3));
  });

  test("should not have empty elements", () => {
    expect.assertions(1);
    return Wapiti.goto("file://" + path.join(__dirname, "../index.html"))
      .capture(() =>
        Array.from(document.querySelectorAll("ol li")).map(n => n.textContent)
      )
      .run()
      .then(elements =>
        expect(elements.some(element => element === "")).toBe(false)
      );
  });
});

describe("should have a link to a website", () => {
  test("link should exist", () => {
    expect.assertions(1);
    return Wapiti.goto("file://" + path.join(__dirname, "../index.html"))
      .capture(() => document.querySelector("a"))
      .run()
      .then(link => expect(link).toEqual(expect.anything()));
  });

  test("link should have a href", () => {
    expect.assertions(1);
    return Wapiti.goto("file://" + path.join(__dirname, "../index.html"))
      .capture(() => {
        const link = document.querySelector("a");
        return link ? link.href : undefined;
      })
      .run()
      .then(href => expect(href).toBeDefined());
  });
});

describe("should have three images", () => {
  test("images should exist", () => {
    expect.assertions(1);
    return Wapiti.goto("file://" + path.join(__dirname, "../index.html"))
      .capture(() => Array.from(document.querySelectorAll("img")))
      .run()
      .then(images => {
        expect(images.length).toBe(3);
      });
  });

  test("images should have a src", () => {
    expect.assertions(1);
    const file = "file://" + path.join(__dirname, "../index.html");
    return Wapiti.goto(file)
      .capture(() =>
        Array.from(document.querySelectorAll("img")).map(n => n.src)
      )
      .run()
      .then(images => {
        expect(images.some(image => image === "" || image === file)).toBe(
          false
        );
      });
  });
});
