var Temprature = /** @class */ (function () {
    function Temprature() {
        this.celsius = 0;
    }
    Temprature.prototype.setCelsius = function (value) {
        if (value < -273.12) {
            throw new Error("Temprature cannot be below 273.15");
        }
        this.celsius = value;
    };
    Temprature.prototype.getFarenheit = function () {
        return (this.celsius * 9) / 5 + 32;
    };
    Temprature.prototype.display = function () {
        console.log("Celsius:".concat(this.celsius, "C"));
        console.log("Farenheit:".concat(this.getFarenheit(), "F"));
    };
    return Temprature;
}());
var temp = new Temprature();
temp.setCelsius(45);
temp.display();
