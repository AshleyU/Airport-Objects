const fsp = require('fs').promises; // Node.js file system module with promises
const fs = require('fs'); // Node.js file system module for standard callbacks
const path = require('path'); // Node.js directories and file paths module
const Passenger = require('./Passenger');
const { readFile } = require('fs/promises');


/**
 * Represents an airport.
 */
class Airport {
    static airports = [];
    // instance
    name = '';
    terminals = 1;
    gates = 1;
    plane_capacity = 12;
    planes = []; // incoming planes

    /**
     * Constructs an airport.
     * 
     * @param {string} name - the name of the airport
     * @param {number} terminals 
     * @param {number} gates 
     */
    constructor(name, terminals, gates) {
        this.name = name;

        if (terminals != undefined) {
            this.terminals = terminals;
        }
        if (gates != undefined) {
            this.gates = gates;
        }
        this.plane_capacity = terminals*gates;
        this.constructor.airports.push(this); // this syntax allows us to refer to the static Airport (i.e. the class)
    }

    /**
     * Adds an incoming plane to the airport
     * 
     * @param {plane} plane 
     */
    addPlane(plane) {
        plane.setOrigin(this.name);
        this.planes.push(plane);
    }

    /**
     * Removes a landed plane from the airport.
     * 
     * @param {plane} plane - The plane to remove
     */
    removePlane(plane) {
        const index = this.planes.indexOf(plane);
        this.planes.splice(index, 1);
    }

    /**
     * Takeoff from an origin airport towards the destination airport.
     * 
     * @param {plane} plane 
     */
    takeOff(plane) {
        const index = this.planes.indexOf(plane);
        this.planes.splice(index, 1);
        const destinationAirport = Airport.airports.find(
            airport => {   
                return airport.name === plane.destination;
            });

        destinationAirport.addPlane(plane)
    }

    /**
     * Land at the destination airport.
     * 
     * @param {plane} plane - The plane which has just landed.
     */
    land(plane) {
        this.removePlane(plane);       
    }

    getInfo() {
        return new Promise((resolve, reject) => {
            fs.readFile('./airportsData.json', (err, data) => {
                if (err) return reject(err)
                
                const airports = JSON.parse(String(data))
                const [airport] = Object.keys(airports)
                    .filter(airportCode => airports[airportCode].iata === this.name)
                    .map(airportCode => airports[airportCode])
                
                resolve(airport)
            })
        })
    }
}

module.exports = Airport