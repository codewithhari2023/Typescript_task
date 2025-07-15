"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var student = /** @class */ (function () {
    function student() {
    }
    student.prototype.Totalmarks = function () {
        var total_mark = 0;
        for (var _i = 0, _a = this.marks; _i < _a.length; _i++) {
            var mark = _a[_i];
            total_mark += mark;
        }
        return total_mark;
    };
    student.prototype.AvgMarks = function () {
        return this.Totalmarks() / this.marks.length;
    };
    student.prototype.getStudentname = function () {
        return " Student_name: " + this.name;
    };
    student.prototype.getStudentRollno = function () {
        return " Student_Rollno: " + this.rollno;
    };
    student.prototype.getStudentmarks = function () {
        return " Student_marks: " + this.marks;
    };
    student.prototype.setStudentmarks = function (mark) {
        this.marks = mark;
    };
    student.prototype.getGrade = function () {
        if (this.AvgMarks() > 90) {
            return "Grade:A+";
        }
        else if (this.AvgMarks() < 90) {
            return "Grade:A";
        }
        else if (this.AvgMarks() < 80) {
            return "Grade:B+";
        }
        else if (this.AvgMarks() < 36) {
            return "Grade:F";
        }
        else {
            return "Grade:B";
        }
    };
    student.prototype.setStudentname = function (stdname) {
        this.name = stdname;
    };
    student.prototype.setStudentRollno = function (num) {
        this.rollno = num;
    };
    return student;
}());
var array = [98, 96, 97];
var std = new student();
std.setStudentname("Hari");
std.setStudentRollno(21);
std.setStudentmarks(array);
console.log(std.getStudentname());
console.log(std.getStudentRollno());
console.log(std.getStudentmarks());
console.log("Total: " + std.Totalmarks());
console.log("Avg: " + std.AvgMarks());
console.log(std.getGrade());
