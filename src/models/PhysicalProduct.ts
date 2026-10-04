// Create a PhysicalProduct class that extends Product.
import Product from "./Product.js";

class PhysicalProduct extends Product {
    //Add a weight property (number) for physical products.
    weight: number;


}

//Override the getPriceWithTax() method to calculate a final price that includes a 10% tax rate.
getPriceWithTax(): number {
        let result = this.price * (1 + 0.10);
        return Math.round(result * 100) / 100; 
    }


//Use a getter method to return the formatted weight in kilograms (e.g. “2.5 kg”).