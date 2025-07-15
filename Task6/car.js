var car = /** @class */ (function () {
    function car(carid, brand, model, price) {
        this.carid = carid;
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    car.prototype.getCarDetails = function () {
        return "Id:".concat(this.carid, ", brand: ").concat(this.brand, ", model: ").concat(this.model, ",price:").concat(this.price);
    };
    return car;
}());
var carFunction = /** @class */ (function () {
    function carFunction() {
        this.cars = [];
    }
    carFunction.prototype.AddCar = function (item) {
        this.cars.push(item);
        console.log("Added car: ".concat(item.getCarDetails()));
    };
    carFunction.prototype.RemoveCar = function (Id) {
        this.cars = this.cars.filter(function (car) { return car.carid !== Id; });
        console.log("Removed product: ".concat(Id));
    };
    carFunction.prototype.Totalsales = function () {
        var total = 0;
        for (var _i = 0, _a = this.cars; _i < _a.length; _i++) {
            var item = _a[_i];
            total += item.price;
        }
        return total;
    };
    carFunction.prototype.listCars = function () {
        console.log('\nCar Catalog:');
        this.cars.forEach(function (car) { return console.log(car.getCarDetails()); });
    };
    return carFunction;
}());
var carx = new carFunction();
var car1 = new car(1, "maruti", "xuv", 50000);
var car2 = new car(2, "Bmw", "i6", 700000);
carx.AddCar(car1);
carx.AddCar(car2);
carx.listCars();
