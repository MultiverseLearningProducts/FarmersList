const Customer = require("./Customer");

class Auth {
  constructor() {
    this.customers = [];
  }

  register(name, email, shippingAddress) {
    const newCustomer = new Customer(name, email, shippingAddress);
    this.customers.push(newCustomer); // Add the Customer to the array
    return newCustomer;
  }

  login(email) {
    return this.customers.find((customer) => customer.email === email) || null;
  }
}

module.exports = Auth;
