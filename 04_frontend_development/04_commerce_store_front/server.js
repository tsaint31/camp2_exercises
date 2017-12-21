const fetch = require("node-fetch");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const MAPWEATHER_ID=process.env.MAPWEATHER_ID;


const nunjucks = require("nunjucks");

nunjucks.configure("views", {
  autoescape: true,
  express: app
});

app.set("views", __dirname + "/views");
app.set("view engine", "njk");

app.listen(port, function () {
    console.log("Server listening on port:" + port);
  });


app.use(express.static('./'));

app.get("/categories", function(request, result) {
  return fetch(
    "https://decath-product-api.herokuapp.com/categories",
    {method: "GET"}
  )
    .then((response) => response.json())
    .then((result1) => {
      result.render("cat", {categories: result1});
    })
    .catch((error) => {
      console.warn(error);
    });
});

app.get("/:id", function(request, result) {

  return fetch(
    `https://decath-product-api.herokuapp.com/categories/${request.params.id}/products`,
    {method: "GET"}
  )
    .then((response) => response.json())
    .then((result1) => {
      // result.send(result1);
      result.render("prod", {categories: result1});
    })
    .catch((error) => {
      console.warn(error);
    });
});

app.get("/products/:id", function(request, result) {

  return fetch(
    `https://decath-product-api.herokuapp.com/products/${request.params.id}`,
    {method: "GET"}
  )
    .then((response) => response.json())
    .then((result1) => {
      // result.send(result1);
      result.render("list", {list: result1, index : 0});
    })
    .catch((error) => {
      console.warn(error);
    });
});
