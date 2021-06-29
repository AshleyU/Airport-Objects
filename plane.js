class Plane {
    flightNumber;
    passengers;
    origin;
    destination;

    constructor(flightNumber) {
        this.flightNumber = flightNumber;
        this.passengers = []; 
    }

    boardPassenger(passenger) {
        this.passengers.push(passenger);
    }

    setDestination(destination) {
        this.destination = destination;
    }

    setOrigin(origin) {
        this.origin = origin;
    }
}

module.exports = Plane; 