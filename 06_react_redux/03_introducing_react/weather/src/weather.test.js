import React from 'react';
import ReactDOM from 'react-dom';

import weatherByCityName from './weather';

const fakefetch=require("../__mocks__/weather.js");
fetch=fakefetch;

test("retrieve the temp", () => {
  expect.assertions(1);
  return weatherByCityName("lille")
    .then (temp => {
      expect(temp).toBe("4°C");
    });
});
