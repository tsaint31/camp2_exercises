jest.mock('./__mocks__/request');

const weatherByCity = require('../weatherByCity');

describe('#weatherByCity()', () => {
  it('should load weather data', async () => {
    const weather = await weatherByCity('London');
    expect(weather).toBe('5.55 °C');
  });
});
