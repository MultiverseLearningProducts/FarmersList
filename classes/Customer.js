class Customer {
    constructor(name, email, shippingAddress) {
      this.name = name;
      this.email = email;
      this.shippingAddress = shippingAddress;
      this.orderHistory = []; // Initializes as an empty array
    }
  
    addToOrderHistory(cart) {
      this.orderHistory.push(cart);
    }
  }
  
  module.exports = Customer;