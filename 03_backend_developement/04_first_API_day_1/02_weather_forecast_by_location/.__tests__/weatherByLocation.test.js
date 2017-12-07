jest.mock('./__mocks__/request');

const weatherByLocation = require('../weatherByLocation');

describe('#weatherByLatitudeAndLongitude()', () => {
  it('should load weather data for 16 days', async () => {
    const weather = await weatherByLocation.weatherByLatitudeAndLongitude(3.0586, 50.633);
    expect(weather).toHaveLength(16);
  });

  it('should have the following keys: date, temperature, weather', async () => {
    const weather = await weatherByLocation.weatherByLatitudeAndLongitude(3.0586, 50.633);
    weather.map(w => {
      expect(w).toHaveProperty('date');
      expect(w).toHaveProperty('temperature');
      expect(w).toHaveProperty('weather');
    });
  });

  it('should respect the following format: dd/mm/yyyy', async () => {
    const formatExpected = expect.stringMatching(/^\d{1,2}\/\d{2}\/\d{4}$/);

    const weather = await weatherByLocation.weatherByLatitudeAndLongitude(3.0586, 50.633);
    weather.map(w => {
      expect(w.date).toEqual(formatExpected);
    });
  });
});

describe('#weatherByZipcode()', () => {
  it('should load weather data for 16 days', async () => {
    const weather = await weatherByLocation.weatherByZipcode(59000, 'fr');
    expect(weather).toHaveLength(16);
  });

  it('should have the following keys: date, temperature, weather', async () => {
    const weather = await weatherByLocation.weatherByZipcode(59000, 'fr');
    weather.map(w => {
      expect(w).toHaveProperty('date');
      expect(w).toHaveProperty('temperature');
      expect(w).toHaveProperty('weather');
    });
  });

  it('should respect the following format: dd/mm/yyyy', async () => {
    const formatExpected = expect.stringMatching(/^\d{1,2}\/\d{2}\/\d{4}$/);

    const weather = await weatherByLocation.weatherByZipcode(59000, 'fr');
    weather.map(w => {
      expect(w.date).toEqual(formatExpected);
    });
  });
});
