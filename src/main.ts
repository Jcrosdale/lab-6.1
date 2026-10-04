import PhysicalProduct from "./models/PhysicalProduct.js";
import DigitalProduct from "./models/DigitalProduct.js";

const physicalProduct = new PhysicalProduct(
    '0001',
    'Product #1',
    7.25,
    40
)
const digitalProduct = new DigitalProduct(
    '00012',
    'Digtal #1',
    12.25,
    25
)

const products = [physicalProduct, digitalProduct];

for (let product of products) {
    console.log(product.displayDetails());
    console.log(product.getPriceWithTax());
}
