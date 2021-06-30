const Person = require('./person')

class Crew extends Person {
    constructor(name){
		super(name)
	}
    AnnounceSafetyRules() {
        console.log('Please find the safety pamphlet in the seat pocket in front of you...')
    }
}

module.exports = Crew;