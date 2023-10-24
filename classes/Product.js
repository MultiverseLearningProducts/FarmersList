class Product {
    constructor(name, price, description, rewardPoints, quantity) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.inStock = true;
        this.rewardPoints = rewardPoints;
        this.quantity = quantity;
    }
    display() {
        const dollar = "$";
        return `Name: ${this.name}, Price: ${dollar}${this.price}, Description: ${this.description}`;
    }
}

module.exports = Product;
