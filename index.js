// Import Classes Here
const Product = require('./Product');
// Example of creating a new Product instance and using the display method
let myProduct = new Product('Example Product', 19.99, 'This is a sample description.');
console.log(myProduct.display());
//
const Cart = require('./Cart');
// Example usage
const cart = new Cart();
console.log(cart); // Initially empty cart
//
const Customer = require('./Customer');
// Example usage
let customer = new Customer('Jane Doe', 'jane.doe@example.com', '123 Elm Street');
console.log(customer);

// DO NOT EDIT BELOW THIS LINE
try {
    module.exports = {
        Product,
    }
} catch(e){

}

try {
    module.exports = {
        Product,
        Cart
    }
} catch(e){

}

try {
    module.exports = {
        Product,
        Cart,
        Customer
    }
} catch(e){

}

try {
    module.exports = {
        Product,
        Cart,
        Customer,
        Auth
    }
} catch(e){

}