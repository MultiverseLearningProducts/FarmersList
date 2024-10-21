const Product = require("./Product");

class Cart {
  constructor() {
    this.products = [];
    this.total = 0;
  }

  addProduct(product) {
    if (!(product instanceof Product)) {
      throw new Error("Only instances of Product can be added");
    }
    this.products.push(product); // Add the product to the array
    this.total += product.price; // Update the total cost
  }

  removeProduct(index) {
    if (index >= 0 && index < this.products.length) {
      const product = this.products.splice(index, 1)[0]; // Remove product at the given index
      this.total -= product.price; // Update the total cost
    } else {
      throw new Error("Invalid index");
    }
  }
}

module.exports = Cart;
