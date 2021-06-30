class Plane {
    flightNumber;
    passengers;
    origin;
    destination;
    crew;

    constructor(flightNumber, airline) {
        this.flightNumber = flightNumber;
        this.airline = airline;
    }
}

module.exports = Plane; 