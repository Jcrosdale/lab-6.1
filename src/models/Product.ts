// Inside src/models/Product.ts, create a Product base class with the following:

class Product {
    //Properties: sku (string), name (string), price (number).
    sku: string;
    name: string;
    price: number;
    taxRate: number;

    constructor(sku: string, name: string, price: number, taxRate: number) {
        this.sku = sku;
        this.name = name;
        this.price = price;
        this.taxRate = taxRate;
    }
    // Methods

    //Returns a formatted string with the product’s details.
    displayDetails(): string {
        return `${this.name} costs $${this.price}. The sku is ${this.sku}.`;
    }

    //Calculates the final price of the product with tax.
    getPriceWithTax(): number {
        let result = this.price * (1 + this.taxRate);
        return Math.round(result * 100) / 100; 
    }

}
