class Cart{
    constructor(){
        const products = [];
        let total = 0;
    }

    addProduct(product){
        this.products.push(product);
        this.total += product.price;
    }

    removeProduct(product){
        const indexProduct = this.products.map(e => e.name).indexOf(product.name);
        product.splice(indexProduct, 1);
        this.total -= this.products[indexProduct].price;
    }
}

module.exports = Cart;