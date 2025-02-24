class Cart {
  constructor(products = [], number = 0) {
    this.products = products;
    this.number = number;
  }
  addProduct(product) {
    this.products.push(product);
  }
  removeProduct(index) {
    if(this.products(index) === undefined) {
      return "Item not found!";
    } else {
      this.products.splice(index, 1);
    }
  }
}

module.exports = Cart;