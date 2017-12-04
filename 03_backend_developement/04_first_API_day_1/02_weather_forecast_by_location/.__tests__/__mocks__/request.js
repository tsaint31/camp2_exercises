const fs = require('fs');
const { URL, URLSearchParams } = require('url');

const request = (request, callback) =>
  new Promise((resolve, reject) => {
    fs.readFile(`./.__tests__/__mocks__/59000.json`, 'utf8', (err, data) => {
      if (err) reject(err);
      resolve(callback(null, null, data));
    });
  });

module.exports = request;
