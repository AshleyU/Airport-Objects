const Person = require('./person')

class Passenger extends Person {
    constructor(name){
		super(name)
        this.name = name;
	}
    callAttendant() {
        return 'Excuses me!';
    }
}

module.exports = Passenger;