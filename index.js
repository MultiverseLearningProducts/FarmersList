// Import Classes Here
const Product = require("./classes/Product.js")

const carrots = new Product("Carrots", 4, "Bushel of carrots that have been freshly harvested for you");
console.log(carrots);







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