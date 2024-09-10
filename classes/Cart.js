const Product = require("./Product");

class Cart {
  constructor() {
    this.products = [];
    this.total = 0;
  }

  addProduct(product) {
    if (product instanceof Product) {
      this.products.push(product);
      this.total += product.price;
    }
  }

  removeProduct(i) {
    if (i > this.products.length) return "Product is no longer in stock";
    this.total -= this.products[i].price;
    this.products.splice(i, 1);
  }
}

module.exports = Cart;
