const fs = require("fs");
const path = require("path");
const db = require("./.db/index");

const allData = [
  {
    address: "165 Avenue de Bretagne",
    city: "Lille",
    firstname: "Eura",
    lastname: "Technology"
  },
  {
    address: "221B Baker Street",
    city: "London",
    firstname: "Sherlock",
    lastname: "Holmes"
  },
  {
    address: "21 Jump Street",
    city: "Detroit",
    firstname: "Chaning",
    lastname: "Tatum"
  },
  {
    address: "Buckingham Palace ",
    city: "London",
    firstname: "Elizabeth",
    lastname: "Regina"
  }
];

beforeAll(done => {
  return db.readFile(path.join(__dirname, ".db/persons.sql")).then(sql =>
    db.query(sql, () => {
      done();
    })
  );
});

test("should select all entries", done =>
  db.readFile(path.join(__dirname, "select_all.sql")).then(
    content => {
      db.query(content, (error, result) => {
        result = result.map(obj => {
          const { id, ...rest } = obj;
          return rests;
        });
        expect(result).toEqual(allData);
        done();
      });
    },
    () => {
      console.warn("File could not be read");
      done();
    }
  ));
