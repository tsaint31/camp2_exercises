const PG = require("pg");

function queryData(result,data) {
  const client = new PG.Client();
  client.connect();
  client.query(
    `SELECT * FROM ${data}`,
    [],
    function(error, result1) {
      if (error) {
        console.warn(error);
      } else {
        result.json(result1.rows);
        return (result1.rows);
      }
      client.end();
    }
  );
}

function queryDataID(request,result,data) {
  const client = new PG.Client();
  client.connect();
  client.query(
    `SELECT * FROM ${data} where id = $1::uuid`,
    [request.params.id],
    function(error, result1) {
      if (error) {
        console.warn(error);
      } else {
        result.json(result1.rows);
      }
      client.end();
    }
  );
}

function queryCatProd (request,result) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT products.* FROM products INNER JOIN category_products on products.id=category_products.id_product and category_products.id_category=$1::uuid",
    [request.params.id],
    function(error, result1) {
      if (error) {
        console.warn(error);
      } else {
        result.json(result1.rows);
      }
      client.end();
    }
  );
}

module.exports = {
  queryData: queryData,
  queryDataID: queryDataID,
  queryCatProd: queryCatProd
};
