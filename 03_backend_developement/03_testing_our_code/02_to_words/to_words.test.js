const to_words = require("./to_words");

describe("a block of tests", function() {
// sentence.split(/[.?!, :]+/);

  test("Split sentence si on a pas un caractère spécial", function() {
    // expect something
    const result = to_words.toWords("thierry");
    expect(result).toEqual(["thierry"]);
  });
  test("Split sentence si on a un .", function() {
    // expect something
    const result = to_words.toWords("thi.erry");
    expect(result).toEqual(["thi","erry"]);
  });
  test("Split sentence si on a un ?", function() {
    // expect something
    const result = to_words.toWords("thi?erry");
    expect(result).toEqual(["thi","erry"]);
  });
  test("Split sentence si on a un !", function() {
    // expect something
    const result = to_words.toWords("thi!erry");
    expect(result).toEqual(["thi","erry"]);
  });
  test("Split sentence si on a un ,", function() {
    // expect something
    const result = to_words.toWords("thi,erry");
    expect(result).toEqual(["thi","erry"]);
  });
  test("Split sentence si on a un espace", function() {
    // expect something
    const result = to_words.toWords("thi erry");
    expect(result).toEqual(["thi","erry"]);
  });
  test("Split sentence si on a un :", function() {
    // expect something
    const result = to_words.toWords("thi:erry");
    expect(result).toEqual(["thi","erry"]);
  });
  test("Split sentence si on a plusieurs séparateurs", function() {
    // expect something
    const result = to_words.toWords("t.h:i,e?r!r y");
    expect(result).toEqual(["t","h","i","e","r","r","y"]);
  });
  test("Split sentence si on a plusieurs séparateurs qui se suivent", function() {
    // expect something
    const result = to_words.toWords("t..h:i,e?r!r y");
    expect(result).toEqual(["t","h","i","e","r","r","y"]);
  });
  test("Split sentence si on a un ]", function() {
    // expect something
    const result = to_words.toWords("thi]erry");
    expect(result).toEqual(["thi]erry"]);
  });
  test("Split sentence si on a un [", function() {
    // expect something
    const result = to_words.toWords("thi[erry");
    expect(result).toEqual(["thi[erry"]);
  });
  test("Split sentence si on a une phrase vide", function() {
    // expect something
    const result = to_words.toWords("");
    expect(result).toEqual([]);
  });
  test("Split sentence si on a un espace", function() {
    // expect something
    const result = to_words.toWords(".");
    expect(result).toEqual([]);
  });
});
