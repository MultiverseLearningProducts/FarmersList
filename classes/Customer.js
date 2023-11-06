class Customer{
    constructor(name, email, shippingAddress){
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
        this.orderHistory = [];
    }

    addToOrderHistory(Cart){
        return this.orderHistory.push(Cart);
    }
}

module.exports = Customer;