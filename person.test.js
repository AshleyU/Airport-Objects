const Person = require('./person')
const Passenger = require('./passenger')
const Crew = require('./crew')

const betty = new Passenger('Betty')

test('is an instance of a Passenger', () => {
    expect(betty instanceof Passenger).toBeTruthy()
})

test('Call attendant', () => {
    expect(betty.callAttendant()).toEqual("Excuses me!")
})

const mike = new Crew('Mike')

test('is an instance of a Crew', () => {
    expect(mike instanceof Crew).toBeTruthy()
})

test('Announce safety rules', () => {
    expect(mike.AnnounceSafetyRules()).toEqual("Please find the safety pamphlet in the seat pocket in front of you...")
})

test('Can add bag', () => {
    expect(mike.addBag()).toEqual(1);
})