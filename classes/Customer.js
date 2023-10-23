class Customer {
    constructor(name, email, shippingAddress) {
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
        this.orderHistory = [];
        this.rewardsPoints = 0;
    }
    addToOrderHistory(cart) {
        this.orderHistory.push(cart);
    }
    getRewardPoints() {
        for (const order of this.orderHistory) {
            this.rewardsPoints += order.rewardPoints;
        }
    }
}

module.exports = Customer;
