class Person {
    name;
    bags;

    constructor(name) {
        this.name = name;
        this.bags = [];
    }

    addBag(bag) {
        return this.bags.push(bag);
    }
}

module.exports = Person;