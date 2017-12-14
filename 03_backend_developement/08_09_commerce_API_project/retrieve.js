const insertion = require("./insertion");
const request = require("request");
const { Pool } = require("pg");
const pool = new Pool();

function retrieve(callback,data) {
  request(
    {
      url: `https://decath-product-api.herokuapp.com/${data}`,
      method: "GET"
    },
    function (error,response,body) {
      const result=JSON.parse(body);
      callback(result,data);
    }
  );
}

function retrieveCatProd(categ,index,callback) {
  if (index<categ.length) {
    request(
      {
        url: `https://decath-product-api.herokuapp.com/categories/${categ[index].id}/products`,
        method: "GET"
      },
      function (error,response,body) {
        const result=JSON.parse(body);
        callback(result,"category_products",categ,index);
      }
    );
  }
}

function retrieveData() {
  retrieve(insertion.insertionData,"categories");
  retrieve(insertion.insertionData,"brands");
  retrieve(insertion.insertionData,"products");
  retrieve(CatProd,"categories");
}

function CatProd(result) {
  const categ=result;
  const index=0;
  retrieveCatProd(categ,index,insertionCatProd);
}

function insertionCatProd(result,data,categ,index){
  pool.connect((err, client,done) => {
    if (err) throw err;
    for (let i=0;i<result.length;i++) {
      client.query(`INSERT INTO category_products (id_product,id_category) VALUES ($1::uuid,'${categ[index].id}');`,
        [result[i].id], (err, res) => {
          if (err) {
            // console.log(err.stack);
          }
        });
    }
    retrieveCatProd(categ,index+1,insertionCatProd);
    done();
  });
}

retrieveData();


module.exports = {
  retrieve: retrieve,
  retrieveCatProd: retrieveCatProd,
  retrieveData: retrieveData
};
