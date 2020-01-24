const fetch = require('node-fetch');
const swapi = require('./script2');

// 1. use done to handle the async calls tested
it('calls swapi to get people', (done) => {
  expect.assertions(1);
  swapi.getPeople(fetch).then(data => {
    expect(data.count).toEqual(87);
    done();
  });
});
// 2. use return to test async calls
it('calls swapi to get people', () => {
  expect.assertions(1);
  return swapi.getPeople(fetch).then(data => {
    expect(data.count).toEqual(87);
  });
});

it('calls swapi to get people with a promise', () => {
  expect.assertions(2);
  return swapi.getPeoplePromise(fetch).then(data => {
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
  });
});