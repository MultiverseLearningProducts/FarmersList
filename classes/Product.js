class Product {
    constructor(name, price, description, rewardPoints) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.inStock = true;
        this.rewardPoints = rewardPoints;
    }
    display() {
        const dollar = "$";
        return `Name: ${this.name}, Price: ${dollar}${this.price}, Description: ${this.description}`;
    }
}

module.exports = Product;
