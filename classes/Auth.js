class Auth{
    constructor(customers) {
        this.customers = [];
    }

    register (name, email, shippingAddress) {
        let newCust = new Customer(this.name, this.email, this.shippingAddress);
        return newCust;
    }

    login(email){
Object.keys(this.customers).forEach((customer) => {
if (customer.email == email){
    return customer
} else console.log("Next")
})

}
}