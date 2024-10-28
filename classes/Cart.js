class Cart {
     constructor(name, price, description, inStock){
        this.name = name,
        this.price = price,
        this.description = description,
        this.inStock = true
    }
addProduct(product){
    this.products = this.products.push(product)
    this.total = this.total += 1
}

removeProduct(index){
    this.products = this.products.remove[index]
    this.total = this.total -= 1
}
}

module.exports = Cart