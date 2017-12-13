
const { Pool } = require("pg");
const pool = new Pool();
const request = require("request");

function retrieveCategories() {
  request(
    {
      url: "https://decath-product-api.herokuapp.com/categories",
      method: "GET"
    },
    function (error,response,body) {
      const result=JSON.parse(body);
      // console.log(result);
      pool.connect((err, client,callback) => {
        if (err) throw err;
        for (let i=0;i<result.length;i++) {
          client.query("INSERT INTO categories (id,decathlon_id,label) VALUES ($1::uuid,$2::integer,$3::text);",
            [result[i].id,result[i].decathlon_id,result[i].label], (err, res) => {
              if (err) {
                // console.log(err.stack);
              } else {
                // console.log(res.rows[0]);
              }
            });
        }
        callback();
      });
    }
  );
}

function retrieveBrands() {
  request(
    {
      url: "https://decath-product-api.herokuapp.com/brands",
      method: "GET"
    },
    function (error,response,body) {
      const result=JSON.parse(body);
      // console.log(result);
      pool.connect((err, client,callback) => {
        if (err) throw err;
        for (let i=0;i<result.length;i++) {
          client.query("INSERT INTO brands (id,title) VALUES ($1::uuid,$2::text);",
            [result[i].id,result[i].title], (err, res) => {
              if (err) {
                // console.log(err.stack);
              } else {
                // console.log(res.rows[0]);
              }
            });
        }
        callback();
      });
    }
  );
}

function retrieveProducts() {
  request(
    {
      url: "https://decath-product-api.herokuapp.com/products",
      method: "GET"
    },
    function (error,response,body) {
      const result=JSON.parse(body);
      console.log(result);
      pool.connect((err, client,callback) => {
        if (err) throw err;
        for (let i=0;i<result.length;i++) {
          client.query("INSERT INTO products (id,decathlon_id,title,description,brand_id,min_price,max_price,crossed_price,percent_reduction,image_path,rating) VALUES ($1::uuid,$2::integer,$3::text,$4::text,$5::uuid,$6::float,$7::float,$8::float,$9::float,$10::text,$11::float);",
            [result[i].id,result[i].decathlon_id,result[i].title,result[i].description,result[i].brand_id,result[i].min_price,result[i].max_price,result[i].crossed_price,result[i].percent_reduction,result[i].image_path,result[i].rating], (err, res) => {
              if (err) {
                console.log(err);
              } else {
                // console.log(res.rows[0]);
              }
            });
        }
        callback();
      });
    }
  );
}

function retrieveCategoryProducts() {
  request(
    {
      url: "https://decath-product-api.herokuapp.com/categories",
      method: "GET"
    },
    function (error,response,body) {
      const result=JSON.parse(body);
      for (let j=500;j<1002;j++) {
        const cat=result[j].id;
        console.log(`cat:  ${cat}`);
        request(
          {
            url: `https://decath-product-api.herokuapp.com/categories/${cat}/products`,
            method: "GET"
          },
          function (error,response,body) {
            const result=JSON.parse(body);
            if (error) {
              console.log(error);
            }
            else {
              pool.connect((err, client,callback) => {
                if (err) throw err;
                for (let i=0;i<result.length;i++) {
                  client.query(`INSERT INTO category_products (id_product,id_category) VALUES ($1::uuid,'${cat}');`,
                    [result[i].id], (err, res) => {
                      if (err) {
                        console.log(err.stack);
                      } else {
                        console.log(res.rows[0]);
                      }
                    });
                }
                callback();
              });
            }
          }
        );
      }
    }
  );
}

function retrieveData() {
  retrieveCategories();
  retrieveBrands();
  retrieveProducts();

  retrieveCategoryProducts();
}

function callback() {
  pool.end();
}

retrieveData(callback);
