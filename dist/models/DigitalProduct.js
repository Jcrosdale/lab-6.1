import Product from "./Product.js";
class DigitalProduct extends Product {
    fileSize;
    constructor(sku, name, price, fileSize) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }
    getPriceWithTax() {
        return this.price;
    }
    get FormatFile() {
        return `${this.fileSize} MB`;
    }
}
export default DigitalProduct;
//# sourceMappingURL=DigitalProduct.js.map