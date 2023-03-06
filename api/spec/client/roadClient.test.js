const RoadgoatClient = require('../../client/roadgoatClient');
const mockRoadResponse = require('./mockRoadgoat')

require('jest-fetch-mock').enableMocks();

describe('RoadgoatClient', () => {
  it('calls fetch and returns city information from API', () => {
    const client = new RoadgoatClient()
    fetch.mockResponseOnce(JSON.stringify(mockRoadResponse))
    const city = 'barcelona-spain';
    client.loadCity(city).then((city) => {
    console.log('roadgoat client', mockRoadResponse.data)
    expect(city).toEqual(mockRoadResponse.data)
   })
  })
})