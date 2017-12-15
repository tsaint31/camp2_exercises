const PG = require("pg");

function queryData(result,data) {
  const client = new PG.Client();
  client.connect();
  client.query(`SELECT * FROM ${data}`,[])
    .then((result1) => result.json(result1.rows))
    .catch((error) => {
      console.warn(error);
      client.end();
    });
}

function queryDataID(request,result,data) {
  const client = new PG.Client();
  client.connect();
  client.query(`SELECT * FROM ${data} where id = $1::uuid`,[request.params.id])
    .then((result1) => result.json(result1.rows))
    .catch((error) => {
      console.warn(error);
      client.end();
    });
}

function queryCatProd (request,result) {
  const client = new PG.Client();
  client.connect();
  client.query("SELECT products.* FROM products INNER JOIN category_products on products.id=category_products.id_product and category_products.id_category=$1::uuid",
    [request.params.id])
    .then((result1) => result.json(result1.rows))
    .catch((error) => {
      console.warn(error);
      client.end();
    });
}

module.exports = {
  queryData: queryData,
  queryDataID: queryDataID,
  queryCatProd: queryCatProd
};
