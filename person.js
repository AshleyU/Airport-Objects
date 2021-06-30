class Person {
    name;
    bags;

    constructor(name) {
        this.name = name;
        this.bags = [];
    }

    addBag(bag) {
        this.bags.push(bag);
    }
}

module.exports = Person;