class Plane {
    flightNumber;
    passengers;
    origin;
    destination;

    constructor(flightNumber, airline) {
        this.flightNumber = flightNumber;
        this.airline = airline;
    }
}

module.exports = Plane; 