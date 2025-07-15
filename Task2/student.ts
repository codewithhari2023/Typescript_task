import { StudentDetails } from "../student_details";

class student implements StudentDetails{
    name: string;
    rollno: number;
    marks: number[];
    grade: string;
    Totalmarks(): number {
        let total_mark=0
        for (let mark of this.marks){
            total_mark+=mark
        }
        return  total_mark
    }
    AvgMarks(): number {
        return this.Totalmarks()/this.marks.length;
    }
    getStudentname():any{
       
     return " Student_name: " + this.name
    }
     getStudentRollno():any{
       
     return " Student_Rollno: " + this.rollno
    }
    getStudentmarks():any{
       
     return " Student_marks: " + this.marks
    }
    setStudentmarks(mark:number[]):any{
       
      this.marks=mark
    }
    getGrade():any{
     if (this.AvgMarks()>90){
        return "Grade:A+" 
     }else if (this.AvgMarks()<90){
        return "Grade:A" 
     }
     else if (this.AvgMarks()<80){
        return "Grade:B+" 
     }
     else if (this.AvgMarks()<36){
        return "Grade:F" 
     }else{
        return "Grade:B"
     }

    }


    setStudentname(stdname:string):any{
       
      this.name=stdname
    }
     setStudentRollno(num:number):any{
       
      this.rollno=num
    }
    
}
let array=[98,96,97]
let std =new student();
std.setStudentname("Hari")
std.setStudentRollno(21)
std.setStudentmarks(array)
console.log(std.getStudentname())
console.log(std.getStudentRollno())
console.log(std.getStudentmarks())
console.log("Total: "+std.Totalmarks())
console.log("Avg: "+ std.AvgMarks())
console.log(std.getGrade())

// Task 2