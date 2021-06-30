const Person = require('./person')
const Passenger = require('./passenger')
const Crew = require('./crew')

test('is an instance of a Passenger', () => {
    const betty = new Passenger('Betty')
    expect(betty instanceof Passenger).toBeTruthy()
})

test('is an instance of a Crew', () => {
    const mike = new Crew('Mike')
    expect(mike instanceof Crew).toBeTruthy()
})