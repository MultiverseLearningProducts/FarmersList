class Product{
    constructor(name, price, description){
        this.name = name;
        this.price = price;
        this.description = description;
        this.instock = true;
        display() {
            resturn`Name: ${this.name}, Price: $${this.price}, Description: ${this.description}`;
        }
    }

}


