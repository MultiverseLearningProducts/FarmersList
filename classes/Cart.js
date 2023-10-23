class Cart{
    constructor(Products,total){
        this.Products = []
        this.total = 0
    }
    addProduct(Pruduct){
        this.Products.push(Pruduct)
        this.total +=1
    }
    removeProduct(Product){
        this.Products.shift()
        this.total -=1
    }
}

module.exports = Cart