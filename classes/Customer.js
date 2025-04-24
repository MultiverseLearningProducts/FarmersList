class Customer {
    constructor(name, email, shippingAddress, orderHistory){
        this.name = name,
        this.email = email,
        this.shippingAddress = shippingAddress,
        this.orderHistory = []
    }


addToOrderHistory(Cart){
    this.orderHistory = this.orderHistory.push(Cart)
    this.total = this.total += 1
}
}

module.exports = Customer