class Product {
    constructor(n, p, d, i) {
        this.n = n;
        this.p = p;
        this.d = d;
        this.i = i;
    }
    display() {
        return `Name: ${this.n}, Price: $${this.p}, Description: ${this.d}`;
    }
}
module.exports = Product;