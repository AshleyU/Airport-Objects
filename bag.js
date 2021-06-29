class Bag {
	constructor(weight, color) {
		if(!weight) {
			throw new Error('Bag must have a weight.');
		}
		
		this.weight = weight;
        this.color = color;
	}
}

module.exports = Bag