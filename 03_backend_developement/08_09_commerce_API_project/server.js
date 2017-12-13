const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const PG = require("pg");
const client = new PG.Client();

app.listen(port, function () {
  client.connect();
  console.log("Server listening on port:" + port);
});

app.get("/categories", function(request, result) {
  client.query(
    "SELECT * FROM categories ",
    [],
    function(error, result1) {
      if (error) {
        console.warn(error);
      } else {
        result.json(result1.rows);
      }
    }
  );
});

app.get("/categories/:id", function(request, result) {
  client.query(
    "SELECT * FROM categories where id = $1::uuid",
    [request.params.id],
    function(error, result1) {
      if (error) {
        console.warn(error);
      } else {
        result.json(result1.rows);
      }
    }
  );
});

app.get("/brands", function(request, result) {
  client.query(
    "SELECT * FROM brands ",
    [],
    function(error, result1) {
      if (error) {
        console.warn(error);
      } else {
        result.json(result1.rows);
      }
    }
  );
});

app.get("/brands/:id", function(request, result) {
  client.query(
    "SELECT * FROM brands where id = $1::uuid",
    [request.params.id],
    function(error, result1) {
      if (error) {
        console.warn(error);
      } else {
        result.json(result1.rows);
      }
    }
  );
});

app.get("/products", function(request, result) {
  client.query(
    "SELECT * FROM products ",
    [],
    function(error, result1) {
      if (error) {
        console.warn(error);
      } else {
        result.json(result1.rows);
      }
    }
  );
});

app.get("/products/:id", function(request, result) {
  client.query(
    "SELECT * FROM products where id = $1::uuid",
    [request.params.id],
    function(error, result1) {
      if (error) {
        console.warn(error);
      } else {
        result.json(result1.rows);
      }
    }
  );
});

app.get("/categories/:id/products", function(request, result) {
  client.query(
    // "SELECT * FROM products",
    "SELECT products.* FROM products INNER JOIN category_products on products.id=category_products.id_product and category_products.id_category=$1::uuid",
    // [],
    [request.params.id],
    function(error, result1) {
      if (error) {
        console.warn(error);
      } else {
        result.json(result1.rows);
      }
    }
  );
});
