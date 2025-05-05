class Cart {
    constructor(products = [], total = 0) {
        this.products = products;
        this.total = total;
    }

    addProduct(product) {
        this.total += product.price;
        this.products.push(product)
        console.log(this.products)
    }

    removeProduct(index) {
        if (index >= 0 && index < this.products.length) {
            const removed = this.products.splice(index, 1)[0]
            this.total -= removed.price
        }
    }
}

module.exports = Cart;