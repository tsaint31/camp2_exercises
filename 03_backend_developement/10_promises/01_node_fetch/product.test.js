const prd = require("./product");
require("sepia");

test("retrieve the brand", () => {
  expect.assertions(1);
  return prd.getProduct("efe288cb-fb63-4b23-b8df-529f04b8b02b")
    .then (brand => {
      expect(brand[1]).toBe("QUECHUA");
    });
});

test("retrieve the product", () => {
  expect.assertions(1);
  return prd.getProduct("efe288cb-fb63-4b23-b8df-529f04b8b02b")
    .then (product => {
      expect(product[0].id).toBe("efe288cb-fb63-4b23-b8df-529f04b8b02b");
    });
});

test("retrieve a not product", () => {
  expect.assertions(1);
  return prd.getProduct("fe288cb-fb63-4b23-b8df-529f04b8b02b")
    .then (brand => {
      expect(brand[1]).toBeUndefined();
    });
});

test("retrieve a not product", () => {
  expect.assertions(1);
  return prd.getProduct("fe288cb-fb63-4b23-b8df-529f04b8b02b")
    .then (product => {
      expect(product[0].severity).toBe("ERROR");
    });
});
