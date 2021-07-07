const Airport = require('./Airport');

test('airports have a city', () => {
    const CDG = new Airport('CDG')
    return CDG.getInfo()
        .then(info => {
            expect(info.city).toEqual('Paris')
        })
        .catch(err => {
            expect(err).toBeNull();
        })
})

test('can get information like the city from an airport instance', async () => {
    const CDG = new Airport('CDG')
    const airport = await CDG.getInfo()
    expect(airport.city).toEqual('Paris')
})
