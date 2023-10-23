const p = require("./Product.js");
const ca = require("./Cart.js");
const c = require("./Customer.js");

class Auth {
    constructor() {
        this.cs = [];
    }

    register(n, e, sa) {
        this.cs.push(c(n, e, sa));
    }
    login(e) {
        return this.cs.find(c => e);
    }
}

module.exports = Auth;