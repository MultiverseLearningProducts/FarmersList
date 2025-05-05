class Customer {
    constructor(name, email, shippingAddress) {
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
        this.orderHistory = [];
        this.rewardPoints = 0;
    }

    addToOrderHistory(cart) {
        this.rewardPoints += cart.products.reduce((acc, product) => acc + product.rewardPoints, 0);
        this.orderHistory.push(cart);
    }

    getRewardPoints() {
        console.log(this.rewardPoints);
        return this.rewardPoints;
    }
}

module.exports = Customer;