const Customer = require("./Customer");

class Auth {
    constructor() {
        this.customers = [];
    }
    register(name, email, shippingAddress) {
        const customer = new Customer(name, email, shippingAddress);
        this.customers.push(customer);
    }
    login(email) {
        const customer = this.customers.find(customer => customer.email === email);
        if (customer) {
            return customer
        }
        return null;
    }
}

module.exports = Auth;