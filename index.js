// Import Classes Here
const Product = require("./Product")
const Cart = require("./Cart")
const Customer = require("./Customer");
const Auth = require("./Auth");


const cart1 = new Cart()
const newProd = new Product("Apple", 12, "An apple", true)
const newProd2 = new Product("Mango", 20, "A mango", true)
cart1.addProduct(newProd)
cart1.addProduct(newProd2)
cart1.getTotal()











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