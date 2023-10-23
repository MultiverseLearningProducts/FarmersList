// Import Classes Here

const Auth = require('./classes/Auth.js')
const Cart = require('./classes/Cart.js')
const Customer = require('./classes/Customer.js')
const Product = require('./classes/Product.js')


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