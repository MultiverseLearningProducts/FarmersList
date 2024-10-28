class Product {
    constructor(name, price, description, inStock){
        this.name = name,
        this.price = price,
        this.description = description,
        this.inStock = true
    }

    display() {
        return `NAME:${this.name}, Price:${this.price}, DESCRIPTION: ${this.description} `
    }
}

module.exports = Product;