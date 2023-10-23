class Cart {
  constructor() {
    this.products = [];
    this.total = 0;
  }
  addProduct(product) {
    this.products.push(product);
    this.total = this.products.length;
  }
}
