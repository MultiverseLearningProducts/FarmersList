// Import Classes Here
const Product = require("./classes/Product.js")


let newProduct = new Product("carrots", 4, "a bunch of carrots")

console.log(newProduct.inStock);

console.log(newProduct.display());








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