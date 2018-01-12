

const fakeFetch = jest.fn(() =>
  Promise.resolve({
    json: function() {
      return Promise.resolve({
        main:{temp:4}
      });
    }
  })
);

module.exports = fakeFetch;
