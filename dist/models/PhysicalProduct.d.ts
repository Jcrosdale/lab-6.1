import Product from "./Product.js";
import DiscountableProduct from "./DiscountableProduct.js";
declare class PhysicalProduct extends Product implements DiscountableProduct {
    weight: number;
    constructor(sku: string, name: string, price: number, weight: number);
    getPriceWithTax(): number;
    get formatWeight(): string;
    applyDiscount(discountPercent: number): number;
}
export default PhysicalProduct;
//# sourceMappingURL=PhysicalProduct.d.ts.map