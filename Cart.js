class Cart {
  constructor() {
    this.products = [];
    this.total = 0;
  }
  addProduct(product) {
    this.product.push(product);
    this.total += product.price;
  }
  removeProduct(product) {
    product = this.product[i];
    this.product.pop(product);
  }
}

module.exports = Cart;
