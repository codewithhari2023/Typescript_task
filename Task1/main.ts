import {EmployeeDetails } from './employee_details'


class main implements EmployeeDetails{
    empId: number;
    empname: string;
    basicSalary: number;

    CalculateGrossSlaray():any {
        let result= this.basicSalary+this.getDA() +this.getHRA()
        return "Gross salary: "+result
    }
    getEmpname():any{
       
     return "Employee name: " + this.empname
    }
     getEmpId():any{
       
     return "Employee ID: " + this.empId
    }
     getHRA():any{
        return "HRA: " + 0.10 *this.basicSalary
     }
     getDA():any{
        return " DA: "+0.20*this.basicSalary
     }

     setEmpname(name:string):any{
     this.empname=name
    }
     setEmpId(id:number):void{
     this.empId=id
    }
    getBasicSalary():any{
     

     return "Basic salary: "+ this.basicSalary
    }
     setBasicSalary(salary:number):void{
     this.basicSalary=salary
    }

 
}

let result=new main();
result.setEmpId(102)
result.setEmpname("Hari")
result.setBasicSalary(9000)
console.log(result.getEmpId())
console.log(result.getEmpname())
console.log(result.getBasicSalary())
console.log(result.CalculateGrossSlaray())
console.log(result.getDA())
console.log(result.getHRA())

// Task 1