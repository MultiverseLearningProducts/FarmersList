class Product {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;


        // Calculate reward points based on number of GBP of price
        this.rewardPoints = Math.floor(price);
        this.inStock = true;
    }

    display() {
        return `Name: ${this.name}, Price: $${this.price}, Description: ${this.description}`;
    }
}

module.exports = { Product };
