const fs = require('fs');
const { URL, URLSearchParams } = require('url');

const request = (request, callback) =>
  new Promise((resolve, reject) => {
    const url = new URL(request.url);
    const city = url.searchParams.get('q');

    fs.readFile(`./.__tests__/__mocks__/${city}.json`, 'utf8', (err, data) => {
      if (err) reject(err);
      resolve(callback(null, null, data));
    });
  });

module.exports = request;
