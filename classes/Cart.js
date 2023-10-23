class Cart {
    constructor() {
        this.products = [];
        this.total = 0;
    }

    addProduct(product) {
        this.products.push(product);
        this.total += product.price;
    }

    removeProduct(i) {
        const product = this.products[i];
        this.products.splice(i, 1);
        this.total -= product.price;
    }
    getTotal(){
        let sum = 0
        for(let i =0;i<this.products.length;i++){
            sum += this.products[i].price
        }
        return sum
    }
    clear(){
        this.products = []
        this.total = 0
    }
}

module.exports = Cart;
