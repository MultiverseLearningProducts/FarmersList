const Customer = require('./Customer');

class Auth {
  constructor() {
    this.customers = [];
  }

  register(name, email, shippingAddress) {
    const newObj = new Customer(name, email, shippingAddress);
    this.customers.push(newObj);
  } 

  login(email) {
    const foundEmail = this.customers.find(customer => 
      customer.email === email
    )

    return foundEmail ? foundEmail : null;
  }
}

module.exports = Auth;