const Cart = require("./Cart");

class Customer {
  constructor(name, email, shippingAddress) {
    this.name = name;
    this.email = email;
    this.shippingAddress = shippingAddress;
    this.orderHistory = [];
  }

  addToOrderHistory(cart) {
    if (!(cart instanceof Cart)) {
      throw new Error("Only instances of Cart can be added");
    }
    this.orderHistory.push(cart); // Add the Cart instance to the order history
  }
}

module.exports = Customer;
