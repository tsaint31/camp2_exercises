const retrieve = require("./retrieve");
jest.mock("./__mocks__/retrieve");

describe("retrieve the datas from the API", function() {
  test("retrieveBrands list", (done) => {
    expect.assertions(1);
    retrieve.retrieve(function (brands) {
      expect(brands.length).toBe(547);
      done();
    },"brands");
  });

  test("retrieveCategories list", (done) => {
    expect.assertions(1);
    retrieve.retrieve(function (categories) {
      expect(categories.length).toBe(1002);
      done();
    },"categories");
  });

  test("retrieveproducts list", (done) => {
    expect.assertions(1);
    retrieve.retrieve(function (products) {
      expect(products.length).toBe(16904);
      done();
    },"products");
  });

});
