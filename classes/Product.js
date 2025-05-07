class Product{
    constructor(name, price, description, inStock){
        // constructor(name, price, description, instock){
        this.name=name;
        this.price=price;
        this.description=description;
        inStock=true;
        this.inStock=inStock;
        // this.instock=true;

    }
    display(){
        return `Name: ${this.name}, Price: $${this.price}, Description: ${this.description}`}
}
module.exports = Product;

