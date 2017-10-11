const fs = require("fs");
const { Client } = require("pg");

module.exports = {
  query: (text, ...args) => {
    const client = new Client({
      user: "camp2",
      host: "localhost",
      database: "camp2",
      password: "",
      port: 5432
    });
    client.connect();

    if (args.length === 2) {
      const [params, callback] = args;
      return client.query(text, params, (error, result) => {
        if (error) {
          console.log(error);
        }
        callback(error, result ? result.rows : result);
        client.end();
      });
    }
    const [callback] = args;
    return client.query(text, (error, result) => {
      if (error) {
        console.log(error);
      }
      callback(error, result ? result.rows : result);
      client.end();
    });
  },
  readFile: filename =>
    new Promise((resolve, reject) =>
      fs.readFile(
        filename,
        "utf8",
        (err, text) => (err ? reject(err) : resolve(text))
      )
    )
};
