class Cart {

    constructor() {
        this.products = []
        this.total = 0
    }

    addProduct(product) {
        this.products.push(product);
        this.total += product.price;
    }

    removeProduct(i) {
        let price = this.products[i].price;
        this.total -= price

        this.products.splice(i, 1)
    }

    getTotal() {
        return this.total
    }

    clear(){
        let length = this.products.length;

        this.products.splice(0, length)
        this.total = 0
        
    }
}

module.exports = Cart