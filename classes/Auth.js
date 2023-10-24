const Customer = require("./Customer");

class Auth {
    constructor() {
        this.customers = [];
    }
    register(name, email, shippingAddress) {
        const newCustomer = new Customer(name, email, shippingAddress);
        this.customers.push(newCustomer);
    }
    login(email) {
        for (const person of this.customers) {
            if (person.email === email) {
                return person;
            }
        }
        return null;
    }
}

module.exports = Auth;
