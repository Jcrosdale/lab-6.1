// Inside src/models/Product.ts, create a Product base class with the following:
class Product {
    //Properties: sku (string), name (string), price (number).
    sku;
    name;
    price;
    constructor(sku, name, price) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }
    // Methods
    //Returns a formatted string with the product’s details.
    displayDetails() {
        return `${this.name} costs $${this.price}. The sku is ${this.sku}.`;
    }
    //Calculates the final price of the product with tax.
    getPriceWithTax() {
        return this.price;
    }
}
export default Product;
//# sourceMappingURL=Product.js.map