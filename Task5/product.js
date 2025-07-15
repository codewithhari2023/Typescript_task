"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.product = void 0;
var product = /** @class */ (function () {
    function product(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    product.prototype.getDetails = function () {
        return "Id: ".concat(this.id, ", name: ").concat(this.name, ", price: ").concat(this.price);
    };
    return product;
}());
exports.product = product;
// Task 5
