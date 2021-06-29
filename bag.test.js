const Bag = require('./Bag')

describe('Bag', function () {
    test('has a weight', function () {
        const bag = new Bag(13, "red");
        expect(bag.weight).toBe(13);
        expect(bag.color).toBe(string);
    });

    test('does not have a weight', function () {
        expect(() => new Bag()).toThrowError('bag must have a weight');
    });
});