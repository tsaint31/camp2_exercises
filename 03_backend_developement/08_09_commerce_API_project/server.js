const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const query = require("./query");

function applisten() {
  app.listen(port, function () {
    console.log("Server listening on port:" + port);
  });
}

function getData(data,callback) {
  app.get(`/${data}`, function(request, result) {
    callback(result,data);
  });
}

function getDataID (data,callback) {
  app.get(`/${data}/:id`, function(request, result) {
    callback(request,result,data);
  });
}

function getCatProd (callback) {
  app.get("/categories/:id/products", function(request, result) {
    callback(request,result);
  });
}

applisten();
getData("categories",query.queryData);
getData("brands",query.queryData);
getData("products",query.queryData);
getDataID("categories",query.queryDataID);
getDataID("brands",query.queryDataID);
getDataID("products",query.queryDataID);
getCatProd(query.queryCatProd);
