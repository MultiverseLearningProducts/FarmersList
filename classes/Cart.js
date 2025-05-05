class Cart {
    constructor() {
        this.products = [];
        this.total = 0;
    }

    addProduct(product, quantity) {
        if (quantity > 0) {
            this.products.push(product);
            this.total += product.price * quantity;
        }
    }

    removeProduct(i, quantity) {
        const product = this.products[i];
        if (quantity >= product.quantity) {
            //this.products.splice(i, 1);
            this.total -= product.price * quantity;
            product.quantity -= quantity;
            if (product.quantity === 0) {
                product.inStock = false;
            }
            return product;
        } else {
            return `I'm sorry there are only ${product.quantity}  of this product left`;
        }
    }
    getTotal() {
        let sum = 0;
        for (let i = 0; i < this.products.length; i++) {
            sum += this.products[i].price;
        }
        return sum;
    }
    clear() {
        this.products = [];
        this.total = 0;
    }
    removeItemByName(product) {
        return this.products.filter((item) => item.name !== product.name);
    }
}

module.exports = Cart;
