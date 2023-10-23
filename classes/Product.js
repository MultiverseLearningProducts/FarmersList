class Product {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.inStock = true;
    }
    display() {
        const dollar = "$";
        return `Name: ${this.name}, Price: ${dollar}${this.price}, Description: ${this.description}`;
    }
}

module.exports = Product;
