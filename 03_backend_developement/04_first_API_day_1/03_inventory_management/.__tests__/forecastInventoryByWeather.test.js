jest.mock('./__mocks__/request');

const forecastInventoryByWeather = require('../forecastInventoryByWeather');

describe('#forecastInventoryByWeather()', () => {
  it('should load weather data for 16 days', async () => {
    const secondPromise = await forecastInventoryByWeather([
      "Decathlon Marseille Bonneveine, Chemin du Roi d'Espagne, 13009 Marseille"
    ]);
    const forecast = await secondPromise[0];

    expect(forecast).toBe('You need to buy some parkas for the store in Marseille');
  });
});
