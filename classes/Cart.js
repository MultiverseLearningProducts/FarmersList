class Cart {
    constructor() {
        this.products = [];
        this.total = 0;
    }

    addProduct(product) {
        this.products.push(product);
        this.total += product.price;
    }

    removeProduct(idx) {
        const product = this.products.splice(idx, 1)[0];
        this.total -= product.price;
    }

    removeProductByName(name) {
        const idx = this.products.indexOf(p => p.name === name);
        if (idx === -1) return;
        this.removeProduct(idx);
    }
}

module.exports = { Cart };
