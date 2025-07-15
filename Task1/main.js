"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main = /** @class */ (function () {
    function main() {
    }
    main.prototype.CalculateGrossSlaray = function () {
        var result = this.basicSalary + this.basicSalary / 20 + this.basicSalary / 10;
        return "Gross salary: " + result;
    };
    main.prototype.getEmpname = function () {
        return "Employee name: " + this.empname;
    };
    main.prototype.getEmpId = function () {
        return "Employee ID: " + this.empId;
    };
    main.prototype.setEmpname = function (name) {
        this.empname = name;
    };
    main.prototype.setEmpId = function (id) {
        this.empId = id;
    };
    main.prototype.getBasicSalary = function () {
        return "Basic salary: " + this.basicSalary;
    };
    main.prototype.setBasicSalary = function (salary) {
        this.basicSalary = salary;
    };
    return main;
}());
var result = new main();
result.setEmpId(102);
result.setEmpname("Hari");
result.setBasicSalary(9000);
console.log(result.getEmpId());
console.log(result.getEmpname());
console.log(result.getBasicSalary());
console.log(result.CalculateGrossSlaray());
