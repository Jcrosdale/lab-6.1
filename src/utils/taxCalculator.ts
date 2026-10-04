import Product from "../models/Product.js";

function calculateTax(product: Product) {
    product.getPriceWithTax();
};