class Cart{
    constructor(){
        this.products = [];
        this.total = 0;
    }

    addProduct(product){
        this.products.push(product);
        this.total += product.price;
    }

    removeProduct(indexProduct){
       // const indexProduct = this.products.map(e => e.name).indexOf(product.name);
       // console.log(this.products[indexProduct]);
        //console.log(this.products[indexProduct].price);
        this.total -= this.products[indexProduct].price;
        this.products.splice(indexProduct, 1);
    }
}

module.exports = Cart;