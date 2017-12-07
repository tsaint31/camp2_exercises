const fs = require('fs');
const { URL, URLSearchParams } = require('url');

const request = (request, callback) =>
  new Promise((resolve, reject) => {
    const url = new URL(request.url);

    const query = url.searchParams.get('query');
    const lat = url.searchParams.get('lat');
    const lon = url.searchParams.get('lon');

    let zip = null;

    if (query) {
      zip = /[0-9]{5}/.exec(query)[0];
    }

    if (query && zip) {
      fs.readFile(`./.__tests__/__mocks__/${zip}.json`, 'utf8', (err, data) => {
        if (err) reject(err);
        resolve(callback(null, null, data));
      });
    } else {
      fs.readFile(`./.__tests__/__mocks__/${Math.round(lat)}-${Math.round(lon)}.json`, 'utf8', (err, data) => {
        if (err) reject(err);
        resolve(callback(null, null, data));
      });
    }
  });

module.exports = request;
