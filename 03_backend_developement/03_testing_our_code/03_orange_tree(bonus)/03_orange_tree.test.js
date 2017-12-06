const orange_tree = require("./03_orange_tree");

describe("a block of tests", function() {

  test("PickAnOrange at start", function() {
    // expect something
    const result = orange_tree.pickAnOrange(5);
    expect(result).toBe(false);
  });
  test("seed orange", function() {
    // expect something
    const result = orange_tree.seed();
    expect(result).toBeUndefined();
  });
  test("check height 1 5 year", function() {
    // expect something
    let i=0;
    for (i=0;i<4;i++) {
      orange_tree.ageOneYear();
    }
    let result=(orange_tree.height);
    expect(result).toEqual(100);
    result=(orange_tree.oranges);
    expect(result).toEqual(0);
    result=(orange_tree.alive);
    expect(result).toEqual(true);
    result = orange_tree.pickAnOrange();
    expect(result).toBe(false);
  });
  test("check height  5 year", function() {
    // expect something
    let i=0;
    for (i=0;i<1;i++) {
      orange_tree.ageOneYear();
    }
    let result=(orange_tree.height);
    expect(result).toEqual(125);
    result=(orange_tree.oranges);
    expect(result).toEqual(10);
    result=(orange_tree.alive);
    expect(result).toEqual(true);
    result = orange_tree.pickAnOrange();
    expect(result).toBe(true);
  });
  test("check height 5 10 year", function() {
    // expect something
    let i=0;
    for (i=5;i<9;i++) {
      orange_tree.ageOneYear();
    }
    let result = orange_tree.height;
    expect(result).toEqual(225);
    result=(orange_tree.oranges);
    expect(result).toEqual(10);
    result=(orange_tree.alive);
    expect(result).toEqual(true);
    result = orange_tree.pickAnOrange();
    expect(result).toBe(true);
  });
  test("check height 10 20 year", function() {
    // expect something
    let i=0;
    for (i=0;i<10;i++) {
      orange_tree.ageOneYear();
    }
    let result = orange_tree.height;
    expect(result).toEqual(325);
    result=(orange_tree.oranges);
    expect(result).toEqual(20);
    result=(orange_tree.alive);
    expect(result).toEqual(true);
    result = orange_tree.pickAnOrange();
    expect(result).toBe(true);
  });
  test("check height 20 40 year", function() {
    // expect something
    let i=0;
    for (i=0;i<19;i++) {
      orange_tree.ageOneYear();
    }
    let result = orange_tree.height;
    expect(result).toEqual(325);
    result=(orange_tree.oranges);
    expect(result).toEqual(5);
    result=(orange_tree.alive);
    expect(result).toEqual(true);
    result = orange_tree.pickAnOrange();
    expect(result).toBe(true);
  });
  test("check height 40 50 year", function() {
    // expect something
    let i=0;
    for (i=0;i<9;i++) {
      orange_tree.ageOneYear();
    }
    let result = orange_tree.height;
    expect(result).toEqual(325);
    result=(orange_tree.oranges);
    expect(result).toEqual(0);
    result=(orange_tree.alive);
    expect(result).toEqual(true);
    result = orange_tree.pickAnOrange();
    expect(result).toBe(false);
  });
  test("check height 50 100 year", function() {
    // expect something
    let i=0;
    for (i=0;i<50;i++) {
      orange_tree.ageOneYear();
    }
    let result = orange_tree.height;
    expect(result).toEqual(325);
    result=(orange_tree.oranges);
    expect(result).toEqual(0);
    result=(orange_tree.alive);
    expect(result).toEqual(false);
    result = orange_tree.pickAnOrange();
    expect(result).toBe(false);
  });
  test("check height after 100 year", function() {
    // expect something
    let i=0;
    for (i=0;i<50;i++) {
      orange_tree.ageOneYear();
    }
    let result = orange_tree.height;
    expect(result).toEqual(325);
    result=(orange_tree.oranges);
    expect(result).toEqual(0);
    result=(orange_tree.alive);
    expect(result).toEqual(false);
    result = orange_tree.pickAnOrange();
    expect(result).toBe(false);
  });
});
