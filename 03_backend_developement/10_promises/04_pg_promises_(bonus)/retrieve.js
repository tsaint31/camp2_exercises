const insertion = require("./insertion");
const fetch = require("node-fetch");


function retrieve(data) {
  fetch(
    `https://decath-product-api.herokuapp.com/${data}`,
    {method: "GET"}
  )
    .then((response) => response.json())
    .then((result) => {
      insertion.insertionData(result,data);
    })
    .catch((error) => {
      console.warn(error);
    });
}

function retrieveData() {
  // retrieve("categories");
  // retrieve("brands");
  retrieve("products");
  // CatProd();
}

function CatProd() {
  let fetchCategories = fetch(
    "https://decath-product-api.herokuapp.com/categories",
    {method: "GET"}
  )
    .then((response) => response.json())
    .then((category) => {
      category.map((cat) => {
        fetchCategories = fetchCategories.then(function ()
        {
          fetch(
            `https://decath-product-api.herokuapp.com/categories/${cat.id}/products`,
            {method: "GET"}
          )
            .then((response) => response.json())
            .then((result) => {
              insertion.insertionData(result,"category_products",cat.id);
            });
        });
      });
    })
    .catch((error) => {
      console.warn(error);
    });
}

retrieveData();

module.exports = {
  retrieve: retrieve,
  retrieveData: retrieveData
};
