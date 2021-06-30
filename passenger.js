const Person = require('./person')

class Passenger extends Person {
    constructor(name){
		super(name)
        this.name = name;
	}
    callAttendant() {
        console.log('Excuses me!')
    }
}

module.exports = Passenger;