"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_1 = require("./product");
var cart = /** @class */ (function () {
    function cart() {
        this.carts = [];
    }
    cart.prototype.AddtoCart = function (item) {
        this.carts.push(item);
        console.log("Added product: ".concat(item.getDetails()));
    };
    cart.prototype.RemoveCart = function (Id) {
        this.carts = this.carts.filter(function (cart) { return cart.id !== Id; });
        console.log("Removed product: ".concat(Id));
    };
    cart.prototype.calculateTotal = function () {
        var total = 0;
        for (var _i = 0, _a = this.carts; _i < _a.length; _i++) {
            var item = _a[_i];
            total += item.price;
        }
        return total;
    };
    return cart;
}());
var cart1 = new cart();
var cartproduct = new product_1.product(101, "iphone", 40000);
cart1.AddtoCart(cartproduct);
console.log(cartproduct.getDetails());
// Task 5
