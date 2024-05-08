class Cart {
    constructor(){
    this.products = []
    this.total = 0
}
addProduct(product) {
    this.products.push(product);
    this.total += product.price;
}
removeProduct(product) {
    const index = this.products.findIndex (p => p === product)
    if (index !== -1) {
        this.products.splice (index, 1)
        this.total -= product.price
    }
}
}
module.exports = Cart