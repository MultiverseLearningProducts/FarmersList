class Cart {
  constructor(products = [], total = 0) {
    this.products = products;
    this.total = total;
  }
  addProduct(product) {
    this.products.push(product);
    this.total += product.price;
  }
  removeProduct(index) {
    if (this.products[index] === undefined) {
      return "Item not found!";
    } else {
      this.products.splice(index, 1);
      this.total = 0;
      this.products.forEach(product => {
        this.total += product.price;
      });
    }
  }
}

module.exports = Cart;
