class Customer {

    constructor(name, email, shippingAddress) {
        this.name = name
        this.email = email
        this.shippingAddress = shippingAddress
        this.orderHistory = []
        this.rewardPoints = 0
    }

    addToOrderHistory(cart) {
        this.orderHistory.push(cart)
    }

    getRewardPoints() {
        for(let i = 0; i < this.orderHistory.length; i++) {
            let cartItems = this.orderHistory[i].products
            
            for(let j = 0; j < cartItems.length; j++) {
                let productRewardPoints = cartItems[j].rewardPoints

                this.rewardPoints += productRewardPoints
            }
        }
    }
}

module.exports = Customer