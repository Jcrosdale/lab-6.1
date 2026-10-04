// Create a PhysicalProduct class that extends Product.
import Product from "./Product.js";
class PhysicalProduct extends Product {
    //Add a weight property (number) for physical products.
    weight;
    constructor(sku, name, price, weight) {
        super(sku, name, price);
        this.weight = weight;
    }
    //Override the getPriceWithTax() method to calculate a final price that includes a 10% tax rate.
    getPriceWithTax() {
        let result = this.price * (1 + 0.10);
        return Math.round(result * 100) / 100;
    }
    //Use a getter method to return the formatted weight in kilograms (e.g. “2.5 kg”).
    get formatWeight() {
        return `${this.weight} kg`;
    }
}
//# sourceMappingURL=PhysicalProduct.js.map