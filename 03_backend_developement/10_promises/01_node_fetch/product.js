const fetch = require("node-fetch");

function getProduct(product){
  return fetch(
    `https://decath-product-api.herokuapp.com/products/${product}`,
    {method: "GET"}
  )
    .then((response) => response.json())
    .then((result) => {
      return Promise.all(
        [
          result,
          searchBrands(result)
        ]
      );
    })
    .then((results) => { // here results = [result, Brands]
      console.log(results[0], results[1]);
      return results;
    })
    .catch((error) => {
      console.warn(error);
    });
}


function searchBrands(result) {
  return fetch(
    `https://decath-product-api.herokuapp.com/brands/${result.brand_id}`,
    {method: "GET"}
  )
    .then((response) => response.json())
    .then((results) => { // here results = [result, Brands]
      return results.title;})
    .catch((error) => {
      console.warn(error);
    });
}

getProduct("efe288cb-fb63-4b23-b8df-529f04b8b02b");

module.exports = {
  searchBrands: searchBrands,
  getProduct: getProduct
};
