const Airport = require('./Airport');

test('airports have a city', () => {
    const CDG = new Airport('CDG')
    CDG.getInfoCallback((err, info) => {
        console.log(info)
        expect(err).toBeNull()
        expect(info.country).toEqual('FR')
    })
})

