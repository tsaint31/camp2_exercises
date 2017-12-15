const { Pool } = require("pg");
const pool = new Pool();
const RET = require("./retrieve");


function insertionData(result,data,cat){
  pool.connect((err, client,done) => {
    if (err) throw err;
    for (let i=0;i<result.length;i++) {
      switch(data) {
      case "products":
        client.query("INSERT INTO products (id,decathlon_id,title,description,brand_id,min_price,max_price,crossed_price,percent_reduction,image_path,rating) VALUES ($1::uuid,$2::integer,$3::text,$4::text,$5::uuid,$6::float,$7::float,$8::float,$9::float,$10::text,$11::float);",
          [result[i].id,result[i].decathlon_id,result[i].title,result[i].description,result[i].brand_id,result[i].min_price,result[i].max_price,result[i].crossed_price,result[i].percent_reduction,result[i].image_path,result[i].rating], (err, res) => {
            if (err) {
              // console.log(err);
            }
          });
        break;
      case "categories":
        client.query("INSERT INTO categories (id,decathlon_id,label) VALUES ($1::uuid,$2::integer,$3::text);",
          [result[i].id,result[i].decathlon_id,result[i].label], (err, res) => {
            if (err) {
              // console.log(err.stack);
            }
          });
        break;
      case "brands":
        client.query("INSERT INTO brands (id,title) VALUES ($1::uuid,$2::text);",
          [result[i].id,result[i].title], (err, res) => {
            if (err) {
              // console.log(err.stack);
            }
          });
        break;
      case "category_products":
        client.query(`INSERT INTO category_products (id_product,id_category) VALUES ($1::uuid,'${cat}');`,
          [result[i].id], (err, res) => {
            if (err) {
            // console.log(err.stack);
            }
          });
        break;
      }
    }
    done();
  });
}

// function insertionCatProd(result,data,categ,index){
//   pool.connect((err, client,done) => {
//     if (err) throw err;
//     for (let i=0;i<result.length;i++) {
//       client.query(`INSERT INTO category_products (id_product,id_category) VALUES ($1::uuid,'${categ[index]}');`,
//         [result[i].id], (err, res) => {
//           if (err) {
//             // console.log(err.stack);
//           }
//         });
//     }
//     console.log("hello");
//     RET.retrieveCatProd(categ[index+1],insertionCatProd);
//     done();
//   });
// }

module.exports = {
  insertionData: insertionData,
};
